import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  ForlengelsePeriodeProp,
  Inntektsforhold,
  VurderInntektsforholdPeriode,
} from '@navikt/ft-types';
import dayjs from 'dayjs';
import { calcDays, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import isBetween from 'dayjs/plugin/isBetween';
import erPeriodeTilVurdering from '../util/ForlengelseUtils';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import { TilkommetInntektsforholdFieldValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { TilkommetInntektPeriodeTransformedValues } from '../../types/interface/VurderNyttInntektsforholdAP';

dayjs.extend(isBetween);
const DATO_PRAKSISENDRING_TILKOMMET_INNTEKT = '2023-05-01';

function unike() {
  return (v: Inntektsforhold, i: number, l: Inntektsforhold[]) =>
    l.findIndex(
      it =>
        it.skalRedusereUtbetaling === v.skalRedusereUtbetaling &&
        it.arbeidsforholdId === v.arbeidsforholdId &&
        it.arbeidsgiverId === v.arbeidsgiverId &&
        it.aktivitetStatus === v.aktivitetStatus &&
        it.bruttoInntektPrÅr === v.bruttoInntektPrÅr,
    ) === i;
}

const oppdaterTomOgInntektsforholdForSistePeriode = (
  liste: VurderInntektsforholdPeriode[],
  periode: VurderInntektsforholdPeriode,
) => {
  const forrigePeriode = liste.pop();
  if (!forrigePeriode) {
    return;
  }
  const inntektsforholdListe = [...forrigePeriode.inntektsforholdListe] || [];
  // @ts-ignore
  periode.inntektsforholdListe.forEach(it => inntektsforholdListe.push(it));
  const endretPeriode = {
    ...forrigePeriode,
    inntektsforholdListe: inntektsforholdListe.filter(unike()),
    tom: periode.tom,
  };
  liste.push(endretPeriode);
};

const harIngenRelevantEndring = (
  inntektsforholdPeriode: VurderInntektsforholdPeriode,
  forrigeInntektsforholdPeriode: VurderInntektsforholdPeriode,
) => {
  const inntektsforholdListe = inntektsforholdPeriode.inntektsforholdListe || [];
  const forrigeInntektsforholdListe = forrigeInntektsforholdPeriode.inntektsforholdListe || [];

  for (let i = 0; i < inntektsforholdListe.length; i += 1) {
    const inntektsforholdIPeriode = inntektsforholdListe[i];
    const inntektsforholdFraForrige = forrigeInntektsforholdListe.find(
      a =>
        a.aktivitetStatus === inntektsforholdIPeriode.aktivitetStatus &&
        a.arbeidsgiverId === inntektsforholdIPeriode.arbeidsgiverId &&
        a.arbeidsforholdId === inntektsforholdIPeriode.arbeidsforholdId,
    );
    if (inntektsforholdFraForrige === undefined) {
      return true;
    }
    if (inntektsforholdFraForrige.bruttoInntektPrÅr !== inntektsforholdIPeriode.bruttoInntektPrÅr) {
      return false;
    }
    if (inntektsforholdFraForrige.skalRedusereUtbetaling !== inntektsforholdIPeriode.skalRedusereUtbetaling) {
      return false;
    }
  }
  return true;
};

const periodeInneholderVirkedager = (dag1: string, dag2: string): boolean => calcDays(dag1, dag2, true) > 2;

const erVirkedagMellomPeriodene = (
  inntektsforholdPeriode: VurderInntektsforholdPeriode,
  forrigeInntektsforholdPeriode: VurderInntektsforholdPeriode,
): boolean => {
  const periode1Slutt = forrigeInntektsforholdPeriode.tom;
  const periode2Start = inntektsforholdPeriode.fom;
  return (dayjs(periode1Slutt).isBefore(dayjs(periode2Start)))
    ? periodeInneholderVirkedager(periode1Slutt, periode2Start)
    : periodeInneholderVirkedager(periode2Start, periode1Slutt);
};

const harPeriodeSomKanKombineresMedForrige = (
  inntektsforholdPeriode: VurderInntektsforholdPeriode,
  periodeList: VurderInntektsforholdPeriode[],
  slåSammenMellomliggendeVirkedager: boolean,
  forlengelseperioder?: ForlengelsePeriodeProp[],
): boolean => {
  // Spesialbehandler 1. mai 2023 da alle saker før denne datoen ble behandlet etter andre retningslinjer
  if (dayjs(inntektsforholdPeriode.fom).isSame(dayjs(DATO_PRAKSISENDRING_TILKOMMET_INNTEKT))) {
    return false;
  }
  const forrigeInntektsforholdPeriode = periodeList[periodeList.length - 1];
  if (
    erPeriodeTilVurdering(inntektsforholdPeriode, forlengelseperioder) &&
    !erPeriodeTilVurdering(forrigeInntektsforholdPeriode, forlengelseperioder)
  ) {
    return false;
  }
  if (!slåSammenMellomliggendeVirkedager && erVirkedagMellomPeriodene(inntektsforholdPeriode, forrigeInntektsforholdPeriode)) {
    return false;
  }
  return harIngenRelevantEndring(inntektsforholdPeriode, forrigeInntektsforholdPeriode);
};

const sjekkOmPeriodeSkalLeggesTil =
  (slåSammenMellomliggendeVirkedager: boolean, forlengelseperioder?: ForlengelsePeriodeProp[]) =>
    (
      aggregatedPeriodList: VurderInntektsforholdPeriode[],
      periode: VurderInntektsforholdPeriode,
    ): VurderInntektsforholdPeriode[] => {
      if (aggregatedPeriodList.length === 0) {
        aggregatedPeriodList.push({ ...periode });
        return aggregatedPeriodList;
      }
      if (harPeriodeSomKanKombineresMedForrige(periode, aggregatedPeriodList, slåSammenMellomliggendeVirkedager, forlengelseperioder)) {
        oppdaterTomOgInntektsforholdForSistePeriode(aggregatedPeriodList, periode);
        return aggregatedPeriodList;
      }
      aggregatedPeriodList.push({ ...periode });
      return aggregatedPeriodList;
    };

export const slaaSammenPerioder = (
  perioder: VurderInntektsforholdPeriode[],
  slåSammenMellomliggendeVirkedager: boolean,
  forlengelseperioder?: ForlengelsePeriodeProp[],
): VurderInntektsforholdPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(slåSammenMellomliggendeVirkedager, forlengelseperioder), []);

export function erVurdertTidligere(
  periode: VurderInntektsforholdPeriode,
  beregningsgrunnlag: Beregningsgrunnlag,
): boolean {
  return (
    !erPeriodeTilVurdering(periode, beregningsgrunnlag.forlengelseperioder) &&
    !!periode.inntektsforholdListe &&
    periode.inntektsforholdListe?.every(a => a.skalRedusereUtbetaling !== null)
  );
}

export const getAktivitetNavnFraInnteksforhold = (
  inntektsforhold: Inntektsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  let agOpplysning = null;
  if (inntektsforhold.arbeidsgiverId !== null && inntektsforhold.arbeidsgiverId !== undefined) {
    agOpplysning = arbeidsgiverOpplysningerPerId[inntektsforhold.arbeidsgiverId];
  }

  if (inntektsforhold.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
    if (!agOpplysning) {
      return 'Arbeidsforhold';
    }
    return createVisningsnavnForAktivitetFordeling(agOpplysning, inntektsforhold.arbeidsforholdId);
  }

  if (inntektsforhold.aktivitetStatus === AktivitetStatus.FRILANSER) {
    return 'Frilanser';
  }

  if (inntektsforhold.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
    return 'Selvstendig næringsdrivende';
  }

  return '';
};

const finnPeriodeSomMåSplittes = (
  dato: string,
  transformertePerioder: TilkommetInntektPeriodeTransformedValues[],
): TilkommetInntektPeriodeTransformedValues | undefined =>
  transformertePerioder.find(
    periode => dayjs(dato).isAfter(dayjs(periode.fom)) && !dayjs(dato).isAfter(dayjs(periode.tom)),
  );

const splittPeriode = (
  periode: TilkommetInntektPeriodeTransformedValues,
  dato: string,
): TilkommetInntektPeriodeTransformedValues[] => {
  const nyFom = dayjs(dato);
  const nyTom = nyFom.subtract(1, 'day');
  const periodeDel1 = {
    fom: periode.fom,
    tom: nyTom.format(ISO_DATE_FORMAT),
    tilkomneInntektsforhold: periode.tilkomneInntektsforhold,
  };
  const periodeDel2 = {
    fom: nyFom.format(ISO_DATE_FORMAT),
    tom: periode.tom,
    tilkomneInntektsforhold: periode.tilkomneInntektsforhold,
  };
  return [periodeDel1, periodeDel2];
};

const liggerIPeriode = (fom: string, tom: string, dato: string): boolean => dayjs(dato).isBetween(fom, tom, 'day', '[]');

const finnPerioderMedOverlapp = (periode: VurderInntektsforholdPeriode, 
  transformertePerioder: TilkommetInntektPeriodeTransformedValues[]): TilkommetInntektPeriodeTransformedValues[] => transformertePerioder.filter((tp) => 
  liggerIPeriode(tp.fom, tp.tom, periode.fom) || liggerIPeriode(tp.fom, tp.tom, periode.tom));

const nyOgBedreMerge = (transformertePerioder: TilkommetInntektPeriodeTransformedValues[],
  perioderFørSammenslåing: VurderInntektsforholdPeriode[]): any[] => {
  transformertePerioder.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
  perioderFørSammenslåing.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
  const sammenslåttePerioder = [];
  // Skal loope over alle perioder, og splitte perioden opp i mindre deler utifra det som kommer fra finnPerioderMedOverlapp
  perioderFørSammenslåing.forEach((periode) => {
    const perioderMedOverlapp = finnPerioderMedOverlapp(periode, transformertePerioder);

  });

  return [];
}

export const splittSammenslåttePerioder = (
  transformertePerioder: TilkommetInntektPeriodeTransformedValues[],
  perioderFørSammenslåing: VurderInntektsforholdPeriode[],
): TilkommetInntektPeriodeTransformedValues[] => {
  // Få denne til å funke istedenfor
  nyOgBedreMerge(transformertePerioder, perioderFørSammenslåing)
  const alleOriginaleStartdatoer = perioderFørSammenslåing.map(p => p.fom);
  const splittedePerioder = transformertePerioder.map(p => ({
    fom: p.fom,
    tom: p.tom,
    tilkomneInntektsforhold: p.tilkomneInntektsforhold,
  }));
  alleOriginaleStartdatoer.forEach(dato => {
    const periodeÅSplitte = finnPeriodeSomMåSplittes(dato, splittedePerioder);
    if (periodeÅSplitte) {
      const nyePerioder = splittPeriode(periodeÅSplitte, dato);
      const indexÅFjerne = splittedePerioder.indexOf(periodeÅSplitte);
      splittedePerioder.splice(indexÅFjerne, 1);
      nyePerioder.forEach(nyPeriode => splittedePerioder.push(nyPeriode));
    }
  });
  splittedePerioder.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))); // For at periodene skal komme i kronologisk rekkefølge
  return splittedePerioder;
};

export const getAktivitetNavnFraField = (
  field: TilkommetInntektsforholdFieldValues,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  let agOpplysning = null;
  if (field.arbeidsgiverIdent) {
    agOpplysning = arbeidsgiverOpplysningerPerId[field.arbeidsgiverIdent];
  }

  if (field.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
    if (!agOpplysning) {
      return 'Arbeidsforhold';
    }
    return createVisningsnavnForAktivitetFordeling(agOpplysning, field.arbeidsforholdId);
  }

  if (field.aktivitetStatus === AktivitetStatus.FRILANSER) {
    return 'Frilanser';
  }

  if (field.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
    return 'Selvstendig næringsdrivende';
  }
  return '';
};
