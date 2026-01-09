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
import { statusKonfigMap } from './statusKonfig';

const VIRKEDAGER_PR_AAR = 260;

const ÅRSAKER_SOM_KAN_GI_NY_DAGSATS = new Set<string>([
  PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET,
  PeriodeÅrsak.NATURALYTELSE_TILKOMMER,
  PeriodeÅrsak.NATURALYTELSE_BORTFALT,
]);

type TabellRadData = {
  aktivitetStatus: AktivitetStatus;
  erFerdigBeregnet: boolean;
  inntekt?: number;
  bortfaltNaturalytelse?: number;
  inntektPlussNaturalytelse?: number;
};

export type TabellData = {
  fom: string;
  tom?: string;
  harBruttoOver6G: boolean;
  andeler: TabellRadData[];
  redusertMed: number | undefined;
  avkortetMed: number | undefined;
  totalInntektEtterAvkortningOgReduksjon?: number;
  dagsats: number | undefined;
};

const finnForeslåttBeløp = (andel: BeregningsgrunnlagAndel): number => {
  if (andel.besteberegningPrAar || andel.besteberegningPrAar === 0) {
    return andel.besteberegningPrAar;
  }
  if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
    return andel.overstyrtPrAar;
  }
  return andel.beregnetPrAar ?? 0;
};

const finnAksjonspunktForStatus = (
  status: AktivitetStatus,
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined => {
  switch (status) {
    case 'AT':
    case 'FL':
      return avklaringsbehov.find(
        medAPKode(
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        ),
      );
    case 'SN':
      return avklaringsbehov.find(
        medAPKode(
          AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
          AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      );
    case 'BA':
      return avklaringsbehov.find(medAPKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON));
    default:
      return undefined;
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
): TabellRadData[] => {
  const andelerSomSkalVises = andeler.filter(andelErIkkeTilkommetEllerLagtTilAvSBH);
  const grupperteAndeler = Map.groupBy(andelerSomSkalVises, andel => andel.aktivitetStatus);

  return grupperteAndeler
    .entries()
    .map<TabellRadData>(([aktivitetStatus, andelerMedStatus]) => {
      const aksjonspunkt = finnAksjonspunktForStatus(aktivitetStatus, avklaringsbehov);
      const alleAndelerErBeregnet = andelerMedStatus.every(erBeregnet);
      const inntekt = andelerMedStatus.reduce((sum, andel) => finnForeslåttBeløp(andel) + sum, 0);
      const bortfaltNaturalytelse = andelerMedStatus.reduce((sum, andel) => finnNaturalytelsebeløp(andel) + sum, 0);
      const inntektPlussNaturalytelse = (inntekt || 0) + (bortfaltNaturalytelse || 0);
      const erFerdigBeregnet = alleAndelerErBeregnet && !isAksjonspunktOpen(aksjonspunkt);
      return {
        inntekt,
        bortfaltNaturalytelse,
        inntektPlussNaturalytelse,
        erFerdigBeregnet,
        aktivitetStatus,
      };
    })
    .toArray()
    .sort(sorterAndelerEtterPrioritet);
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
}: Beregningsgrunnlag) => {
  const harDekningsgradUlik100 = dekningsgrad !== 100;
  // Vi skal alltid vise første periode, deretter kun perioder som er opprettet pga noe som kan endre dagsatsen i perioden
  return beregningsgrunnlagPeriode
    .filter(
      bgp =>
        bgp.beregningsgrunnlagPeriodeFom === skjaeringstidspunktBeregning ||
        harÅrsakSomKanGiNyDagsats(bgp.periodeAarsaker ?? []),
    )
    .sort(sortPeriodsBy('beregningsgrunnlagPeriodeFom'))
    .map<TabellData>((bgp, index, array) => {
      const {
        beregningsgrunnlagPeriodeFom,
        beregningsgrunnlagPrStatusOgAndel,
        bruttoInkludertBortfaltNaturalytelsePrAar,
        redusertPrAar,
        avkortetPrAar,
      } = bgp;

      const andeler = lagAndeler(beregningsgrunnlagPrStatusOgAndel || [], avklaringsbehov);
      const harBruttoOver6G = erBruttoOver6G(andeler, grunnbeløp);

      const erAlleAndelerFastsatt = andeler.every(andel => andel.erFerdigBeregnet);

      return {
        harBruttoOver6G,
        fom: beregningsgrunnlagPeriodeFom,
        tom: regnUtTom(array[index + 1]),
        andeler,
        redusertMed: erAlleAndelerFastsatt && redusertPrAar ? -(redusertPrAar / 0.8) * 0.2 : undefined,
        avkortetMed:
          erAlleAndelerFastsatt && bruttoInkludertBortfaltNaturalytelsePrAar && avkortetPrAar
            ? -bruttoInkludertBortfaltNaturalytelsePrAar + avkortetPrAar
            : undefined,
        totalInntektEtterAvkortningOgReduksjon: erAlleAndelerFastsatt
          ? finnTotalEllerAvkortetInntekt(bgp, andeler, harBruttoOver6G, harDekningsgradUlik100)
          : undefined,
        dagsats: erAlleAndelerFastsatt ? finnDagsats(bgp, ytelsesspesifiktGrunnlag) : undefined,
      };
    });
};

const finnRekkefølgePrioritet = (andel: TabellRadData): number => {
  const pri = statusKonfigMap[andel.aktivitetStatus];
  return pri || 100; // Default settes veldig høyt så den havner nederst i tabellen
};

const sorterAndelerEtterPrioritet = (a: TabellRadData, b: TabellRadData) =>
  finnRekkefølgePrioritet(a) - finnRekkefølgePrioritet(b);

export const erBruttoOver6G = (andeler: TabellRadData[], grunnbeløp: number): boolean =>
  finnTotalInntekt(andeler) > grunnbeløp * 6;

export const erMidlertidigInaktiv = (aktivitetStatus: AktivitetStatus[]): boolean =>
  !!aktivitetStatus && aktivitetStatus.includes('MIDL_INAKTIV');

const finnTotalInntekt = (andeler: TabellRadData[]): number =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);

const finnTotalEllerAvkortetInntekt = (
  { avkortetPrAar, redusertPrAar }: BeregningsgrunnlagPeriodeProp,
  andeler: TabellRadData[],
  harBruttoOver6G: boolean,
  harDekningsgradUlik100: boolean,
): number => {
  if (harDekningsgradUlik100 && redusertPrAar) {
    return redusertPrAar;
  }
  if (harBruttoOver6G && avkortetPrAar) {
    return avkortetPrAar;
  }
  return finnTotalInntekt(andeler);
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
