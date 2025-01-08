import { Select as NavSelect } from '@navikt/ds-react';
import React, { ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import ReadOnlyField from '../ReadOnlyField/ReadOnlyField';
import { getError, getValidationRules } from '../formUtils';

export interface Props {
  name: string;
  label: string | ReactNode;
  onChange?: (event: any) => void;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  selectValues: React.ReactElement<any>[];
  description?: ReactNode;
  hideValueOnDisable?: boolean;
  disabled?: boolean;
  className?: string;
  hideLabel?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
}

const SelectField = ({
  name,
  label,
  selectValues,
  validate = [],
  readOnly = false,
  description,
  hideValueOnDisable = false,
  onChange,
  disabled,
  className,
  hideLabel,
  isEdited,
  size,
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

  if (readOnly) {
    const option = selectValues.map(sv => sv.props).find(o => o.value === field.value);
    const value = option ? option.children : undefined;
    return <ReadOnlyField value={value} label={label} hideLabel={hideLabel} isEdited={isEdited} size={size} />;
  }

  const n = field.value || '';
  const noCorrespondingOptionFound = !selectValues.map(option => option.props.value).includes(n) && n !== '';
  if (noCorrespondingOptionFound) {
    // eslint-disable-next-line no-console
    console.warn(`No corresponding option found for value '${n}'`); // NOSONAR Viser ikke sensitiv info
  }

  return (
    <NavSelect
      size="small"
      className={className}
      error={getError(errors, name)}
      label={label}
      description={description}
      value={(hideValueOnDisable && disabled) || noCorrespondingOptionFound ? '' : field.value}
      disabled={disabled}
      onChange={evt => {
        if (onChange) {
          onChange(evt);
        }
        field.onChange(evt);
      }}
      hideLabel={hideLabel}
    >
      <option style={{ display: 'none' }} />,{selectValues}
    </NavSelect>
  );
};

export default SelectField;
