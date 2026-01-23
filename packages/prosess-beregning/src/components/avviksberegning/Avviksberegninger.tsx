import type { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
}

export const Avviksberegninger = ({ beregningsgrunnlag, formaterVisningsnavnForAndel }: Props) => {
  return (
    <>
      {beregningsgrunnlag.sammenligningsgrunnlagPrStatus?.map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType
          beregningsgrunnlag={beregningsgrunnlag}
          key={sg.sammenligningsgrunnlagType}
          sammenligningsgrunnlag={sg}
          formaterVisningsnavnForAndel={formaterVisningsnavnForAndel}
        />
      ))}
    </>
  );
};
