import React from 'react';
import styles from './basicList.less';

export interface BasicListProps {
  elements: React.ReactNode[];
}

const BasicList = ({ elements }: BasicListProps) => (
  <ul className={styles.basicList}>
    {elements.map((element, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li className={styles.basicList__element} key={`element-${index}`}>
        {element}
      </li>
    ))}
  </ul>
);

export default BasicList;
