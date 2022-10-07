import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import classnames from 'classnames';
import { BodyShort } from '@navikt/ds-react';
import StepIcon from './StepIcon';
import StepType from './StepType';
import styles from './step.less';

export interface StepProps {
  label: string;
  isFinished?: boolean;
  usePartialStatus?: boolean;
  isActive?: boolean;
  type?: StepType;
  onClick?: (index: number) => void;
}

interface ComponentProps {
  index: number;
}

const stepCls = bemUtils('step');

// eslint-disable-next-line react/display-name
export const Step = React.memo(
  ({
    label,
    index,
    isActive,
    onClick,
    isFinished,
    type = StepType.default,
    usePartialStatus,
  }: StepProps & ComponentProps): JSX.Element => {
    const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      if (onClick) {
        onClick(index);
      }
    };

    const stepIndicatorCls = classnames(
      `${styles[stepCls.element('indicator')]} ${styles[`step__indicator--${type}`]}`,
      {
        [styles['step__indicator--active']]: isActive,
        [styles['step__indicator--partial']]: usePartialStatus,
      },
    );

    return (
      <li
        key={label.split(' ').join('')}
        className={styles[stepCls.block]}
        aria-current={isActive ? 'step' : undefined}
      >
        <button
          className={
            isActive
              ? `${styles[stepCls.element('button')]} ${styles['step__button--active']}`
              : styles[stepCls.element('button')]
          }
          type="button"
          onClick={handleButtonClick}
          data-tooltip={label}
        >
          <span className={styles[stepCls.element('text-icon-container')]}>
            <StepIcon type={type} isFinished={isFinished} usePartialStatus={usePartialStatus} />
            <BodyShort size="small" as="span">
              {label}
            </BodyShort>
          </span>
          <span className={stepIndicatorCls} />
        </button>
        {isActive && (
          <div className={`${styles[stepCls.element('arrow-container')]} step__arrow-container`}>
            <div className={`${styles[stepCls.element('arrow')]} step__arrow`} />
          </div>
        )}
      </li>
    );
  },
);
export default Step;
