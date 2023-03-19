import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@navikt/ds-react';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';
import styles from './inputField.module.css';

interface OwnProps extends Omit<TextFieldProps, 'label' | 'autoComplete'> {
  name: string;
  label?: string | ReactNode;
  validate?: ((value: string) => any)[] | ((value: number) => any)[];
  readOnly?: boolean;
  description?: string;
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
}

const InputField: FunctionComponent<OwnProps> = ({
  name,
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
}) => {
  const {
    formState: { errors },
    trigger,
  } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return <ReadOnlyField label={label} value={field.value} isEdited={isEdited} hideLabel={hideLabel} />;
  }

  const navInputClassNames = `${className ?? ''} ${hideLabel ? styles.hideLabel : ''}`;

  return (
    <TextField
      size="small"
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
      className={navInputClassNames}
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

export default InputField;
