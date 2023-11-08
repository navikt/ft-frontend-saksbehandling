import React, { FunctionComponent } from 'react';
import { Box, HStack, Label } from '@navikt/ds-react';
import { HourglassTopFilledIcon } from '@navikt/aksel-icons';

import { FormattedMessage, useIntl } from 'react-intl';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
const ManglendeKlassifiseringPanel: FunctionComponent = () => (
  <Box borderWidth="2" borderColor="border-divider" borderRadius="large" padding="3">
    <HStack gap="4" align="center">
      <div>
        <HourglassTopFilledIcon
          title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
          color="var(--a-gray-600)"
          height={24}
          width={24}
        />
      </div>
      <Label size="small">
        <FormattedMessage id="Risikopanel.Tittel.ManglerKlassifisering" />
      </Label>
    </HStack>
  </Box>
);

export default ManglendeKlassifiseringPanel;
