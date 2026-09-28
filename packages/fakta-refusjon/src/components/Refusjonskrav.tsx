import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

export const Refusjonskrav = () => (
  <VStack gap="space-20">
    <Heading size="xsmall" level="3">
      <FormattedMessage id="Refusjonskrav.Tittel" />
    </Heading>
    {/* tabell */}
  </VStack>
);
