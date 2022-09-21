import React, { ReactNode, FunctionComponent } from 'react';

import styles from './fadingPanel.less';

interface OwnProps {
  withoutTopMargin?: boolean;
  children: ReactNode | ReactNode[];
}

/*
 * FadingPanel
 *
 * Animerer(fade-in) innholdet i panelet.
 */
const FadingPanel: FunctionComponent<OwnProps> = ({ withoutTopMargin = false, children }) => (
  <div className={withoutTopMargin ? styles.containerWithoutTopMargin : styles.container}>{children}</div>
);

export default FadingPanel;
