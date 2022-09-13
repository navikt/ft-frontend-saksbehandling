import React, { FunctionComponent } from 'react';
import { Panel } from '@navikt/ds-react';

import manglendeKlassifiseringIkon from '../images/behandle_disable.svg';
import TittelMedDivider from './TittelMedDivider';

import styles from './manglendeKlassifiseringPanel.less';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
const ManglendeKlassifiseringPanel: FunctionComponent = () => (
  <Panel border className={styles.ingenKlassifiseringUtfortTittel}>
    <TittelMedDivider imageSrc={manglendeKlassifiseringIkon} tittel="Risikopanel.Tittel.ManglerKlassifisering" />
  </Panel>
);

export default ManglendeKlassifiseringPanel;
