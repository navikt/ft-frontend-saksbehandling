import { bemUtils } from '@navikt/ft-utils';
import classnames from 'classnames';
import React from 'react';
import StepType from './StepType';
import AvslåttValgIcon from './icons/AvslåttIcon';
import CheckIcon from './icons/CheckIcon';
import WarningIcon from './icons/WarningIcon';
import styles from './step.module.css';

interface StepIconProps {
  type: string;
  isFinished?: boolean;
  usePartialStatus?: boolean;
}

const stepCls = bemUtils('step');

const StepIcon = ({ type, isFinished, usePartialStatus }: StepIconProps): JSX.Element => {
  const isWarning = type === StepType.warning;
  const isDanger = type === StepType.danger;

  if (usePartialStatus && !isWarning) {
    return (
      <div
        className={classnames(`${styles[stepCls.element('icon')]} ${styles['step__icon--partial']}`, {
          [styles['step__icon--success']]: !isDanger,
          [styles['step__icon--danger']]: isDanger,
        })}
      />
    );
  }
  if (isFinished) {
    return <CheckIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--success']}`} />;
  }
  if (isWarning) {
    return <WarningIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--warning']} `} />;
  }
  if (isDanger) {
    return <AvslåttValgIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--danger']}`} />;
  }
  return <span className={styles[stepCls.element('icon-placeholder')]} />;
};

export default StepIcon;
