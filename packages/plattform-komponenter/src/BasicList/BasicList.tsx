import React from 'react';

import styles from './basicList.module.css';

export interface BasicListProps {
  elements: React.ReactNode[];
}

// TODO (TOR) Vurder om det er behov for denne. Forenklar den, eller er det like greit å skriva ul og li direkte?
export const BasicList = ({ elements }: BasicListProps) => (
  <ul className={styles.basicList}>
    {elements.map((element, index) => (
      <li className={styles.basicList__element} key={`element-${index}`}>
        {element}
      </li>
    ))}
  </ul>
);
