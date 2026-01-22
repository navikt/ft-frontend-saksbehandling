import { type ReactNode, useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { TextField, type TextFieldProps } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

import styles from './rhfTextField.module.css';

type Props<T extends FieldValues> = {
  name: string;
  label?: ReactNode;
  type?: 'email' | 'password' | 'tel' | 'text' | 'url';
  isEdited?: boolean;
  validate?: ((value: string) => ValidationReturnType)[] | ((value: number) => ValidationReturnType)[];
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
  shouldValidateOnBlur?: boolean;
  autoFocus?: boolean;
  parse?: (value: string | number) => string | number;
  format?: (value: string) => string;
  normalizeOnBlur?: (value: string | number) => string | number;
  control: UseControllerProps<T>['control'];
  align?: 'left' | 'right';
} & Omit<TextFieldProps, 'value' | 'defaultValue' | 'onChange' | 'label'> &
  Omit<UseControllerProps<T>, 'control'>;

export const RhfTextField = <T extends FieldValues>({
  name,
  control,
  label,
  hideLabel,
  validate = [],
  readOnly,
  type,
  shouldValidateOnBlur = false,
  onBlur,
  onChange,
  parse = value => value,
  format = value => value,
  normalizeOnBlur,
  isEdited,
  autoComplete = 'off',
  size = 'small',
  align,
  ...props
}: Props<T>) => {
  const {
    formState: { errors },
    trigger,
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
        label={label}
        value={field.value}
        isEdited={isEdited}
        hideLabel={hideLabel}
        size={size}
        align={align}
      />
    );
  }

  return (
    <TextField
      className={align === 'right' ? styles.alignRight : undefined}
      size={size}
      hideLabel={hideLabel}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={field.value ? format(field.value) : ''}
      autoComplete={autoComplete}
      type={type}
      onChange={event => {
        const verdi = event.currentTarget.value ? parse(event.currentTarget.value) : null;
        if (onChange) {
          onChange(verdi);
        }
        return field.onChange(verdi);
      }}
      onBlur={async event => {
        field.onBlur();
        if (shouldValidateOnBlur) {
          const isValidationOk = await trigger();
          if (onBlur && isValidationOk) {
            onBlur(event?.target?.value);
          }
        } else if (onBlur) {
          onBlur(event?.target?.value);
        }
        if (normalizeOnBlur) {
          field.onChange(event?.target?.value ? normalizeOnBlur(parse(event?.target?.value)) : null);
        }
      }}
      {...props}
    />
  );
};
