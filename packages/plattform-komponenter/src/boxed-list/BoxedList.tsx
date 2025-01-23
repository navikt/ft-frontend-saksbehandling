import React from 'react';
import styles from './boxedList.module.css';

interface BoxedListProps {
  children: React.ReactNode;
}

export const BoxedList = ({ children }: BoxedListProps) => <ul className={styles.boxedList}>{children}</ul>;
