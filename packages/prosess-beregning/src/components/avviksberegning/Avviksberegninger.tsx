import { HStack } from '@navikt/ds-react';

import type { SammenligningsgrunlagProp } from '@navikt/ft-types';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[];
}

export const Avviksberegninger = ({ sammenligningsgrunnlagPrStatus = [] }: Props) => {
  return (
    <HStack gap="space-8">
      {sammenligningsgrunnlagPrStatus.map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType key={sg.sammenligningsgrunnlagType} sammenligningsgrunnlag={sg} />
      ))}
    </HStack>
  );
};
