import React, { FunctionComponent } from 'react';
import { Box } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

import { useIntl } from 'react-intl';
import TittelMedDivider from './TittelMedDivider';

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
const IngenRisikoPanel: FunctionComponent = () => (
  <Box background="surface-success-subtle" borderRadius="large" padding="3">
    <TittelMedDivider
      ikon={
        <CheckmarkCircleFillIcon
          title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
          height={24}
          width={24}
          color="var(--a-surface-success)"
        />
      }
      tittel="Risikopanel.Tittel.IngenFaresignaler"
    />
  </Box>
);

export default IngenRisikoPanel;
