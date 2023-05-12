import { bemUtils } from '@navikt/ft-utils';
import classnames from 'classnames';
import { BodyShort, Label } from '@navikt/ds-react';

import React from 'react';
import styles from './menuLink.module.css';

interface MenuLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  icon?: React.ReactNode;
  theme?: string;
}

const menuLinkCls = bemUtils('menuLink');

const MenuLink = ({ label, active, onClick, icon, theme }: MenuLinkProps): JSX.Element => {
  const arrowTheme = theme === 'arrow';
  const handleOnClick = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onClick();
  };

  const labelCls = classnames(
    active
      ? `${styles[menuLinkCls.element('label')]} ${styles['menuLink__label--active']}`
      : styles[menuLinkCls.element('label')],
    {
      [styles['menuLink__label--with-icon']]: !!icon,
    },
  );

  const containerClassnames = classnames(styles[menuLinkCls.block], {
    [styles[menuLinkCls.modifier('withArrows')]]: arrowTheme,
  });

  return (
    <li className={containerClassnames} aria-current={active ? true : undefined}>
      <button
        className={
          active
            ? `${styles[menuLinkCls.element('button')]} ${styles['menuLink__button--active']}`
            : styles[menuLinkCls.element('button')]
        }
        onClick={handleOnClick}
        type="button"
        data-testid={active ? 'activeMenuItemButton' : undefined}
      >
        {arrowTheme && active ? (
          <Label size="small" as="span" className={labelCls}>
            {label}
            {icon}
          </Label>
        ) : (
          <BodyShort size="small" as="span" className={labelCls}>
            {label}
            {icon}
          </BodyShort>
        )}

        {arrowTheme && active && <span className={styles[menuLinkCls.element('arrow-right')]} />}
      </button>
    </li>
  );
};

export default MenuLink;
