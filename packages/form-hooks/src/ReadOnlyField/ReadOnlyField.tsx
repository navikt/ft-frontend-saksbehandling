import React, { ReactNode } from 'react';
import { BodyLong, Label } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './readOnlyField.module.css';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

export interface Props {
  label?: string | ReactNode;
  isEdited?: boolean;
  value?: string | ReactNode;
  type?: string;
  hideLabel?: boolean;
  size?: 'medium' | 'small';
}

export const ReadOnlyField = ({ label, value, isEdited = false, type, hideLabel, size }: Props) => {
  if (!hasValue(value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      {label && !hideLabel && <Label size="small">{label}</Label>}
      <div className={type === 'textarea' ? styles.textarea : ''}>
        <BodyLong className={styles.readOnlyContent} size={size}>
          {value}
          {isEdited && <EditedIcon className={styles.space} />}
        </BodyLong>
      </div>
    </div>
  );
};
