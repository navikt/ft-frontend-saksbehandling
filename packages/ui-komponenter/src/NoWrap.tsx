import { type PropsWithChildren, type ReactNode } from 'react';

import styles from './noWrap.module.css';

export const NoWrap = (props: PropsWithChildren | ReactNode[]) => (
  <span className={styles.noWrap}>{Array.isArray(props) ? props : props.children}</span>
);
