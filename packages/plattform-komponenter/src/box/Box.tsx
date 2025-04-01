import React, { JSX } from 'react';

import classNames from 'classnames';

import styles from './box.module.css';

export enum Margin {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xLarge = 'xLarge',
  xxLarge = 'xxLarge',
}

export interface BoxProps {
  children: React.ReactNode;
  marginBottom?: Margin;
  marginTop?: Margin;
}

/**
 * @deprecated Bruk heller Box frå Aksel: https://aksel.nav.no/komponenter/primitives/box
 */
export const Box = ({ children, marginBottom, marginTop }: BoxProps): JSX.Element => {
  const marginTopClass = styles[`${marginTop}MarginTop`];
  const marginBottomClass = styles[`${marginBottom}MarginBottom`];
  const boxClassnames = classNames({
    [marginTopClass]: marginTop,
    [marginBottomClass]: marginBottom,
  });
  return <div className={boxClassnames}>{children}</div>;
};
