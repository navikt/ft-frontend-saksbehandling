import {
  CheckmarkIcon,
  ExclamationmarkTriangleFillIcon,
  PadlockLockedFillIcon,
  XMarkOctagonFillIcon,
} from '@navikt/aksel-icons';

import { StepType } from './StepType';

import styles from './step.module.css';

interface StepIconProps {
  type: string;
  usePartialStatus: boolean;
  locked?: boolean;
}

export const StepIcon = ({ type, usePartialStatus, locked }: StepIconProps) => {
  const isWarning = type === StepType.warning;
  const isDanger = type === StepType.danger;
  const isSuccess = type === StepType.success;

  const classes = styles.icon;

  if (locked) {
    return <PadlockLockedFillIcon className={styles.lockedIcon} title="Låst for saksbehandling" />;
  }

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
