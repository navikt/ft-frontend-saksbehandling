import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, InntektsgrunnlagMåned } from '@navikt/ft-types';

const summerInntekterForArbeidsgiver = (
  inntekterMnd: InntektsgrunnlagMåned[] | undefined,
  agIdent: string | undefined,
) =>
  inntekterMnd && agIdent
    ? inntekterMnd
        .flatMap(({ inntekter }) => inntekter)
        .filter(
          inntekt => inntekt.inntektAktivitetType === 'ARBEIDSTAKERINNTEKT' && inntekt.arbeidsgiverIdent === agIdent,
        )
        .reduce((acc, { beløp }) => acc + beløp, 0)
    : 0;

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] =>
  andeler.filter(andel => andel.aktivitetStatus === 'AT');

export const mapBeregningsgrunnlagTilArbeidsinntektVisning = (
  beregningsgrunnlag: Beregningsgrunnlag,
  formaterArbeidsgiver: (arbeidsgiverIdent: string | undefined) => string,
) => {
  const andelerIFørstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const relevanteAndeler = finnAndelerSomSkalVises(andelerIFørstePeriode);

  return relevanteAndeler.map(andel => ({
    arbeidsgiverLabel: formaterArbeidsgiver(andel.arbeidsforhold?.arbeidsgiverIdent),
    andelsnr: andel.andelsnr,
    beregningsperiodeFom: andel.beregningsperiodeFom,
    beregningsperiodeTom: andel.beregningsperiodeTom,
    stillingsProsent: andel.arbeidsforhold?.stillingsProsent,
    inntektsmeldingÅrsinntekt: (andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd ?? 0) * 12,
    beregningsgrunnlagÅrsinntekt: summerInntekterForArbeidsgiver(
      beregningsgrunnlag.inntektsgrunnlag?.beregningsgrunnlagInntekter,
      andel.arbeidsforhold?.arbeidsgiverIdent,
    ),
    sammenligningsgrunnlagÅrsinntekt: summerInntekterForArbeidsgiver(
      beregningsgrunnlag.inntektsgrunnlag?.sammenligningsgrunnlagInntekter,
      andel.arbeidsforhold?.arbeidsgiverIdent,
    ),
  }));
};
