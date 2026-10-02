import { FormattedMessage } from 'react-intl';

import { Box, Heading } from '@navikt/ds-react';

export const Utbetaling = () => (
  <>
    <Heading size="xsmall" level="3">
      <FormattedMessage id="Utbetaling.Tittel" />
    </Heading>
    <Box background="neutral-soft" paddingBlock="space-8 space-24" paddingInline="space-20">
      {/* timeline */}
    </Box>
  </>
);
