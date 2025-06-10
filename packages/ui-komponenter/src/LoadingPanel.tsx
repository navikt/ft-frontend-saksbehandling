import { Loader } from '@navikt/ds-react';

import styles from './loadingPanel.module.css';

/**
 * LoadingPanel
 *
 * Viser lasteikon.
 */
export const LoadingPanel = () => (
  <div className={styles.container}>
    <Loader size="2xlarge" />
  </div>
);
