import { Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { ForlengelsePeriodeProp } from '@navikt/ft-types/src/beregningsgrunnlagTsType';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isEqual } from 'lodash';
import erPeriodeTilVurdering from '../util/ForlengelseUtils';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';

export const getInntektsforhold = (inntektsforholdPerioder?: VurderInntektsforholdPeriode[]): Inntektsforhold[] =>
  inntektsforholdPerioder === undefined
    ? []
    : inntektsforholdPerioder
        ?.flatMap(inntektsforholdPeriode => inntektsforholdPeriode.inntektsforholdListe)
        .filter(
          (inntektsforhold, i, liste) => liste.findIndex(listeElement => isEqual(listeElement, inntektsforhold)) === i,
        );

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

const harPeriodeSomKanKombineresMedForrige = (
  inntektsforholdPeriode: VurderInntektsforholdPeriode,
  periodeList: VurderInntektsforholdPeriode[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): boolean => {
  const forrigeInntektsforholdPeriode = periodeList[periodeList.length - 1];
  if (
    erPeriodeTilVurdering(inntektsforholdPeriode, forlengelseperioder) &&
    !erPeriodeTilVurdering(forrigeInntektsforholdPeriode, forlengelseperioder)
  ) {
    return false;
  }
  return harIngenRelevantEndring(inntektsforholdPeriode, forrigeInntektsforholdPeriode);
};

const sjekkOmPeriodeSkalLeggesTil =
  (forlengelseperioder?: ForlengelsePeriodeProp[]) =>
  (
    aggregatedPeriodList: VurderInntektsforholdPeriode[],
    periode: VurderInntektsforholdPeriode,
  ): VurderInntektsforholdPeriode[] => {
    if (aggregatedPeriodList.length === 0) {
      aggregatedPeriodList.push({ ...periode });
      return aggregatedPeriodList;
    }
    if (harPeriodeSomKanKombineresMedForrige(periode, aggregatedPeriodList, forlengelseperioder)) {
      oppdaterTomOgInntektsforholdForSistePeriode(aggregatedPeriodList, periode);
      return aggregatedPeriodList;
    }
    aggregatedPeriodList.push({ ...periode });
    return aggregatedPeriodList;
  };

export const slaaSammenPerioder = (
  perioder: VurderInntektsforholdPeriode[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): VurderInntektsforholdPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(forlengelseperioder), []);

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

export const getAktivitetNavn = (
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
