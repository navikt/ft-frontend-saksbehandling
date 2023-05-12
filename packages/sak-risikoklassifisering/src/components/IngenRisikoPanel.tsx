import React, { FunctionComponent } from 'react';
import { Panel } from '@navikt/ds-react';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';

import { useIntl } from 'react-intl';
import TittelMedDivider from './TittelMedDivider';

import styles from './ingenRisikoPanel.module.css';

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
const IngenRisikoPanel: FunctionComponent = () => (
  <Panel border className={styles.ingenRisikoOppdagetTittel}>
    <TittelMedDivider
      ikon={
        <CheckmarkCircleIcon
          title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
          height={30}
          width={30}
          color="var(--a-surface-success)"
        />
      }
      tittel="Risikopanel.Tittel.IngenFaresignaler"
    />
  </Panel>
);

export default IngenRisikoPanel;
