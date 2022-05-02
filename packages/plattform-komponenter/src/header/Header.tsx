import React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import { bemUtils } from '@navikt/ft-utils';
import styles from './header.less';

interface HeaderProps {
    title: string;
    titleHref?: string;
}

const headerCls = bemUtils('header');
export const Header: React.FunctionComponent<HeaderProps> = ({ title, titleHref, children }) => {
    return (
        <header className={styles[headerCls.block]}>
            <div className={styles[headerCls.element('column')]}>
                {titleHref ? (
                    <a href={titleHref} className={styles[headerCls.element('title-anchor')]}>
                        <PageTitle className={styles[headerCls.element('title')]}>
                            NAV
                            <span className={styles[headerCls.element('subtitle')]}>{title}</span>
                        </PageTitle>
                    </a>
                ) : (
                    <PageTitle className={styles[headerCls.element('title')]}>
                        NAV
                        <span className={styles[headerCls.element('subtitle')]}>{title}</span>
                    </PageTitle>
                )}
            </div>
            <div className={styles[headerCls.element('column')]}>{children}</div>
        </header>
    );
};

export default Header;
