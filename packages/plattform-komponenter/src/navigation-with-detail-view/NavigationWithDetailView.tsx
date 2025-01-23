import React from 'react';
import styles from './navigationWithDetailViewStyles.module.css';

export interface NavigationWithDetailViewProps {
  navigationSection: () => React.ReactNode;
  detailSection: () => React.ReactNode;
  showDetailSection: boolean;
}

export const NavigationWithDetailView = ({
  navigationSection,
  detailSection,
  showDetailSection,
}: NavigationWithDetailViewProps) => (
  <div className={styles.navigationWithDetailView}>
    <div
      className={`${styles.navigationWithDetailView__navigationSection} navigationWithDetailView__navigationSection`}
    >
      {navigationSection()}
    </div>
    {showDetailSection && (
      <div className={`${styles.navigationWithDetailView__detailSection} navigationWithDetailView__detailSection`}>
        {detailSection()}
      </div>
    )}
  </div>
);
