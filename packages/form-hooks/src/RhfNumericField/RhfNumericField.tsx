import { useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { TextField, type TextFieldProps } from '@navikt/ds-react';

import { sanitizeNumericString } from '@navikt/ft-utils';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

import styles from './rhfNumericField.module.css';

type Props<T extends FieldValues> = {
  validate?: ((value: any) => ValidationReturnType)[];
  isEdited?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  align?: 'left' | 'right';
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'> &
  Omit<TextFieldProps, 'value' | 'defaultValue' | 'type' | 'inputMode'>;

export const RhfNumericField = <T extends FieldValues>({
  label,
  hideLabel,
  validate = [],
  readOnly,
  description,
  isEdited,
  onChange,
  onBlur,
  size = 'small',
  align,
  name,
  control,
  disabled,
  autoFocus,
  maxLength,
  ...rest
}: Props<T>) => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    name,
    control,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return (
      <ReadOnlyField
        align={align}
        label={label}
        value={field.value}
        isEdited={isEdited}
        hideLabel={hideLabel}
        size={size}
      />
    );
  }

  return (
    <TextField
      label={label}
      description={description}
      type="number"
      inputMode="decimal"
      error={getError(errors, name)}
      autoFocus={autoFocus}
      autoComplete="off"
      maxLength={maxLength}
      disabled={disabled}
      size={size}
      className={align === 'right' ? styles.alignRight : undefined}
      {...field}
      value={field.value ?? ''}
      onBlur={event => {
        field.onBlur();
        onBlur?.(event.currentTarget.value);
      }}
      onChange={event => {
        const raw = event.currentTarget.value;
        const value = raw === '' ? null : Number(raw);
        field.onChange(Number.isNaN(value) ? null : value);
        onChange?.(raw);
      }}
      onPaste={event => {
        const text = event.clipboardData.getData('text');
        const normalized = sanitizeNumericString(text);
        const num = normalized === '' ? null : Number(normalized);
        if (num === null || !Number.isNaN(num)) {
          event.preventDefault();
          field.onChange(num);
          onChange?.(normalized);
        }
      }}
      {...rest}
    />
  );
};
