import React, { FunctionComponent, ReactNode, useMemo } from 'react';
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

  return (
    <NavInput
      size="small"
      description={description}
      label={label}
      error={getError(errors, name)}
      {...field}
      value={field.value !== undefined ? field.value : ''}
      autoFocus={autoFocus}
      autoComplete="off"
      min={minSize}
      max={maxSize}
      disabled={disabled}
      type="number"
      className={navInputClassNames}
      onBlur={() => {
        field.onBlur();
        if (digitsAfterDecimalPoint && field.value !== '' && !Number.isNaN(field.value)) {
          field.onChange(parseFloat(field.value).toFixed(digitsAfterDecimalPoint));
        }
      }}
    />
  );
};

export default NumberField;
