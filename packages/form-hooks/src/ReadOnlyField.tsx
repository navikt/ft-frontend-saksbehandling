import React, { FunctionComponent, ReactNode } from 'react';
import { BodyLong, Label } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './readOnlyField.less';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

interface OwnProps {
  label?: string | ReactNode;
  isEdited?: boolean;
  value?: string;
  type?: string;
}

export const ReadOnlyField: FunctionComponent<OwnProps> = ({ label, value, isEdited, type }) => {
  if (!hasValue(value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      <Label>{label}</Label>
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
