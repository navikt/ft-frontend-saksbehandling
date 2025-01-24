import React from 'react';
import styles from './indicatorWithOverlay.module.css';

interface IndicatorWithOverlayProps {
  indicatorRenderer: () => React.ReactNode;
  overlayRenderer: () => React.ReactNode;
}

export const IndicatorWithOverlay = ({ indicatorRenderer, overlayRenderer }: IndicatorWithOverlayProps) => (
  <div className={styles.indicatorWithOverlay}>
    <div className={styles.indicatorWithOverlay__overlay}>{overlayRenderer()}</div>
    <div className={styles.indicatorWithOverlay__indicator}>{indicatorRenderer()}</div>
  </div>
);
