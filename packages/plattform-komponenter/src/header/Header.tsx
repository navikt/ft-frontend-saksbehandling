import React, { ReactElement } from 'react';
import { Heading } from '@navikt/ds-react/esm';
import { bemUtils } from '@navikt/ft-utils';
import styles from './header.module.css';

interface HeaderProps {
  title: string;
  titleHref?: string;
  changeLocation?: (event: React.SyntheticEvent) => void;
  children: ReactElement | ReactElement[];
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
          <Heading level="1" size="xlarge" className={styles[headerCls.element('title')]}>
            NAV
            <span className={styles[headerCls.element('subtitle')]}>{title}</span>
          </Heading>
        </a>
      ) : (
        <Heading level="1" size="xlarge" className={styles[headerCls.element('title')]}>
          NAV
          <span className={styles[headerCls.element('subtitle')]}>{title}</span>
        </Heading>
      )}
    </div>
    <div className={styles[headerCls.element('column')]}>{children}</div>
  </header>
);

export default Header;
