import { bemUtils } from '@navikt/ft-utils';
import React, { ReactElement } from 'react';
import styles from './header.module.css';

export interface HeaderProps {
  title: string;
  titleHref?: string;
  changeLocation?: (event: React.SyntheticEvent) => void;
  children: ReactElement<any> | ReactElement<any>[];
}

const headerCls = bemUtils('header');
export const Header: React.FunctionComponent<HeaderProps> = ({ title, titleHref, changeLocation, children }) => (
  <header className={styles[headerCls.block]}>
    <div className={styles[headerCls.element('column')]}>
      {titleHref || changeLocation ? (
        <a
          href={titleHref || '#'}
          onClick={changeLocation || undefined}
          onContextMenu={changeLocation || undefined}
          className={styles[headerCls.element('title-anchor')]}
        >
          <h1 className={styles[headerCls.element('title')]}>
            Nav
            <span className={styles[headerCls.element('subtitle')]}>{title}</span>
          </h1>
        </a>
      ) : (
        <h1 className={styles[headerCls.element('title')]}>
          Nav
          <span className={styles[headerCls.element('subtitle')]}>{title}</span>
        </h1>
      )}
    </div>
    <div className={styles[headerCls.element('column')]}>{children}</div>
  </header>
);

export default Header;
