import { FormattedMessage } from 'react-intl';

import { Tag } from '@navikt/ds-react';

import styles from './vurdertIForrigeBehandlingIcon.module.css';

export const VurdertIForrigeBehandlingIcon = () => (
  <Tag size="small" variant="neutral" className={styles.vurdertIForrigeIcon}>
    <FormattedMessage id="Fordeling.VurdertTidligere" />
  </Tag>
);
