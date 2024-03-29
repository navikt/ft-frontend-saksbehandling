import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames/bind';

import styles from './tooltip.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  children: ReactNode | string;
  content: ReactNode | string;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignTop?: boolean;
  alignBottom?: boolean;
}

/**
 * Tooltip
 *
 * @deprecated Bruk heller komponentar fra https://aksel.nav.no. Tooltip eller evt ReadMore/Popover for rikt innhold.
 */
const Tooltip: FunctionComponent<OwnProps> = ({
  children,
  content,
  alignRight = false,
  alignLeft = false,
  alignTop = false,
  alignBottom = false,
}) => (
  <div className={styles.tooltip}>
    <span
      className={classNames(styles.tooltiptext, {
        right: alignRight || (!alignLeft && !alignTop && !alignBottom),
        left: alignLeft,
        top: alignTop,
        bottom: alignBottom,
      })}
    >
      {content}
    </span>
    {children}
  </div>
);

export default Tooltip;
