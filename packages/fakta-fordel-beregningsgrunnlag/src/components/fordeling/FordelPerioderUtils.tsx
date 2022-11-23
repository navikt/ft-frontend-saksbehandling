import {
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';
import { PeriodeAarsak } from '@navikt/ft-kodeverk';
import { removeSpacesFromNumber } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import {
  FordelBeregningsgrunnlagAndelTransformedValues,
  FordelBeregningsgrunnlagFastsatteVerdierTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
} from '../../types/interface/FordelBeregningsgrunnlagAP';

export const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';

export const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

export const mapTilFastsatteVerdier = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagFastsatteVerdierTransformedValues => ({
  refusjonPrÅr:
    aktivitet.skalKunneEndreRefusjon && aktivitet.refusjonskrav
      ? removeSpacesFromNumber(aktivitet.refusjonskrav)
      : undefined,
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: aktivitet.inntektskategori || '',
});

const harPeriodeÅrsak = (periode: BeregningsgrunnlagPeriodeProp, periodeÅrsak: string): boolean =>
  !!periode.periodeAarsaker && periode.periodeAarsaker.includes(periodeÅrsak);

const harPeriodeårsakerSomIkkeSlåsSammen = (periode: BeregningsgrunnlagPeriodeProp) =>
  harPeriodeÅrsak(periode, PeriodeAarsak.ENDRING_I_REFUSJONSKRAV) ||
  harPeriodeÅrsak(periode, PeriodeAarsak.REFUSJON_OPPHOERER) ||
  harPeriodeÅrsak(periode, PeriodeAarsak.GRADERING) ||
  harPeriodeÅrsak(periode, PeriodeAarsak.GRADERING_OPPHOERER);

const skalSlåSammenAvsluttetArbeidsforholdPerioder = (
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
) => {
  const periodeIndex = bgPerioder.indexOf(periode);
  const forrigePeriode = bgPerioder[periodeIndex - 1];
  return forrigePeriode.bruttoPrAar === periode.bruttoPrAar;
};

const erArbeidsforholdLike = (andel1: FordelBeregningsgrunnlagAndel, andel2: FordelBeregningsgrunnlagAndel) => {
  if (!andel1.arbeidsforhold && !andel2.arbeidsforhold) {
    return true;
  }
  if (!!andel1.arbeidsforhold && !!andel2.arbeidsforhold) {
    return (
      andel1.arbeidsforhold.arbeidsgiverIdent === andel2.arbeidsforhold.arbeidsgiverIdent &&
      andel1.arbeidsforhold.arbeidsforholdId === andel2.arbeidsforhold.arbeidsforholdId
    );
  }
  return false;
};

function erPeriodeKunHelg(periode: BeregningsgrunnlagPeriodeProp) {
  const starterLørdag = dayjs(periode.beregningsgrunnlagPeriodeFom).day() === 6;
  const starterSøndag = dayjs(periode.beregningsgrunnlagPeriodeFom).day() === 0;

  const slutterLørdag = dayjs(periode.beregningsgrunnlagPeriodeTom).day() === 6;
  const slutterSøndag = dayjs(periode.beregningsgrunnlagPeriodeTom).day() === 0;

  return (starterLørdag || starterSøndag) && (slutterLørdag || slutterSøndag);
}

const harFravær = (andel: FordelBeregningsgrunnlagAndel) =>
  andel.andelIArbeid.some(arbeidsandel => arbeidsandel !== 100);

function harIkkeUtbetalingIPeriode(periode: FordelBeregningsgrunnlagPeriode) {
  return !periode.fordelBeregningsgrunnlagAndeler.some(a => harFravær(a));
}

function erUlike(forrigeAndelIArbeid: number[] = [], andelIArbeid: number[] = []) {
  return forrigeAndelIArbeid.sort().join('_') !== andelIArbeid.sort().join('-');
}

const harIngenRelevantEndringForFordeling = (
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  forrigeEndringPeriode: FordelBeregningsgrunnlagPeriode,
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
) => {
  const fordelAndeler = fordelPeriode.fordelBeregningsgrunnlagAndeler || [];
  const forrigeAndeler = forrigeEndringPeriode.fordelBeregningsgrunnlagAndeler || [];
  if (fordelAndeler.length !== forrigeAndeler.length) {
    return false;
  }
  const periodeIndex = bgPerioder.indexOf(periode);
  const forrigePeriode = bgPerioder[periodeIndex - 1];
  if (periode.bruttoPrAar !== forrigePeriode.bruttoPrAar) {
    return false;
  }
  const erKunHelg = erPeriodeKunHelg(periode);
  const erForrigeKunHelg = erPeriodeKunHelg(forrigePeriode);
  const skalKunneEndreRefusjon = fordelPeriode.skalKunneEndreRefusjon || forrigeEndringPeriode.skalKunneEndreRefusjon;
  const kanSlåSammenOverHelg = (erKunHelg || erForrigeKunHelg) && !skalKunneEndreRefusjon;
  if (kanSlåSammenOverHelg) {
    return true;
  }

  for (let i = 0; i < fordelAndeler.length; i += 1) {
    const andelIPeriode = fordelAndeler[i];
    const andelFraForrige = forrigeAndeler.find(
      a =>
        a.aktivitetStatus === andelIPeriode.aktivitetStatus &&
        a.inntektskategori === andelIPeriode.inntektskategori &&
        erArbeidsforholdLike(a, andelIPeriode),
    );
    if (andelFraForrige === undefined) {
      return false;
    }
    if (erUlike(andelFraForrige.andelIArbeid, andelIPeriode.andelIArbeid)) {
      return false;
    }
    if (andelFraForrige.refusjonskravPrAar !== andelIPeriode.refusjonskravPrAar) {
      return false;
    }
  }
  return true;
};

const harPeriodeSomKanKombineresMedForrige = (
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  periodeList: FordelBeregningsgrunnlagPeriode[],
): boolean => {
  const forrigeEndringPeriode = periodeList[periodeList.length - 1];
  const harIkkeUtbetaling = harIkkeUtbetalingIPeriode(fordelPeriode);
  const harIkkeUtbetalingForrige = harIkkeUtbetalingIPeriode(forrigeEndringPeriode);
  const kanSlåSammenGrunnetIngenUtbetaling = harIkkeUtbetaling || harIkkeUtbetalingForrige;
  const harLikeMangeAndeler =
    fordelPeriode.fordelBeregningsgrunnlagAndeler.length ===
    forrigeEndringPeriode.fordelBeregningsgrunnlagAndeler.length;
  if (kanSlåSammenGrunnetIngenUtbetaling && harLikeMangeAndeler) {
    return true;
  }
  if (fordelPeriode.skalRedigereInntekt !== forrigeEndringPeriode.skalRedigereInntekt) {
    return false;
  }
  if (harPeriodeårsakerSomIkkeSlåsSammen(periode)) {
    return false;
  }
  if (harPeriodeÅrsak(periode, PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET)) {
    return skalSlåSammenAvsluttetArbeidsforholdPerioder(periode, bgPerioder);
  }
  if (harPeriodeÅrsak(periode, PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR)) {
    return harIngenRelevantEndringForFordeling(fordelPeriode, forrigeEndringPeriode, periode, bgPerioder);
  }
  return true;
};

const oppdaterTomDatoForSistePeriode = (
  liste: FordelBeregningsgrunnlagPeriode[],
  periode: FordelBeregningsgrunnlagPeriode,
) => {
  const forrigePeriode = liste.pop();
  // @ts-ignore Fiks denne
  const kopi = { ...forrigePeriode };
  kopi.tom = periode.tom;
  liste.push(kopi);
};

const sjekkOmPeriodeSkalLeggesTil =
  (bgPerioder: BeregningsgrunnlagPeriodeProp[]) =>
  (
    aggregatedPeriodList: FordelBeregningsgrunnlagPeriode[],
    periode: FordelBeregningsgrunnlagPeriode,
  ): FordelBeregningsgrunnlagPeriode[] => {
    if (aggregatedPeriodList.length === 0) {
      aggregatedPeriodList.push({ ...periode });
      return aggregatedPeriodList;
    }
    const matchendeBgPeriode = bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === periode.fom);
    if (matchendeBgPeriode) {
      if (harPeriodeSomKanKombineresMedForrige(matchendeBgPeriode, bgPerioder, periode, aggregatedPeriodList)) {
        oppdaterTomDatoForSistePeriode(aggregatedPeriodList, periode);
        return aggregatedPeriodList;
      }
      aggregatedPeriodList.push({ ...periode });
    }
    return aggregatedPeriodList;
  };

