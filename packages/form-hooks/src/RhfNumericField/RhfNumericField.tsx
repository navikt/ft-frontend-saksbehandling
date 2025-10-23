import { useMemo, useState } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { TextField, type TextFieldProps } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

const TWO_DECIMALS_REGEXP = /^(\d+[,]?(\d{1,2})?)$/;
const DECIMAL_REGEXP = /^(\d{1,20}[,.]?(\d{1,10})?)$/;

type Props<T extends FieldValues> = {
  validate?: ((value: string) => ValidationReturnType)[] | ((value: number) => ValidationReturnType)[];
  autoFocus?: boolean;
  isEdited?: boolean;
  forceTwoDecimalDigits?: boolean;
  returnAsNumber?: boolean;
  onChange?: (value: any) => void;
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'> &
  Omit<TextFieldProps, 'value' | 'defaultValue' | 'type' | 'inputMode' | 'onChange'>;

export const RhfNumericField = <T extends FieldValues>({
  label,
  hideLabel,
  validate = [],
  readOnly = false,
  description,
  isEdited,
  forceTwoDecimalDigits = false,
  returnAsNumber = false,
  onChange,
  autoComplete = 'off',
  size = 'small',
  name,
  control,
  disabled,
  ...rest
}: Props<T>) => {
  const [hasFocus, setHasFocus] = useState(false);

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
    return <ReadOnlyField label={label} value={field.value} isEdited={isEdited} hideLabel={hideLabel} size={size} />;
  }

  const regex = forceTwoDecimalDigits ? TWO_DECIMALS_REGEXP : DECIMAL_REGEXP;

  const value = field.value !== undefined && field.value !== null ? field.value.toString() : '';
  const formattedValue =
    !hasFocus && forceTwoDecimalDigits && value !== '' && !Number.isNaN(value) ? parseFloat(value).toFixed(2) : value;

  return (
    <TextField
      size={size}
      description={description}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={formattedValue.replace('.', ',')}
      autoComplete={autoComplete}
      disabled={disabled}
      type="text"
      hideLabel={hideLabel}
      inputMode="decimal"
      onChange={event => {
        setHasFocus(true);
        const targetValue = event.currentTarget.value;
        let newValue;
        if (targetValue === '') {
          newValue = null;
        } else if (regex.test(targetValue)) {
          newValue = targetValue.replace(',', '.');
        } else {
          newValue = field.value;
        }

        if (onChange) {
          onChange(newValue);
        }

        if (newValue && returnAsNumber) {
          newValue = parseFloat(newValue);
          if (Number.isNaN(newValue)) newValue = null;
        }

        return field.onChange(newValue);
      }}
      onBlur={() => {
        setHasFocus(false);
        field.onBlur();

        if (forceTwoDecimalDigits && value.slice(-1) === '.') {
          field.onChange(value + 0);
        }
      }}
      {...rest}
    />
  );
};
