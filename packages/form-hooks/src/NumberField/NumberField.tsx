import React, { ReactNode, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextField } from '@navikt/ds-react';
import ReadOnlyField from '../ReadOnlyField/ReadOnlyField';
import { getError, getValidationRules } from '../formUtils';

const TWO_DECIMALS_REGEXP = /^(\d+[,]?(\d{1,2})?)$/;
const DECIMAL_REGEXP = /^(\d{1,20}[,.]?(\d{1,10})?)$/;

export interface Props {
  name: string;
  label?: string | ReactNode;
  hideLabel?: boolean;
  validate?: ((value: string) => any)[] | ((value: number) => any)[];
  readOnly?: boolean;
  description?: string;
  autoFocus?: boolean;
  isEdited?: boolean;
  forceTwoDecimalDigits?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: any) => void;
}

const NumberField = ({
  name,
  label,
  hideLabel,
  validate = [],
  readOnly = false,
  description,
  autoFocus,
  isEdited,
  forceTwoDecimalDigits = false,
  disabled,
  className,
  onChange,
}: Props) => {
  const [hasFocus, setFocus] = useState(false);

  const {
    formState: { errors },
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

  const regex = forceTwoDecimalDigits ? TWO_DECIMALS_REGEXP : DECIMAL_REGEXP;

  const value = field.value !== undefined && field.value !== null ? field.value.toString() : '';
  const formattedValue =
    !hasFocus && forceTwoDecimalDigits && value !== '' && !Number.isNaN(value) ? parseFloat(value).toFixed(2) : value;

  return (
    <TextField
      size="small"
      description={description}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={formattedValue.replace('.', ',')}
      autoFocus={autoFocus}
      autoComplete="off"
      disabled={disabled}
      type="text"
      hideLabel={hideLabel}
      inputMode="decimal"
      className={className}
      onChange={event => {
        setFocus(true);
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
        return field.onChange(newValue);
      }}
      onBlur={() => {
        setFocus(false);
        field.onBlur();

        if (forceTwoDecimalDigits && value.slice(-1) === '.') {
          field.onChange(value + 0);
        }
      }}
    />
  );
};

export default NumberField;
