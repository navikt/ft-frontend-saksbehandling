import { ReactNode } from 'react';

import styles from './floatRight.module.css';

export interface Props {
  children?: ReactNode;
}

export const FloatRight = ({ children }: Props) => <span className={styles.floatRight}>{children}</span>;
