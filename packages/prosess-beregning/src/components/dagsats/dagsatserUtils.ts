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
import type { TabellData, TabellRadData } from './dagsatsTabell';
import { statusKonfigMap } from './statusKonfig';

const VIRKEDAGER_PR_AAR = 260;

const ÅRSAKER_SOM_KAN_GI_NY_DAGSATS = new Set<string>([
  PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET,
  PeriodeÅrsak.NATURALYTELSE_TILKOMMER,
  PeriodeÅrsak.NATURALYTELSE_BORTFALT,
]);

const finnForeslåttBeløp = (andel: BeregningsgrunnlagAndel): number => {
  if (andel.besteberegningPrAar || andel.besteberegningPrAar === 0) {
    return andel.besteberegningPrAar;
  }
  if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
    return andel.overstyrtPrAar;
  }
  return andel.beregnetPrAar || 0;
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
  const beregnetErSatt = !!beregnetPrAar || beregnetPrAar === 0;
  const pgiErSatt = !!pgiSnitt || pgiSnitt === 0;
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
}: Beregningsgrunnlag) => {
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
        periodeAarsaker,
        redusertPrAar,
        avkortetPrAar,
        dagsats,
      } = bgp;

      const andeler = lagAndeler(beregningsgrunnlagPrStatusOgAndel || [], avklaringsbehov);

      return {
        fom: beregningsgrunnlagPeriodeFom,
        tom: regnUtTom(array[index + 1]),
        årsak: periodeAarsaker || [],
        andeler,
        redusertPrAar,
        avkortetPrAar,
        dagsats,
      };
    });
};

const finnRekkefølgePrioritet = (andel: TabellRadData): number => {
  const pri = statusKonfigMap[andel.aktivitetStatus]?.vekt;
  return pri || 100; // Default settes veldig høyt så den havner nederst i tabellen
};

const sorterAndelerEtterPrioritet = (a: TabellRadData, b: TabellRadData) =>
  finnRekkefølgePrioritet(a) - finnRekkefølgePrioritet(b);

export const erBruttoOver6G = (andeler: TabellRadData[], grunnbeløp: number): boolean =>
  finnTotalInntekt(andeler) > grunnbeløp * 6;

export const erMidlertidigInaktiv = ({ aktivitetStatus }: Beregningsgrunnlag): boolean =>
  !!aktivitetStatus && aktivitetStatus.includes('MIDL_INAKTIV');

export const finnTotalInntekt = (andeler: TabellRadData[]): number =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);

// TODO: Sjekk at dette faktisk er det som skal vises fram
export const finnTotalEllerAvkortetInntekt = (
  tabellData: TabellData,
  harBruttoOver6G: boolean,
  harDekningsgradUlik100: boolean,
): number => {
  if (harBruttoOver6G && tabellData.avkortetPrAar) {
    return tabellData.avkortetPrAar;
  }
  if (harDekningsgradUlik100 && tabellData.redusertPrAar) {
    return tabellData.redusertPrAar;
  }
  return finnTotalInntekt(tabellData.andeler);
};

export const finnDagsats = (tabellData: TabellData, ytelseGrunnlag?: YtelseGrunnlag): number => {
  if (ytelseGrunnlag?.ytelsetype !== FagsakYtelseType.FORELDREPENGER && tabellData.avkortetPrAar) {
    return Math.round(tabellData.avkortetPrAar / VIRKEDAGER_PR_AAR);
  }
  return tabellData.dagsats || 0;
};
