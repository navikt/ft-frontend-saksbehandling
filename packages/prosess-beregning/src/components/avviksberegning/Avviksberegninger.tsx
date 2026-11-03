import type { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { sortObjectBy } from '@navikt/ft-utils';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
}

export const Avviksberegninger = ({ beregningsgrunnlag, formaterVisningsnavnForAndel }: Props) => {
  const { sammenligningsgrunnlagPrStatus } = beregningsgrunnlag;
  if (!sammenligningsgrunnlagPrStatus || sammenligningsgrunnlagPrStatus.length === 0) {
    return null;
  }
  return (
    <>
      {sammenligningsgrunnlagPrStatus.toSorted(sortObjectBy('sammenligningsgrunnlagType')).map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType
          key={sg.sammenligningsgrunnlagType}
          beregningsgrunnlag={beregningsgrunnlag}
          sammenligningsgrunnlag={sg}
          formaterVisningsnavnForAndel={formaterVisningsnavnForAndel}
        />
      ))}
    </>
  );
};
