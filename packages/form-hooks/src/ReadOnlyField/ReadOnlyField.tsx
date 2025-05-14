import React, { ReactNode } from 'react';

import { BodyLong, HStack, Label, VStack } from '@navikt/ds-react';

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
    <VStack gap="1">
      {label && !hideLabel && <Label size={size}>{label}</Label>}
      <HStack gap="2" align="center" wrap={false}>
        <div className={type === 'textarea' ? styles.textarea : ''}>
          <BodyLong size={size} style={{ whiteSpace: 'pre-line' }}>
            {value}
          </BodyLong>
        </div>
        {isEdited && <EditedIcon />}
      </HStack>
    </VStack>
  );
};
