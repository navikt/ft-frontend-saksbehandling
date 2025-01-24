import React from 'react';
import styles from './aksjonspunktBoks.module.css';

interface Props {
  children?: React.ReactNode;
}

export const AksjonspunktBoks = ({ children }: Props) => <div className={styles.aksjonspunktBoks}>{children}</div>;
