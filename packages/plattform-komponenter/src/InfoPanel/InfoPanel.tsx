import React from 'react';

import classnames from 'classnames';

import styles from './infoPanel.module.css';

interface InfoPanel {
  children: React.ReactNode;
  type: 'success' | 'warning';
}

export const InfoPanel = ({ children, type }: InfoPanel) => {
  const cls = classnames(styles.infoPanel, styles[`infoPanel--${type}`]);
  return <div className={cls}>{children}</div>;
};
