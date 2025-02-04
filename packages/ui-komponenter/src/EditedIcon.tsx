import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import classnames from 'classnames/bind';

import styles from './editedIcon.module.css';

const classNames = classnames.bind(styles);

export interface Props {
  className?: string;
}

/*
 * EditedIcon
 *
 * Komponent/Ikon som viser om noe i GUI er endret.
 */

export const EditedIcon = ({ className = '' }: Props) => (
  <span data-testid="editedIcon" className={classNames('editedIcon', className)}>
    <PersonPencilFillIcon
      title="Saksbehandler har endret feltets verdi"
      height={20}
      width={20}
      color="var(--a-orange-600)"
    />
  </span>
);
