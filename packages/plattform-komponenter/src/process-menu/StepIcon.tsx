import React from 'react';
import classnames from 'classnames';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';

import { StepType } from './StepType';

import styles from './step.module.css';

interface StepIconProps {
  type: string;
  usePartialStatus: boolean;
  isActive: boolean;
}

export const StepIcon = ({ type, usePartialStatus, isActive }: StepIconProps) => {
  const isWarning = type === StepType.warning;
  const isDanger = type === StepType.danger;
  const isSuccess = type === StepType.success;

  const classes = classnames(`${styles.step__icon}`, {
    [styles['step__icon--active']]: isActive,
    [styles['step__icon--partial']]: usePartialStatus && (isDanger || isSuccess),
    [styles['step__icon--warning']]: isWarning,
    [styles['step__icon--success']]: isSuccess,
    [styles['step__icon--danger']]: isDanger,
  });

  if (usePartialStatus && (isDanger || isSuccess)) {
    return <div className={classes} />;
  }
  if (isSuccess) {
    return <CheckmarkIcon className={classes} />;
  }
  if (isWarning) {
    return <ExclamationmarkTriangleFillIcon className={classes} />;
  }
  if (isDanger) {
    return <XMarkOctagonFillIcon className={classes} />;
  }
  return <></>;
};
