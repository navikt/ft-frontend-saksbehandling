import { BodyShort } from '@navikt/ds-react';
import React from 'react';

import styles from './menuLink.module.css';

interface MenuLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  icon?: React.ReactNode;
}

export const MenuLink = ({ label, active, onClick, icon }: MenuLinkProps) => {
  const handleOnClick = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onClick();
  };
  const buttonCls = active ? `${styles.menuLink__button} ${styles.menuLink__button__active}` : styles.menuLink__button;
  return (
    <li aria-current={active ? true : undefined}>
      <button className={buttonCls} onClick={handleOnClick} data-testid={active ? 'activeMenuItemButton' : undefined}>
        <BodyShort size="small" as="span">
          {label}
        </BodyShort>
        {icon}
      </button>
    </li>
  );
};
