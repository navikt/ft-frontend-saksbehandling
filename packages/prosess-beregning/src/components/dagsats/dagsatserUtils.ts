import dayjs from 'dayjs';

import { FagsakYtelseType, PeriodeÅrsak } from '@navikt/ft-kodeverk';
import type {
  AktivitetStatus,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  YtelseGrunnlag,
} from '@navikt/ft-types';
import { isAksjonspunktOpen, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { AksjonspunktKode } from '../../utils/aksjonspunkt';
import type { TabellData, TabellRadData } from './dagsatsTabell';
import { statusKonfigMap } from './statusKonfig';

const VIRKEDAGER_PR_AAR = 260;

const ÅRSAKER_SOM_KAN_GI_NY_DAGSATS = new Set<string>([
  PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET,
  PeriodeÅrsak.NATURALYTELSE_TILKOMMER,
  PeriodeÅrsak.NATURALYTELSE_BORTFALT,
]);

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean =>
  andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;

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
        ak =>
          ak.definisjon === AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
          ak.definisjon === AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      );
    case 'SN':
      return avklaringsbehov.find(
        ak =>
          ak.definisjon === AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET ||
          ak.definisjon ===
            AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      );
    case 'BA':
      return avklaringsbehov.find(ak => ak.definisjon === AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);
    default:
      return undefined;
  }
};

const finnNaturalytelsebeløp = (andel: BeregningsgrunnlagAndel): number => {
  const bortfaltNat = andel?.arbeidsforhold?.naturalytelseBortfaltPrÅr;
  const tilkommetNat = andel?.arbeidsforhold?.naturalytelseTilkommetPrÅr || 0;
  if (!bortfaltNat) {
    return 0;
  }
  return bortfaltNat - tilkommetNat;
};

const erBeregnet = (andel: BeregningsgrunnlagAndel): boolean => {
  const { beregnetPrAar, pgiSnitt } = andel;
  const beregnetErSatt = !!beregnetPrAar || beregnetPrAar === 0;
  const pgiErSatt = !!pgiSnitt || pgiSnitt === 0;
  return beregnetErSatt || pgiErSatt;
};

const lagAndeler = (
  andeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): TabellRadData[] => {
  const andelerSomSkalVises = andeler.filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
  const grupperteAndeler = Map.groupBy(andelerSomSkalVises, andel => andel.aktivitetStatus);

  const radListe: TabellRadData[] = [];
  for (const [aktivitetStatus, andelerMedStatus] of grupperteAndeler) {
    const aksjonspunkt = finnAksjonspunktForStatus(aktivitetStatus, avklaringsbehov);
    const alleAndelerErBeregnet = andelerMedStatus.every(andel => erBeregnet(andel));
    const inntekt = andelerMedStatus.reduce((sum, andel) => finnForeslåttBeløp(andel) + sum, 0);
    const bortfaltNaturalytelse = andelerMedStatus.reduce((sum, andel) => finnNaturalytelsebeløp(andel) + sum, 0);
    const inntektPlussNaturalytelse = (inntekt || 0) + (bortfaltNaturalytelse || 0);
    const erFerdigBeregnet = alleAndelerErBeregnet && !isAksjonspunktOpen(aksjonspunkt);
    radListe.push({
      inntekt,
      bortfaltNaturalytelse,
      inntektPlussNaturalytelse,
      erFerdigBeregnet,
      aktivitetStatus,
    });
  }
  return radListe;
};

const harÅrsakSomKanGiNyDagsats = (årsaker: string[]) => årsaker.some(k => ÅRSAKER_SOM_KAN_GI_NY_DAGSATS.has(k));

export const utledTabellData = (beregningsgrunnlag: Beregningsgrunnlag): TabellData[] => {
  // Vi skal alltid vise første periode, deretter kun perioder som er opprettet pga noe som kan endre dagsatsen i perioden
  const { beregningsgrunnlagPeriode } = beregningsgrunnlag;
  const fomDatoer = beregningsgrunnlagPeriode
    .filter(
      bgp =>
        bgp.beregningsgrunnlagPeriodeFom === beregningsgrunnlag.skjaeringstidspunktBeregning ||
        (!!bgp.periodeAarsaker && harÅrsakSomKanGiNyDagsats(bgp.periodeAarsaker)),
    )
    .map(bgp => bgp.beregningsgrunnlagPeriodeFom)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const tabellData: TabellData[] = [];
  for (let i = 0; i < fomDatoer.length; i += 1) {
    const fom = fomDatoer[i];
    const tom =
      i + 1 < fomDatoer.length
        ? dayjs(fomDatoer[i + 1])
            .subtract(1, 'day')
            .format(ISO_DATE_FORMAT)
            .toString()
        : undefined;
    const matchendePeriode = beregningsgrunnlagPeriode.find(bgp => bgp.beregningsgrunnlagPeriodeFom === fom);
    const årsak = matchendePeriode?.periodeAarsaker || [];
    const andeler = lagAndeler(
      matchendePeriode?.beregningsgrunnlagPrStatusOgAndel || [],
      beregningsgrunnlag.avklaringsbehov,
    );
    const redusertPrÅr = matchendePeriode?.redusertPrAar;
    const avkortetPrÅr = matchendePeriode?.avkortetPrAar;
    const dagsats = matchendePeriode?.dagsats;
    tabellData.push({
      fom,
      tom,
      årsak,
      andeler,
      redusertPrÅr,
      avkortetPrÅr,
      dagsats,
    });
  }
  return tabellData;
};

const finnRekkefølgePrioritet = (andel: TabellRadData): number => {
  const pri = statusKonfigMap[andel.aktivitetStatus]?.rekkefølgePri;
  return pri || 100; // Default settes veldig høyt så den havner nederst i tabellen
};

export const sorterAndelerEtterPrioritet = (andeler: TabellRadData[]) => {
  andeler.sort((a, b) => finnRekkefølgePrioritet(a) - finnRekkefølgePrioritet(b));
};

export const erBruttoOver6G = (andeler: TabellRadData[], grunnbeløp: number): boolean =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0) > grunnbeløp * 6;

export const finnStatusBeskrivelse = (andel: TabellRadData): string => {
  const beskrivelseId = statusKonfigMap[andel.aktivitetStatus]?.beskrivelseId;
  return beskrivelseId || 'Ukjent andel';
};

export const erMidlertidigInaktiv = (beregningsgrunnlag: Beregningsgrunnlag): boolean =>
  !!beregningsgrunnlag.aktivitetStatus && beregningsgrunnlag.aktivitetStatus.includes('MIDL_INAKTIV');

export const finnTotalInntekt = (andeler: TabellRadData[]): number =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);

// TODO: Sjekk at dette faktisk er det som skal vises fram
export const finnTotalInntektEllerAvkortetInntekt = (
  tabellData: TabellData,
  harBruttoOver6G: boolean,
  harDekningsgradUlik100: boolean,
): number => {
  if (harBruttoOver6G && tabellData.avkortetPrÅr) {
    return tabellData.avkortetPrÅr;
  }
  if (harDekningsgradUlik100 && tabellData.redusertPrÅr) {
    return tabellData.redusertPrÅr;
  }
  return finnTotalInntekt(tabellData.andeler);
};

export const finnDagsats = (tabellData: TabellData, ytelseGrunnlag?: YtelseGrunnlag): number => {
  if (ytelseGrunnlag?.ytelsetype !== FagsakYtelseType.FORELDREPENGER && tabellData.avkortetPrÅr) {
    return Math.round(tabellData.avkortetPrÅr / VIRKEDAGER_PR_AAR);
  }
  return tabellData.dagsats || 0;
};
