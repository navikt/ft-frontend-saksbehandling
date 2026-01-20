import { FormattedMessage } from 'react-intl';

import { Tag } from '@navikt/ds-react';

import styles from './vurdertIForrigeBehandlingIcon.module.css';

export const VurdertIForrigeBehandlingIcon = () => (
  <Tag data-color="neutral" size="small" variant="outline" className={styles.vurdertIForrigeIcon}>
    <FormattedMessage id="Fordeling.VurdertTidligere" />
  </Tag>
);
