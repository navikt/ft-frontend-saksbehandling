import { type ReactNode, useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { TextField, type TextFieldProps } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

type Props<T extends FieldValues> = {
  name: string;
  label?: string | ReactNode;
  validate?: ((value: string) => ValidationReturnType)[] | ((value: number) => ValidationReturnType)[];
  readOnly?: boolean;
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
  shouldValidateOnBlur?: boolean;
  autoFocus?: boolean;
  parse?: (value: string | number) => string | number;
  format?: (value: string) => string;
  normalizeOnBlur?: (value: string | number) => string | number;
  isEdited?: boolean;
  maxLength?: number;
  autoComplete?: boolean;
  disabled?: boolean;
  type?: 'email' | 'password' | 'tel' | 'text' | 'url';
  className?: string;
  hideLabel?: boolean;
  control: UseControllerProps<T>['control'];
} & Omit<TextFieldProps, 'label' | 'autoComplete'> &
  Omit<UseControllerProps<T>, 'control'>;

export const RhfTextField = <T extends FieldValues>({
  name,
  control,
  label,
  validate = [],
  readOnly = false,
  type,
  shouldValidateOnBlur = false,
  onBlur,
  onChange,
  description,
  autoFocus,
  parse = value => value,
  format = value => value,
  normalizeOnBlur,
  isEdited,
  maxLength,
  autoComplete = false,
  disabled,
  className,
  hideLabel,
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
      <ReadOnlyField label={label} value={field.value} isEdited={isEdited} hideLabel={hideLabel} size={props.size} />
    );
  }

  return (
    <TextField
      size="small"
      hideLabel={hideLabel}
      description={description}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={field.value ? format(field.value) : ''}
      autoFocus={autoFocus}
      autoComplete={autoComplete ? undefined : 'off'}
      maxLength={maxLength}
      disabled={disabled}
      type={type}
      className={className}
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
