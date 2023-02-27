import React, { FunctionComponent, ReactNode } from 'react';

import styles from './timelineDataContainer.module.css';

const TimeLineDataContainer: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.showDataContainer}>{children}</div>
);

export default TimeLineDataContainer;
