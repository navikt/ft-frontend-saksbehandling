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
  refusjonPrÅr: aktivitet.skalKunneEndreRefusjon ? removeSpacesFromNumber(aktivitet.refusjonskrav) : null,
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: aktivitet.inntektskategori,
});

const harPeriodeÅrsak = (periode: BeregningsgrunnlagPeriodeProp, periodeÅrsak: string) =>
  periode.periodeAarsaker.includes(periodeÅrsak);

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
  const slutterSøndag =
    starterLørdag &&
    !!periode.beregningsgrunnlagPeriodeTom &&
    dayjs(periode.beregningsgrunnlagPeriodeFom).add(1, 'days').isSame(dayjs(periode.beregningsgrunnlagPeriodeTom));
  return starterLørdag && slutterSøndag;
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
  if (
    fordelPeriode.fordelBeregningsgrunnlagAndeler.length !==
    forrigeEndringPeriode.fordelBeregningsgrunnlagAndeler.length
  ) {
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
  for (let i = 0; i < fordelPeriode.fordelBeregningsgrunnlagAndeler.length; i += 1) {
    const andelIPeriode = fordelPeriode.fordelBeregningsgrunnlagAndeler[i];
    const andelFraForrige = forrigeEndringPeriode.fordelBeregningsgrunnlagAndeler.find(
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
    if (!kanSlåSammenOverHelg && andelFraForrige.refusjonskravPrAar !== andelIPeriode.refusjonskravPrAar) {
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
    (periode.tom === null || dayjs(tom).isSame(dayjs(periode.tom)) || dayjs(tom).isAfter(dayjs(periode.tom)));

const getAndelsnr = (aktivitet: FordelBeregningsgrunnlagAndelValues): number | string => {
  if (aktivitet.nyAndel === true) {
    return aktivitet.andel;
  }
  return aktivitet.andelsnr;
};

export const mapAndel = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagAndelTransformedValues => ({
  andelsnr: getAndelsnr(aktivitet),
  aktivitetStatus: aktivitet.aktivitetStatus,
  arbeidsgiverId: aktivitet.arbeidsgiverId !== '' ? aktivitet.arbeidsgiverId : null,
  arbeidsforholdId: aktivitet.arbeidsforholdId !== '' ? aktivitet.arbeidsforholdId : null,
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

export const lagPerioderForSubmit = (
  values: FordelBeregningsgrunnlagValues,
  index: number,
  kombinertPeriode: FordelBeregningsgrunnlagPeriode,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
): FordelBeregningsgrunnlagPeriodeTransformedValues[] =>
  fordelBGPerioder.filter(inkludererPeriode(kombinertPeriode)).map((p: FordelBeregningsgrunnlagPeriode) => ({
    andeler: values[getFieldNameKey(index)].map(mapAndel),
    fom: p.fom,
    tom: p.tom,
  }));

export const slaaSammenPerioder = (
  perioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder), []);
