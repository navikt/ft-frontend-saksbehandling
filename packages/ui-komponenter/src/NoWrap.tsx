import React, { PropsWithChildren } from 'react';

import styles from './noWrap.module.css';

export const NoWrap = ({ children }: PropsWithChildren) => <span className={styles.noWrap}>{children}</span>;
