import { type ReactNode } from 'react';

import { BodyLong, HStack, Label, VStack } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './readOnlyField.module.css';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

interface Props {
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
    <VStack gap="space-4">
      {label && !hideLabel && <Label size={size}>{label}</Label>}
      <HStack gap="space-8" align="center" wrap={false}>
        <BodyLong className={type === 'textarea' ? styles.textarea : styles.readOnlyField} size={size}>
          {value}
        </BodyLong>
        {isEdited && <EditedIcon />}
      </HStack>
    </VStack>
  );
};
