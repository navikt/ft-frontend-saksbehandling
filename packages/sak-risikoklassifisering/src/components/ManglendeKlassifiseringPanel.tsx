import React, { FunctionComponent } from 'react';
import { Box } from '@navikt/ds-react';
import { HourglassTopFilledIcon } from '@navikt/aksel-icons';

import { useIntl } from 'react-intl';
import TittelMedDivider from './TittelMedDivider';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
const ManglendeKlassifiseringPanel: FunctionComponent = () => (
  <Box borderWidth="2" borderColor="border-divider" borderRadius="large" padding="3">
    <TittelMedDivider
      ikon={
        <HourglassTopFilledIcon
          title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
          color="var(--a-gray-600)"
          height={24}
          width={24}
        />
      }
      tittel="Risikopanel.Tittel.ManglerKlassifisering"
    />
  </Box>
);

export default ManglendeKlassifiseringPanel;
