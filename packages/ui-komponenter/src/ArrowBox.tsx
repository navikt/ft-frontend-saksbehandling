import { type CSSProperties, type ReactNode } from 'react';

import styles from './arrowBox.module.css';

interface ArrowBoxStyle extends CSSProperties {
  '--arrow-box-align-offset': string;
  '--arrow-box-margin-left': string;
  '--arrow-box-margin-top': string;
}

const getStyle = (alignOffset: number, marginTop: number, marginLeft: number): ArrowBoxStyle => ({
  '--arrow-box-align-offset': `${alignOffset}px`,
  '--arrow-box-margin-left': `${marginLeft}px`,
  '--arrow-box-margin-top': `${marginTop}px`,
});

const getClassName = (alignLeft: boolean): string => {
  return `${styles.arrowBox} ${alignLeft ? styles.left : styles.top}`;
};

interface Props {
  alignOffset?: number;
  alignLeft?: boolean;
  hideBorder?: boolean;
  children: ReactNode | ReactNode[];
  marginTop?: number;
  marginLeft?: number;
}

export const ArrowBox = ({
  children,
  alignOffset = 0,
  alignLeft = false,
  marginTop = 0,
  marginLeft = 0,
  hideBorder = false,
}: Props) => {
  if (hideBorder) {
    return <div>{children}</div>;
  }

  return (
    <div className={getClassName(alignLeft)} style={getStyle(alignOffset, marginTop, marginLeft)}>
      {children}
    </div>
  );
};
