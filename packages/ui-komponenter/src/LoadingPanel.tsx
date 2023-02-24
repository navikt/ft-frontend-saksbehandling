import React from 'react';
import { Loader } from '@navikt/ds-react/esm';

import styles from './loadingPanel.module.css';

/**
 * LoadingPanel
 *
 * Presentasjonskomponent. Viser lasteikon.
 */
const LoadingPanel = () => (
  <div className={styles.container}>
    <Loader size="2xlarge" />
  </div>
);

export default LoadingPanel;
