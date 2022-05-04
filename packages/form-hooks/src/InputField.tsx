import React, { FunctionComponent, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Input as NavInput } from 'nav-frontend-skjema';
import Label, { LabelType } from './Label';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

interface OwnProps {
  name: string;
  label?: LabelType;
  bredde?: 'fullbredde' | 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS';
  validate?: ((value: string) => any)[] | ((value: number) => any)[];
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
  shouldValidateOnBlur?: boolean;
  autoFocus?: boolean;
  parse?: (value: string | number) => string | number;
  format?: (value: string | number) => string | number;
  normalizeOnBlur?: (value: string | number) => string | number;
  isEdited?: boolean;
  maxLength?: number;
  autoComplete?: boolean;
}

const InputField: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly = false,
  bredde,
  shouldValidateOnBlur = false,
  onBlur,
  onChange,
  className,
  placeholder,
  autoFocus,
  parse = (value) => value,
  format = (value) => value,
  normalizeOnBlur,
  isEdited,
  maxLength,
  autoComplete = false,
}) => {
  const { formState: { errors }, trigger } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return <ReadOnlyField label={label} value={field.value} isEdited={isEdited} />;
  }

  return (
    <NavInput
      className={className}
      placeholder={placeholder}
      label={<Label input={label} readOnly={false} />}
      feil={getError(errors, name)}
      bredde={bredde}
      {...field}
      value={field.value ? format(field.value) : ''}
      autoFocus={autoFocus}
      autoComplete={autoComplete ? undefined : 'off'}
      maxLength={maxLength}
      onChange={(event) => {
        const verdi = event.currentTarget.value ? parse(event.currentTarget.value) : undefined;
        if (onChange) {
          onChange(verdi);
        }
        return field.onChange(verdi);
      }}
      onBlur={async (event) => {
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
          field.onChange(event?.target?.value ? normalizeOnBlur(parse(event?.target?.value)) : undefined);
        }
      }}
    />
  );
};

export default InputField;
