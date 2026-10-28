import type { ReactElement, ReactNode } from 'react';

import { BodyShort, Box, HStack, Label } from '@navikt/ds-react';

interface Props {
  label: ReactNode;
  value: ReactElement | string | number;
}

export const OpplysningsRad = ({ label, value }: Props) => (
  <Box borderWidth="0 0 1" borderColor="neutral-subtle" paddingBlock="space-4" paddingInline="space-8" asChild>
    <HStack gap="space-4 space-8" align="end" justify="space-between">
      <Label as="span" size="small">
        {label}
      </Label>
      <BodyShort as="span" size="small">
        {value}
      </BodyShort>
    </HStack>
  </Box>
);
