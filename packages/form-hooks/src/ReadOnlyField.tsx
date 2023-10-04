import React, { FunctionComponent, ReactNode } from 'react';
import { BodyLong, Label } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './readOnlyField.module.css';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

export interface OwnProps {
  label?: string | ReactNode;
  isEdited?: boolean;
  value?: string | ReactNode;
  type?: string;
  hideLabel?: boolean;
}

export const ReadOnlyField: FunctionComponent<OwnProps> = ({ label, value, isEdited, type, hideLabel }) => {
  if (!hasValue(value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      {label && !hideLabel && <Label size="small">{label}</Label>}
      <div className={type === 'textarea' ? styles.textarea : ''}>
        <BodyLong className={styles.readOnlyContent}>
          {value}
          {isEdited && <EditedIcon className={styles.space} />}
        </BodyLong>
      </div>
    </div>
  );
};

ReadOnlyField.defaultProps = {
  isEdited: false,
};

export default ReadOnlyField;
