import { HStack } from '@navikt/ds-react';

import type { SammenligningsgrunlagProp } from '@navikt/ft-types';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[] | undefined;
}

export const Avviksberegninger = ({ sammenligningsgrunnlagPrStatus = [] }: Props) => {
  if (sammenligningsgrunnlagPrStatus.length === 0) {
    return null;
  }
  return (
    <HStack gap="space-8" style={{ display: 'flex' }}>
      {sammenligningsgrunnlagPrStatus.map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType key={sg.sammenligningsgrunnlagType} sammenligningsgrunnlag={sg} />
      ))}
    </HStack>
  );
};
