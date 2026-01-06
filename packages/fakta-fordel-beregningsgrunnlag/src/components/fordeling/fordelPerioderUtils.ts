import dayjs from 'dayjs';

import { PeriodeÅrsak } from '@navikt/ft-kodeverk';
import type {
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
  ForlengelsePeriodeProp,
} from '@navikt/ft-types';
import { notEmpty, removeSpacesFromNumber } from '@navikt/ft-utils';

import type {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import type {
  FordelBeregningsgrunnlagAndelTransformedValues,
  FordelBeregningsgrunnlagFastsatteVerdierTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
} from '../../types/interface/FordelBeregningsgrunnlagAP';
import { erPeriodeTilVurdering } from '../util/forlengelseUtils';

export const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';

const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

const mapTilFastsatteVerdier = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagFastsatteVerdierTransformedValues => ({
  refusjonPrÅr:
    aktivitet.skalKunneEndreRefusjon && aktivitet.refusjonskrav
      ? removeSpacesFromNumber(aktivitet.refusjonskrav)
      : undefined,
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: notEmpty(aktivitet.inntektskategori),
});

const harPeriodeÅrsak = (periode: BeregningsgrunnlagPeriodeProp, periodeÅrsak: string): boolean =>
  !!periode.periodeAarsaker && periode.periodeAarsaker.includes(periodeÅrsak);

const harPeriodeårsakerSomIkkeSlåsSammen = (periode: BeregningsgrunnlagPeriodeProp) =>
  harPeriodeÅrsak(periode, PeriodeÅrsak.GRADERING) || harPeriodeÅrsak(periode, PeriodeÅrsak.GRADERING_OPPHØRER);

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
  andel.andelIArbeid?.some(arbeidsandel => arbeidsandel !== 100);

function harUtbetalingIPeriode(periode: FordelBeregningsgrunnlagPeriode) {
  return periode.fordelBeregningsgrunnlagAndeler?.some(a => harFravær(a));
}

function erUlike(forrigeAndelIArbeid: number[] = [], andelIArbeid: number[] = []) {
  forrigeAndelIArbeid.sort((a, b) => a - b);
  andelIArbeid.sort((a, b) => a - b);
  return forrigeAndelIArbeid.join('_') !== andelIArbeid.join('-');
}

const finnesDiffIAndeler = (
  fordelAndeler: FordelBeregningsgrunnlagAndel[],
  forrigeAndeler: FordelBeregningsgrunnlagAndel[],
): boolean => {
  const finnesAndelMedDiff = fordelAndeler.some(andelIPeriode => {
    const andelFraForrige = forrigeAndeler.find(
      a =>
        a.aktivitetStatus === andelIPeriode.aktivitetStatus &&
        a.inntektskategori === andelIPeriode.inntektskategori &&
        erArbeidsforholdLike(a, andelIPeriode),
    );
    if (andelFraForrige === undefined) {
      return true;
    }
    if (erUlike(andelFraForrige.andelIArbeid, andelIPeriode.andelIArbeid)) {
      return true;
    }
    if (andelFraForrige.refusjonskravPrAar !== andelIPeriode.refusjonskravPrAar) {
      return true;
    }
    return false;
  });
  return finnesAndelMedDiff;
};

const harIngenRelevantEndringForFordeling = (
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  forrigeEndringPeriode: FordelBeregningsgrunnlagPeriode,
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
) => {
  const fordelAndeler = fordelPeriode.fordelBeregningsgrunnlagAndeler ?? [];
  const forrigeAndeler = forrigeEndringPeriode.fordelBeregningsgrunnlagAndeler ?? [];
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
  return !finnesDiffIAndeler(fordelAndeler, forrigeAndeler);
};

const harEndretRefusjon = (
  fordelAndeler: FordelBeregningsgrunnlagAndel[],
  forrigeAndeler: FordelBeregningsgrunnlagAndel[],
): boolean =>
  fordelAndeler.some(andelIPeriode => {
    const andelFraForrige = forrigeAndeler.find(
      a =>
        a.aktivitetStatus === andelIPeriode.aktivitetStatus &&
        a.inntektskategori === andelIPeriode.inntektskategori &&
        erArbeidsforholdLike(a, andelIPeriode),
    );
    if (andelFraForrige === undefined) {
      return true;
    }
    return andelFraForrige.refusjonskravPrAar !== andelIPeriode.refusjonskravPrAar;
  });

const harPeriodeSomKanKombineresMedForrige = (
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  periodeList: FordelBeregningsgrunnlagPeriode[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): boolean => {
  const forrigeFordelPeriode = periodeList[periodeList.length - 1];
  const harLikeMangeAndeler =
    fordelPeriode.fordelBeregningsgrunnlagAndeler?.length ===
    forrigeFordelPeriode.fordelBeregningsgrunnlagAndeler?.length;
  if (!harLikeMangeAndeler) {
    return false;
  }
  if (fordelPeriode.skalRedigereInntekt !== forrigeFordelPeriode.skalRedigereInntekt) {
    return false;
  }
  if (harPeriodeårsakerSomIkkeSlåsSammen(periode)) {
    return false;
  }
  if (
    harEndretRefusjon(
      fordelPeriode.fordelBeregningsgrunnlagAndeler ?? [],
      forrigeFordelPeriode.fordelBeregningsgrunnlagAndeler ?? [],
    )
  ) {
    return false;
  }
  if (
    erPeriodeTilVurdering(fordelPeriode, forlengelseperioder) &&
    !erPeriodeTilVurdering(forrigeFordelPeriode, forlengelseperioder)
  ) {
    return false;
  }
  if (harPeriodeÅrsak(periode, PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET)) {
    return skalSlåSammenAvsluttetArbeidsforholdPerioder(periode, bgPerioder);
  }
  if (harPeriodeÅrsak(periode, PeriodeÅrsak.ENDRING_I_AKTIVITETER_SØKT_FOR)) {
    return harIngenRelevantEndringForFordeling(fordelPeriode, forrigeFordelPeriode, periode, bgPerioder);
  }
  return true;
};

const oppdaterTomDatoForSistePeriode = (
  liste: FordelBeregningsgrunnlagPeriode[],
  periode: FordelBeregningsgrunnlagPeriode,
) => {
  const forrigePeriode = liste.pop();
  const kopi = {
    ...forrigePeriode,
    tom: periode.tom,
  } as FordelBeregningsgrunnlagPeriode;
  liste.push(kopi);
};

const sjekkOmPeriodeSkalLeggesTil =
  (bgPerioder: BeregningsgrunnlagPeriodeProp[], forlengelseperioder?: ForlengelsePeriodeProp[]) =>
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
      if (
        harPeriodeSomKanKombineresMedForrige(
          matchendeBgPeriode,
          bgPerioder,
          periode,
          aggregatedPeriodList,
          forlengelseperioder,
        )
      ) {
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

const mapAndel = (aktivitet: FordelBeregningsgrunnlagAndelValues): FordelBeregningsgrunnlagAndelTransformedValues => ({
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

const stringEllerFeil = (felt: string | undefined) => {
  return notEmpty(felt, 'Fant ikke påkrevd felt før submit');
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

export const slåSammenPerioder = (
  perioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): FordelBeregningsgrunnlagPeriode[] =>
  perioder
    .filter(p => harUtbetalingIPeriode(p))
    .reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder, forlengelseperioder), []);
