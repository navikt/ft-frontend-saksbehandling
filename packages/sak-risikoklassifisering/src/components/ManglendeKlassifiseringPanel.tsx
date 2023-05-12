import React, { FunctionComponent } from 'react';
import { Panel } from '@navikt/ds-react';
import { MenuElipsisHorizontalCircleIcon } from '@navikt/aksel-icons';

import { useIntl } from 'react-intl';
import TittelMedDivider from './TittelMedDivider';

import styles from './manglendeKlassifiseringPanel.module.css';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
const ManglendeKlassifiseringPanel: FunctionComponent = () => (
  <Panel border className={styles.ingenKlassifiseringUtfortTittel}>
    <TittelMedDivider
      ikon={
        <MenuElipsisHorizontalCircleIcon
          title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
          color="var(--a-gray-600)"
          height={30}
          width={30}
        />
      }
      tittel="Risikopanel.Tittel.ManglerKlassifisering"
    />
  </Panel>
);

export default ManglendeKlassifiseringPanel;
