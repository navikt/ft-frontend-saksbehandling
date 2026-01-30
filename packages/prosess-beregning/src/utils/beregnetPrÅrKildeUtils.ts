import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';

type KildeForAndel = Readonly<{
  andelsnr: number;
  arbeidsgiver: string;
  beregnetPrÅrKilde: 'SAKSBEHANDLER' | 'INNTEKTSMELDING' | 'A_ORDNING' | 'INGEN';
}>;

export const finnKilderForAndeler = (
  andeler: BeregningsgrunnlagAndel[],
  beregningsgrunnlagInntekter: Record<string, number>,
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string,
): KildeForAndel[] => {
  return andeler.map(andel => {
    const arbeidsgiverIdent = andel.arbeidsforhold?.arbeidsgiverIdent;
    const inntektsmeldingÅrsinntekt = andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd
      ? andel.arbeidsforhold.belopFraInntektsmeldingPrMnd * 12
      : undefined;
    const beregningsgrunnlagÅrsinntekt =
      arbeidsgiverIdent && beregningsgrunnlagInntekter[arbeidsgiverIdent]
        ? (beregningsgrunnlagInntekter[arbeidsgiverIdent] / 3) * 12
        : undefined;

    return {
      andelsnr: andel.andelsnr,
      arbeidsgiver: formaterVisningsnavnForAndel(andel),
      beregnetPrÅrKilde: finnKildeForAndel(andel, inntektsmeldingÅrsinntekt, beregningsgrunnlagÅrsinntekt),
    };
  });
};

/**
 * Denne metoden finner kilden som er brukt til å utlede beregnerPrAar for andelen.
 * Verdien fastsattAvSaksbehandler er ikke til å stole på, da den blir satt for alle andeler når én av de blir fastsatt.
 * Derfor må man sammenlikne beløpene først for å avklare om kilden kan være inntektsmelding/a-ordning, selv om
 * fastsattAvSaksbehandler kan være true.
 */
const finnKildeForAndel = (
  andel: BeregningsgrunnlagAndel,
  inntektsmeldingÅrsinntekt?: number,
  beregningsgrunnlagÅrsinntekt?: number,
): KildeForAndel['beregnetPrÅrKilde'] => {
  if (andel.beregnetPrAar === undefined) {
    return 'INGEN';
  }
  if (erLikMedToDesimaler(andel.beregnetPrAar, inntektsmeldingÅrsinntekt)) {
    return 'INNTEKTSMELDING';
  }
  if (erLikMedToDesimaler(andel.beregnetPrAar, beregningsgrunnlagÅrsinntekt)) {
    return 'A_ORDNING';
  }
  if (
    andel.fastsattAvSaksbehandler &&
    erBeregnetPrAarOppdatert(andel.beregnetPrAar, inntektsmeldingÅrsinntekt, beregningsgrunnlagÅrsinntekt)
  ) {
    return 'SAKSBEHANDLER';
  }
  return 'INGEN';
};

const erBeregnetPrAarOppdatert = (
  beregnetPrAar: number,
  inntektsmeldingÅrsinntekt?: number,
  beregningsgrunnlagÅrsinntekt?: number,
): boolean =>
  beregnetPrAar !== 0 || inntektsmeldingÅrsinntekt !== undefined || beregningsgrunnlagÅrsinntekt !== undefined;

const erLikMedToDesimaler = (a: number, b?: number): boolean => {
  return a.toFixed(2) === b?.toFixed(2);
};
