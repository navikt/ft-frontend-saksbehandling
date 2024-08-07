import React from 'react';
import styles from './basicList.module.css';

export interface BasicListProps {
  elements: React.ReactNode[];
}

const BasicList = ({ elements }: BasicListProps) => (
  <ul className={styles.basicList}>
    {elements.map((element, index) => (
      <li className={styles.basicList__element} key={`element-${index}`}>
        {element}
      </li>
    ))}
  </ul>
);

export default BasicList;
