import React from 'react';
import { Heading } from '@navikt/ds-react';
import styles from './titleWithUnderline.less';

export interface TitleWithUnderlineProps {
  children: React.ReactNode;
  titleClass?: string;
  contentAfterTitleRenderer?: () => React.ReactNode;
}

const TitleWithUnderline = ({ children, titleClass, contentAfterTitleRenderer }: TitleWithUnderlineProps) => (
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

export default TitleWithUnderline;
