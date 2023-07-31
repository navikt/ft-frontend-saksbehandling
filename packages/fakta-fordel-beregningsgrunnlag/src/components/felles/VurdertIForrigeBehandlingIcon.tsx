import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Tag } from '@navikt/ds-react';
import { useIntl } from 'react-intl';
import styles from './vurdertIForrigeBehandlingIcon.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  className?: string;
}

/*
 * VurdertIForrigeBehandlingIcon
 *
 * Komponent/Ikon som viser om noe er vurdert tidligere
 */

const VurdertIForrigeBehandlingIcon: FunctionComponent<OwnProps> = ({ className = '' }) => {
  const intl = useIntl();
  return (
    <span data-testid="vurdertIForrigeIcon" className={classNames('vurdertIForrigeIcon', className)}>
      <Tag size="small" variant="neutral">
        {intl.formatMessage({ id: 'Fordeling.VurdertTidligere' })}
      </Tag>
    </span>
  );
};

export default VurdertIForrigeBehandlingIcon;
