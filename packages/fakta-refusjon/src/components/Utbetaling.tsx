import { FormattedMessage } from 'react-intl';

import { Box, Heading, VStack } from '@navikt/ds-react';

export const Utbetaling = () => (
  <VStack gap="space-20">
    <Heading size="xsmall" level="3">
      <FormattedMessage id="Utbetaling.Tittel" />
    </Heading>
    <Box background="neutral-soft" paddingBlock="space-8 space-24" paddingInline="space-20">
      {/* timeline */}
    </Box>
  </VStack>
);
