import React from 'react';

import classnames from 'classnames';
import { Detail, Tooltip } from '@navikt/ds-react';

import { StepIcon } from './StepIcon';
import { StepType } from './StepType';

import styles from './step.module.css';

export interface StepProps {
  label: string;
  usePartialStatus?: boolean;
  isActive?: boolean;
  type?: StepType;
  onClick?: (index: number) => void;
}

interface ComponentProps {
  index: number;
  stepArrowContainerStyle?: string;
}

export const Step = ({
  label,
  index,
  type = StepType.default,
  isActive = false,
  usePartialStatus = false,
  onClick,
  stepArrowContainerStyle,
}: StepProps & ComponentProps) => {
  const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (onClick) {
      onClick(index);
    }
  };

  const stepIndicatorCls = classnames(`${styles.step__button} ${styles[type]}`, {
    [styles['active']]: isActive,
    [styles['partial']]: usePartialStatus,
  });

  return (
    <li key={label} className={styles.step} aria-current={isActive ? 'step' : undefined}>
      <Tooltip content={label} placement="bottom">
        <button className={stepIndicatorCls} type="button" onClick={handleButtonClick}>
          <StepIcon type={type} usePartialStatus={usePartialStatus} />
          <Detail as="span" className={styles.step__text}>
            {label}
          </Detail>
        </button>
      </Tooltip>
      {isActive && <div className={classnames(stepArrowContainerStyle, `${styles['step__arrow-container']}`)} />}
    </li>
  );
};
