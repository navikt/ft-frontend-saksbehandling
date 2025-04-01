import React from 'react';

import { Heading } from '@navikt/ds-react';

import styles from './titleWithUnderline.module.css';

export interface TitleWithUnderlineProps {
  children: React.ReactNode;
  titleClass?: string;
  contentAfterTitleRenderer?: () => React.ReactNode;
}

/**
 * @deprecated Bruk heller VStask/HStack frå Aksel direkte. Da treng ein ikkje ein eigen komponent https://aksel.nav.no/komponenter/primitives/vstack
 */
export const TitleWithUnderline = ({ children, titleClass, contentAfterTitleRenderer }: TitleWithUnderlineProps) => (
  <>
    <div className={styles.titleWithUnderline}>
      <Heading size="small" level="2" className={titleClass}>
        {children}
      </Heading>
      {contentAfterTitleRenderer && contentAfterTitleRenderer()}
    </div>
    <hr style={{ color: '#B7B1A9' }} />
  </>
);
