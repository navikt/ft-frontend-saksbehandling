import { FaktaOmBeregningTilfelle, Organisasjonstype as organisasjonstyper } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { InntektTransformed } from '../../../../typer/FieldValues';

const harAndelKunstigArbeidsforhold = (andel: BeregningsgrunnlagAndel) =>
  andel.arbeidsforhold &&
  andel.arbeidsforhold.organisasjonstype &&
  andel.arbeidsforhold.organisasjonstype === organisasjonstyper.KUNSTIG;

export const harKunstigArbeidsforhold = (tilfeller: string[], beregningsgrunnlag: Beregningsgrunnlag) => {
  if (tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)) {
    return (
      beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.find(
        harAndelKunstigArbeidsforhold,
      ) !== undefined
    );
  }
  return false;
};

export const harFieldKunstigArbeidsforhold = (field: InntektTransformed, bg: Beregningsgrunnlag): boolean =>
  bg.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.find(
    andel =>
      andel.andelsnr === field.andelsnr &&
      andel.arbeidsforhold &&
      andel.arbeidsforhold.organisasjonstype &&
      andel.arbeidsforhold.organisasjonstype === organisasjonstyper.KUNSTIG,
  ) !== undefined;
