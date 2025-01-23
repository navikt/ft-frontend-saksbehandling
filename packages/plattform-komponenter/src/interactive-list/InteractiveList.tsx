import classnames from 'classnames';
import React from 'react';
import { ChevronIconBlack } from '../icons/ChevronIconBlack';
import { ChevronIconGray } from '../icons/ChevronIconGray';
import styles from './interactiveList.module.css';

export interface InteractiveListElement {
  content: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

interface InteractiveListProps {
  elements: Array<InteractiveListElement & { key?: string }>;
}

const InteractiveListElement = (props: InteractiveListElement) => {
  const { content, active, onClick } = props;
  const cls = classnames(styles.interactiveListElement, {
    [styles['interactiveListElement--active']]: active,
    [styles['interactiveListElement--inactive']]: !active,
  });

  return (
    <li className={cls}>
      <button className={styles.interactiveListElement__button} type="button" onClick={onClick}>
        <span className={styles.interactiveListElement__button__contentContainer}>
          {content}
          <span className={styles.interactiveListElement__chevron}>
            {active ? <ChevronIconBlack /> : <ChevronIconGray />}
          </span>
        </span>
      </button>
    </li>
  );
};

export const InteractiveList = ({ elements }: InteractiveListProps) => (
  <ul className={styles.interactiveList}>
    {elements.map((elementProps, index) => {
      const { key, ...rest } = elementProps;
      return <InteractiveListElement key={key ?? index} {...rest} />;
    })}
  </ul>
);
