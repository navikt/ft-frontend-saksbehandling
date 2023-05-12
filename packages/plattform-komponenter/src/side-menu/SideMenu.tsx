import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import React from 'react';
import classnames from 'classnames';
import MenuLink from './MenuLink';
import styles from './sideMenu.module.css';

const sideMenuCls = bemUtils('sideMenu');

export interface Link {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
}

export type ThemeProp = 'arrow';

interface SideMenuProps {
  heading?: string;
  links: Link[];
  onClick: (index: number) => void;
  theme?: ThemeProp;
}

const SideMenu = ({ links, heading, onClick, theme }: SideMenuProps): JSX.Element => {
  const sideMenuRootClassnames = classnames(
    styles[sideMenuCls.block],
    theme
      ? {
          [styles[sideMenuCls.modifier(theme)]]: theme,
        }
      : {},
  );
  return (
    <div className={sideMenuRootClassnames}>
      <nav className={styles[sideMenuCls.element('container')]}>
        {heading && (
          <BodyShort size="small" className={styles[sideMenuCls.element('heading')]}>
            {heading}
          </BodyShort>
        )}
        <ul className={styles[sideMenuCls.element('link-list')]}>
          {links.map(({ label, active, icon }, index) => (
            <MenuLink
              key={label.split(' ').join('')}
              label={label}
              active={active}
              onClick={() => onClick(index)}
              icon={icon}
              theme={theme}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
