import type { SammenligningsgrunlagProp } from '@navikt/ft-types';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
}

export const Avviksberegninger = ({ sammenligningsgrunnlagPrStatus = [] }: Props) => {
  return (
    <>
      {sammenligningsgrunnlagPrStatus.map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType key={sg.sammenligningsgrunnlagType} sammenligningsgrunnlag={sg} />
      ))}
    </>
  );
};
