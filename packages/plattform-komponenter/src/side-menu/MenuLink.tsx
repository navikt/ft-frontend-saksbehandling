import { bemUtils } from '@navikt/ft-utils';
import classnames from 'classnames';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import styles from './menuLink.less';

interface MenuLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  iconSrc?: string;
  iconAltText?: string;
  theme?: string;
}

const menuLinkCls = bemUtils('menuLink');

const MenuLink = ({ label, active, onClick, iconSrc, iconAltText, theme }: MenuLinkProps): JSX.Element => {
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
      [styles['menuLink__label--with-icon']]: !!iconSrc,
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
      >
        {arrowTheme && active ? (
          <Element tag="span" className={labelCls}>
            {label}
            {iconSrc && <img src={iconSrc} alt={iconAltText || ''} className={styles[menuLinkCls.element('icon')]} />}
          </Element>
        ) : (
          <Normaltekst tag="span" className={labelCls}>
            {label}
            {iconSrc && <img src={iconSrc} alt={iconAltText || ''} className={styles[menuLinkCls.element('icon')]} />}
          </Normaltekst>
        )}

        {arrowTheme && active && <span className={styles[menuLinkCls.element('arrow-right')]} />}
      </button>
    </li>
  );
};

export default MenuLink;