const inkludererPeriode =
  (periode: FordelBeregningsgrunnlagPeriode) =>
  ({ fom, tom }: FordelBeregningsgrunnlagPeriode): boolean =>
    (dayjs(fom).isSame(dayjs(periode.fom)) || dayjs(fom).isAfter(periode.fom)) &&
    (periode.tom === null || dayjs(tom).isSame(dayjs(periode.tom)) || dayjs(tom).isBefore(dayjs(periode.tom)));

const getAndelsnr = (aktivitet: FordelBeregningsgrunnlagAndelValues): number | string => {
  if (aktivitet.nyAndel && aktivitet.andel) {
    return aktivitet.andel;
  }
  if (!aktivitet.andelsnr) {
    throw Error(`Forventer å finne andelsnr for submit på aktivitet ${aktivitet}`);
  }
  return aktivitet.andelsnr;
};

export const mapAndel = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagAndelTransformedValues => ({
  andelsnr: getAndelsnr(aktivitet),
  aktivitetStatus: aktivitet.aktivitetStatus,
  arbeidsgiverId: aktivitet.arbeidsgiverId !== '' ? aktivitet.arbeidsgiverId : undefined,
  arbeidsforholdId: aktivitet.arbeidsforholdId !== '' ? aktivitet.arbeidsforholdId : undefined,
  nyAndel: aktivitet.nyAndel,
  kilde: aktivitet.kilde,
  lagtTilAvSaksbehandler: aktivitet.lagtTilAvSaksbehandler,
  arbeidsforholdType: aktivitet.arbeidsforholdType,
  beregningsperiodeTom: aktivitet.beregningsperiodeTom,
  beregningsperiodeFom: aktivitet.beregningsperiodeFom,
  forrigeArbeidsinntektPrÅr: aktivitet.forrigeArbeidsinntektPrAar,
  forrigeRefusjonPrÅr: aktivitet.forrigeRefusjonPrAar,
  forrigeInntektskategori: aktivitet.forrigeInntektskategori,
  fastsatteVerdier: mapTilFastsatteVerdier(aktivitet),
});

const stringEllerFeil = (felt?: string): string => {
  if (!felt) {
    throw Error('Fant ikke påkrevd felt før submit');
  }
  return felt;
};
export const lagPerioderForSubmit = (
  values: FordelBeregningsgrunnlagValues,
  index: number,
  kombinertPeriode: FordelBeregningsgrunnlagPeriode,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
): FordelBeregningsgrunnlagPeriodeTransformedValues[] =>
  fordelBGPerioder
    .filter(inkludererPeriode(kombinertPeriode))
    .filter(p => p.skalRedigereInntekt || p.skalKunneEndreRefusjon)
    .map((p: FordelBeregningsgrunnlagPeriode) => ({
      andeler: values[getFieldNameKey(index)].map(mapAndel),
      fom: stringEllerFeil(p.fom),
      tom: p.tom,
    }));

export const slaaSammenPerioder = (
  perioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder), []);
