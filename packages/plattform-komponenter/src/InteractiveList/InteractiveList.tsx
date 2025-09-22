import React from 'react';

import { ChevronRightIcon } from '@navikt/aksel-icons';
import classnames from 'classnames';

import styles from './interactiveList.module.css';

interface InteractiveListElement {
  content: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

interface InteractiveListProps {
  elements: Array<InteractiveListElement & { key?: string }>;
}

// TODO (TOR) Kan denne erstattast med noko i Aksel?
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
            {active ? (
              <ChevronRightIcon aria-disabled fontSize="1.5rem" />
            ) : (
              <ChevronRightIcon aria-disabled fontSize="1.5rem" color="var(--ax-neutral-400)" />
            )}
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
