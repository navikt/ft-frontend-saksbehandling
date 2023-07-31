import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { PersonPencilFillIcon } from '@navikt/aksel-icons';

import styles from './editedIcon.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  className?: string;
}

/*
 * EditedIcon
 *
 * Komponent/Ikon som viser om noe i GUI er endret.
 */

const EditedIcon: FunctionComponent<OwnProps> = ({ className = '' }) => (
  <span data-testid="editedIcon" className={classNames('editedIcon', className)}>
    <PersonPencilFillIcon
      title="Saksbehandler har endret feltets verdi"
      height={20}
      width={20}
      color="var(--a-orange-600)"
    />
  </span>
);

export default EditedIcon;
