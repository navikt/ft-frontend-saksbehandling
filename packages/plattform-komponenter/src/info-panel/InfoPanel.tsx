import React from 'react';
import classnames from 'classnames';
import { Panel } from '@navikt/ds-react';
import styles from './infoPanel.module.css';

interface InfoPanel {
  children: React.ReactNode;
  type: 'success' | 'warning';
}

const InfoPanel = ({ children, type }: InfoPanel) => {
  const cls = classnames(styles.infoPanel, styles[`infoPanel--${type}`]);
  return <Panel className={cls}>{children}</Panel>;
};

export default InfoPanel;
