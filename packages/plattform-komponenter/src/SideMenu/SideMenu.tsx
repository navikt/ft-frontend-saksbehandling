import React from 'react';

import { Detail } from '@navikt/ds-react';

import { MenuLink } from './MenuLink';

import styles from './sideMenu.module.css';

interface Link {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
}

interface SideMenuProps {
  heading?: string;
  links: Link[];
  onClick: (index: number) => void;
}

export const SideMenu = ({ links, heading, onClick }: SideMenuProps) => {
  return (
    <nav className={styles.sideMenu__container}>
      {heading && (
        <Detail uppercase className={styles.sideMenu__heading}>
          {heading}
        </Detail>
      )}
      <ul className={styles.sideMenu__linkList}>
        {links.map(({ label, active, icon }, index) => (
          <MenuLink key={label} label={label} active={active} onClick={() => onClick(index)} icon={icon} />
        ))}
      </ul>
    </nav>
  );
};
