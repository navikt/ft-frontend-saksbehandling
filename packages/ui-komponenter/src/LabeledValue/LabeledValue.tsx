import type { ReactElement, ReactNode } from 'react';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

interface Props {
  label: ReactNode;
  value: ReactElement | string | number;
  size?: 'medium' | 'small';
  fieldType?: 'text' | 'component';
  horizontal?: boolean;
}

export const LabeledValue = ({ label, value, horizontal = false, size = 'small', fieldType = 'text' }: Props) => {
  const StackComponent = horizontal ? HStack : VStack;
  const gap = horizontal ? 'space-8' : 'space-0';
  return (
    <StackComponent gap={gap} align="baseline">
      <Label size={size}>{label}</Label>
      {fieldType === 'text' ? <BodyShort size={size}>{value}</BodyShort> : <div>{value}</div>}
    </StackComponent>
  );
};
