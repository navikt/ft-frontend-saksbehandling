import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  InntektsgrunnlagInntektAT,
  InntektsgrunnlagMåned,
} from '@navikt/ft-types';

const grupperSummerteInntekterPerArbeidsgiver = (
  inntekterMnd: InntektsgrunnlagMåned[] | undefined,
): Record<string, number> => {
  if (!inntekterMnd) {
    return {};
  }

  return inntekterMnd
    .flatMap(({ inntekter }) => inntekter)
    .filter<InntektsgrunnlagInntektAT>(inntekt => inntekt.inntektAktivitetType === 'ARBEIDSTAKERINNTEKT')
    .reduce(
      (acc, inntekt) => {
        acc[inntekt.arbeidsgiverIdent] = (acc[inntekt.arbeidsgiverIdent] || 0) + inntekt.beløp;
        return acc;
      },
      {} as Record<string, number>,
    );
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] =>
  andeler.filter(andel => andel.aktivitetStatus === 'AT');

export const mapBeregningsgrunnlagTilArbeidsinntektVisning = (
  { inntektsgrunnlag, beregningsgrunnlagPeriode }: Beregningsgrunnlag,
  formaterArbeidsgiver: (arbeidsgiverIdent: string | undefined) => string,
) => {
  const andelerIFørstePeriode = beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const relevanteAndeler = finnAndelerSomSkalVises(andelerIFørstePeriode);

  const beregningsgrunnlagInntekter = grupperSummerteInntekterPerArbeidsgiver(
    inntektsgrunnlag?.beregningsgrunnlagInntekter,
  );
  const sammenligningsgrunnlagInntekter = grupperSummerteInntekterPerArbeidsgiver(
    inntektsgrunnlag?.sammenligningsgrunnlagInntekter,
  );

  return relevanteAndeler.map(andel => {
    const arbeidsgiverIdent = andel.arbeidsforhold?.arbeidsgiverIdent;
    return {
      arbeidsgiverLabel: formaterArbeidsgiver(arbeidsgiverIdent),
      andelsnr: andel.andelsnr,
      beregningsperiodeFom: andel.beregningsperiodeFom,
      beregningsperiodeTom: andel.beregningsperiodeTom,
      stillingsProsent: andel.arbeidsforhold?.stillingsProsent,
      inntektsmeldingÅrsinntekt: (andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd ?? 0) * 12,
      beregningsgrunnlagÅrsinntekt: arbeidsgiverIdent ? beregningsgrunnlagInntekter[arbeidsgiverIdent] : 0,
      sammenligningsgrunnlagÅrsinntekt: arbeidsgiverIdent ? sammenligningsgrunnlagInntekter[arbeidsgiverIdent] : 0,
    };
  });
};
