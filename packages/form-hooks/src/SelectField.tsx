import React, { useMemo, FunctionComponent, ReactNode } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Select as NavSelect } from '@navikt/ds-react';

import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

interface OwnProps {
  name: string;
  label: string | ReactNode;
  onClick?: (event: any) => void;
  onChange?: (event: any) => void;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  selectValues: React.ReactElement[];
  placeholder?: string;
  description?: ReactNode;
  hideValueOnDisable?: boolean;
  disabled?: boolean;
  className?: string;
}

const SelectField: FunctionComponent<OwnProps> = ({
  name,
  label,
  selectValues,
  validate = [],
  readOnly = false,
  placeholder,
  description,
  hideValueOnDisable = false,
  onChange,
  disabled,
  className,
  ...otherProps
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
    const option = selectValues.map(sv => sv.props).find(o => o.value === field.value);
    const value = option ? option.children : undefined;
    return <ReadOnlyField value={value} {...otherProps} />;
  }

  return (
    <NavSelect
      size="small"
      className={className}
      error={getError(errors, name)}
      label={label}
      description={description}
      value={hideValueOnDisable && disabled ? '' : field.value}
      disabled={disabled}
      onChange={evt => {
        if (onChange) {
          onChange(evt);
        }
        field.onChange(evt);
      }}
    >
      {placeholder && (
        <option selected disabled>
          {placeholder}
        </option>
      )}
      {!placeholder && <option style={{ display: 'none' }} />},{selectValues}
    </NavSelect>
  );
};

export default SelectField;
