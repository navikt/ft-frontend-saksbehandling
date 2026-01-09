import dayjs from 'dayjs';

import { FagsakYtelseType, PeriodeÅrsak } from '@navikt/ft-kodeverk';
import type {
  AktivitetStatus,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  YtelseGrunnlag,
} from '@navikt/ft-types';
import { isAksjonspunktOpen, ISO_DATE_FORMAT, sortPeriodsBy } from '@navikt/ft-utils';

import { AksjonspunktKode, medAPKode } from '../../utils/aksjonspunkt';
import { andelErIkkeTilkommetEllerLagtTilAvSBH } from '../../utils/beregningsgrunnlagUtils';

const VIRKEDAGER_PR_AAR = 260;

const ÅRSAKER_SOM_KAN_GI_NY_DAGSATS = new Set<string>([
  PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET,
  PeriodeÅrsak.NATURALYTELSE_TILKOMMER,
  PeriodeÅrsak.NATURALYTELSE_BORTFALT,
]);

type TabellRadData = {
  aktivitetStatus: AktivitetStatus;
  ferdigBeregnetInntekt: number | undefined;
  bortfaltNaturalytelse: number | undefined;
};

export type TabellData = {
  fom: string;
  tom: string | undefined;
  andelerPerStatus: TabellRadData[];
  redusertMed?: number;
  avkortetMed?: number;
  totalInntektEtterAvkortningOgReduksjon?: TotalInntekt;
  dagsats?: number;
};

type TotalInntekt = { totalInntekt: number; type: 'total' | 'avkortet' | 'redusert' };

const finnForeslåttBeløp = (andel: BeregningsgrunnlagAndel): number => {
  if (andel.besteberegningPrAar || andel.besteberegningPrAar === 0) {
    return andel.besteberegningPrAar;
  }
  if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
    return andel.overstyrtPrAar;
  }
  return andel.beregnetPrAar ?? 0;
};

