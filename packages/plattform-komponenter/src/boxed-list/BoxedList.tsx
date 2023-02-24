import React from 'react';
import styles from './boxedList.module.css';

interface BoxedListProps {
  children: React.ReactNode;
}

const BoxedList: React.FunctionComponent<BoxedListProps> = ({ children }) => (
  <ul className={styles.boxedList}>{children}</ul>
);

export default BoxedList;
