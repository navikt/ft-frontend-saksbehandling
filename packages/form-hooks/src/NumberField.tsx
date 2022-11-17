import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextField as NavInput } from '@navikt/ds-react';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';
import styles from './inputField.less';

interface OwnProps {
  name: string;
  label?: string | ReactNode;
  hideLabel?: boolean;
  validate?: ((value: string) => any)[] | ((value: number) => any)[];
  readOnly?: boolean;
  description?: string;
  autoFocus?: boolean;
  isEdited?: boolean;
  minSize?: number;
  maxSize?: number;
  digitsAfterDecimalPoint?: number;
  disabled?: boolean;
  className?: string;
}

const NumberField: FunctionComponent<OwnProps> = ({
  name,
  label,
  hideLabel,
  validate = [],
  readOnly = false,
  description,
  autoFocus,
  isEdited,
  minSize,
  maxSize,
  digitsAfterDecimalPoint,
  disabled,
  className,
}) => {
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

  const navInputClassNames = `${className ?? ''} ${hideLabel ? styles.hideLabel : ''}`;

  const value = field.value !== undefined ? field.value : null;

  const formattedValue =
    digitsAfterDecimalPoint && !Number.isNaN(field.value)
      ? parseFloat(field.value).toFixed(digitsAfterDecimalPoint)
      : value;

  // eslint-disable-next-line prefer-regex-literals
  const validNumber = new RegExp(/^\d*\.?\d*$/);

  return (
    <NavInput
      size="small"
      description={description}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={hasFocus ? value : formattedValue}
      autoFocus={autoFocus}
      autoComplete="off"
      min={minSize}
      max={maxSize}
      disabled={disabled}
      type="number"
      className={navInputClassNames}
      onChange={event => {
        if (validNumber.test(event.currentTarget.value)) {
          setFocus(true);
          const verdi = parseFloat(event.currentTarget.value) || null;
          return field.onChange(verdi);
        }
        return field.onChange(field.value);
      }}
      onBlur={() => {
        setFocus(false);
        field.onBlur();
        if (digitsAfterDecimalPoint && field.value !== '' && !Number.isNaN(field.value)) {
          const numberParts = field.value.toString().split('.');
          if (numberParts.length > 1 && numberParts[1].length > digitsAfterDecimalPoint) {
            field.onChange(parseFloat(field.value.toFixed(digitsAfterDecimalPoint)));
          }
        }
      }}
    />
  );
};

export default NumberField;