const harÅpentAksjonspunktForStatus = (
  status: AktivitetStatus,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => {
  const åpneAvklaringsbehov = avklaringsbehov.filter(isAksjonspunktOpen);
  switch (status) {
    case 'AT':
    case 'FL':
      return åpneAvklaringsbehov.some(
        medAPKode(
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        ),
      );
    case 'SN':
      return åpneAvklaringsbehov.some(
        medAPKode(
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
          AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      );
    case 'BA':
      return åpneAvklaringsbehov.some(medAPKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON));
    default:
      return false;
  }
};

const finnNaturalytelsebeløp = ({ arbeidsforhold }: BeregningsgrunnlagAndel): number => {
  const bortfaltNaturalytelse = arbeidsforhold?.naturalytelseBortfaltPrÅr;
  const tilkommetNaturalytelse = arbeidsforhold?.naturalytelseTilkommetPrÅr || 0;
  if (!bortfaltNaturalytelse) {
    return 0;
  }
  return bortfaltNaturalytelse - tilkommetNaturalytelse;
};

const erBeregnet = ({ beregnetPrAar, pgiSnitt }: BeregningsgrunnlagAndel): boolean => {
  const beregnetErSatt = beregnetPrAar !== undefined && beregnetPrAar !== null;
  const pgiErSatt = pgiSnitt !== undefined && pgiSnitt !== null;
  return beregnetErSatt || pgiErSatt;
};

const lagAndeler = (
  andeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): { andelerPerStatus: TabellRadData[]; erAlleAndelerFastsatt: boolean } => {
  const andelerSomSkalVises = andeler.filter(andelErIkkeTilkommetEllerLagtTilAvSBH);
  const grupperteAndelerMap = Map.groupBy(andelerSomSkalVises, andel => andel.aktivitetStatus);

  const andelerPerStatus = grupperteAndelerMap
    .entries()
    .map(([aktivitetStatus, andelerMedStatus]) => {
      const harÅpentAksjonspunkt = harÅpentAksjonspunktForStatus(aktivitetStatus, avklaringsbehov);
      const erFerdigBeregnet = andelerMedStatus.every(erBeregnet) && !harÅpentAksjonspunkt;
      const ferdigBeregnetInntekt = erFerdigBeregnet
        ? andelerMedStatus.reduce((sum, andel) => finnForeslåttBeløp(andel) + sum, 0)
        : undefined;
      const bortfaltNaturalytelse = andelerMedStatus.reduce((sum, andel) => finnNaturalytelsebeløp(andel) + sum, 0);
      return {
        ferdigBeregnetInntekt,
        bortfaltNaturalytelse,
        aktivitetStatus,
      };
    })
    .toArray()
    .sort(sorterAndelerEtterPrioritet);

  return {
    andelerPerStatus,
    erAlleAndelerFastsatt: andelerPerStatus.every(andel => !!andel.ferdigBeregnetInntekt),
  };
};

const harÅrsakSomKanGiNyDagsats = (årsaker: string[]) => årsaker.some(k => ÅRSAKER_SOM_KAN_GI_NY_DAGSATS.has(k));

const regnUtTom = (nesteElement: BeregningsgrunnlagPeriodeProp | undefined) => {
  return nesteElement
    ? dayjs(nesteElement.beregningsgrunnlagPeriodeFom).subtract(1, 'day').format(ISO_DATE_FORMAT)
    : undefined;
};

export const utledTabellData = ({
  avklaringsbehov,
  skjaeringstidspunktBeregning,
  beregningsgrunnlagPeriode,
  grunnbeløp,
  dekningsgrad,
  ytelsesspesifiktGrunnlag,
}: Beregningsgrunnlag): TabellData[] => {
  const harDekningsgradUlik100 = dekningsgrad !== 100;
  // Vi skal alltid vise første periode, deretter kun perioder som er opprettet pga noe som kan endre dagsatsen i perioden
  return beregningsgrunnlagPeriode
    .filter(
      bgp =>
        bgp.beregningsgrunnlagPeriodeFom === skjaeringstidspunktBeregning ||
        harÅrsakSomKanGiNyDagsats(bgp.periodeAarsaker ?? []),
    )
    .sort(sortPeriodsBy('beregningsgrunnlagPeriodeFom'))
    .map((bgp, index, array) => {
      const {
        beregningsgrunnlagPeriodeFom: fom,
        beregningsgrunnlagPrStatusOgAndel = [],
        bruttoInkludertBortfaltNaturalytelsePrAar,
        redusertPrAar,
        avkortetPrAar,
      } = bgp;

      const tom = regnUtTom(array[index + 1]);
      const { andelerPerStatus, erAlleAndelerFastsatt } = lagAndeler(
        beregningsgrunnlagPrStatusOgAndel,
        avklaringsbehov,
      );

      if (erAlleAndelerFastsatt) {
        const harBruttoOver6G = erBruttoOver6G(bgp, grunnbeløp);
        return {
          fom,
          tom,
          andelerPerStatus,
          redusertMed: redusertPrAar ? -(redusertPrAar / 0.8) * 0.2 : undefined,
          avkortetMed:
            bruttoInkludertBortfaltNaturalytelsePrAar && avkortetPrAar
              ? -bruttoInkludertBortfaltNaturalytelsePrAar + avkortetPrAar
              : undefined,
          totalInntektEtterAvkortningOgReduksjon: finnTotalInntektRedusertEllerAvkortet(
            bgp,
            harBruttoOver6G,
            harDekningsgradUlik100,
          ),
          dagsats: finnDagsats(bgp, ytelsesspesifiktGrunnlag),
        };
      } else {
        return { fom, tom, andelerPerStatus };
      }
    });
};

const STATUS_PRIORITET = new Map<AktivitetStatus, number>([
  ['AT', 0],
  ['FL', 1],
  ['DP', 2],
  ['SP_AV_DP', 3],
  ['PSB_AV_DP', 4],
  ['AAP', 5],
  ['KUN_YTELSE', 6],
  ['MS', 7],
  ['BA', 8],
  ['SN', 9],
]);

const sorterAndelerEtterPrioritet = (a: TabellRadData, b: TabellRadData) =>
  (STATUS_PRIORITET.get(a.aktivitetStatus) ?? 100) - (STATUS_PRIORITET.get(b.aktivitetStatus) ?? 100);

const erBruttoOver6G = (
  { bruttoInkludertBortfaltNaturalytelsePrAar, bruttoPrAar }: BeregningsgrunnlagPeriodeProp,
  grunnbeløp: number,
): boolean => finnTotalInntekt(bruttoInkludertBortfaltNaturalytelsePrAar, bruttoPrAar) > grunnbeløp * 6;

export const erMidlertidigInaktiv = (aktivitetStatus: AktivitetStatus[]): boolean =>
  !!aktivitetStatus && aktivitetStatus.includes('MIDL_INAKTIV');

const finnTotalInntekt = (
  bruttoInkludertBortfaltNaturalytelsePrAar: number | undefined,
  bruttoPrAar: number = 0,
): number => bruttoInkludertBortfaltNaturalytelsePrAar ?? bruttoPrAar;

const finnTotalInntektRedusertEllerAvkortet = (
  {
    avkortetPrAar,
    redusertPrAar,
    bruttoInkludertBortfaltNaturalytelsePrAar,
    bruttoPrAar,
  }: BeregningsgrunnlagPeriodeProp,
  harBruttoOver6G: boolean,
  harDekningsgradUlik100: boolean,
): TotalInntekt => {
  if (harDekningsgradUlik100 && redusertPrAar) {
    return { totalInntekt: redusertPrAar, type: 'redusert' };
  }
  if (harBruttoOver6G && avkortetPrAar) {
    return { totalInntekt: avkortetPrAar, type: 'avkortet' };
  }
  return { totalInntekt: finnTotalInntekt(bruttoInkludertBortfaltNaturalytelsePrAar, bruttoPrAar), type: 'total' };
};

const finnDagsats = (
  { avkortetPrAar, dagsats }: BeregningsgrunnlagPeriodeProp,
  ytelseGrunnlag?: YtelseGrunnlag,
): number => {
  if (ytelseGrunnlag?.ytelsetype !== FagsakYtelseType.FORELDREPENGER && avkortetPrAar) {
    return Math.round(avkortetPrAar / VIRKEDAGER_PR_AAR);
  }
  return dagsats || 0;
};
