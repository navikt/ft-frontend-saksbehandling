import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Tag } from '@navikt/ds-react';
import styles from './vurdertIForrigeBehandlingIcon.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  className?: string;
}

/*
 * VurdertIForrigeBehandlingIcon
 *
 * Komponent/Ikon som viser om noe er vurdert tidligere
 */

const VurdertIForrigeBehandlingIcon: FunctionComponent<OwnProps> = ({ className = '' }) => (
  <span data-testid="vurdertIForrigeIcon" className={classNames('vurdertIForrigeIcon', className)}>
    <Tag size="small" variant="neutral">
      Vurdert i en tidligere behandling
    </Tag>
  </span>
);

export default VurdertIForrigeBehandlingIcon;
