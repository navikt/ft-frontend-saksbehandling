import React from 'react';
import styles from './aksjonspunktBoks.module.css';

interface Props {
  children?: React.ReactNode;
}

const AksjonspunktBoks: React.FC<Props> = ({ children }) => <div className={styles.aksjonspunktBoks}>{children}</div>;

export default AksjonspunktBoks;
