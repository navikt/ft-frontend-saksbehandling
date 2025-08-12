import { type ReactNode } from 'react';

import styles from './fadingPanel.module.css';

export interface Props {
  withoutTopMargin?: boolean;
  children: ReactNode | ReactNode[];
}

/*
 * FadingPanel
 *
 * Animerer(fade-in) innholdet i panelet.
 */
export const FadingPanel = ({ withoutTopMargin = false, children }: Props) => (
  <div className={withoutTopMargin ? styles.containerWithoutTopMargin : styles.container}>{children}</div>
);
