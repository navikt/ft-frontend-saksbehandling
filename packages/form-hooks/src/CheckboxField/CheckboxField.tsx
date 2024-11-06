import React, { ReactNode, useMemo } from 'react';
import { Checkbox as NavCheckbox, ErrorMessage } from '@navikt/ds-react';
import { useController, useFormContext } from 'react-hook-form';

import { getError, getValidationRules } from '../formUtils';

export interface Props {
  name: string;
  label: string | ReactNode;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  onChange?: (isChecked: boolean) => void;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CheckboxField = ({
  name,
  label,
  validate = [],
  readOnly = false,
  onChange,
  onClick,
  className,
  disabled,
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  const error = getError(errors, name);

  return (
    <>
      <NavCheckbox
        size="small"
        disabled={disabled || readOnly}
        checked={field.value === true}
        className={className}
        error={!!error}
        {...field}
        onChange={event => {
          field.onChange(event);
          if (onChange) {
            onChange(event.currentTarget.checked);
          }
        }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {label}
      </NavCheckbox>
      {error && <ErrorMessage>{getError(errors, name)}</ErrorMessage>}
    </>
  );
};

export default CheckboxField;
