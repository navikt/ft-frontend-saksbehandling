import React from 'react';
import classnames from 'classnames';

import { CheckmarkIcon, ExclamationmarkIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';

import { StepType } from './StepType';

import styles from './step.module.css';

interface StepIconProps {
  type: string;
  usePartialStatus: boolean;
}

export const StepIcon = ({ type, usePartialStatus }: StepIconProps) => {
  const isWarning = type === StepType.warning;
  const isDanger = type === StepType.danger;
  const isSuccess = type === StepType.success;

  if (usePartialStatus && (isDanger || isSuccess)) {
    return (
      <div
        className={classnames(`${styles.step__icon} ${styles['step__icon--partial']}`, {
          [styles['step__icon--success']]: isSuccess,
          [styles['step__icon--danger']]: isDanger,
        })}
      />
    );
  }

  if (isSuccess) {
    return <CheckmarkIcon className={styles.step__icon} />;
  }
  if (isWarning) {
    return <ExclamationmarkIcon className={styles.step__icon} />;
  }
  if (isDanger) {
    return <XMarkOctagonFillIcon className={`${styles.step__icon} ${styles['step__icon--danger']}`} />;
  }
  return <></>;
};
