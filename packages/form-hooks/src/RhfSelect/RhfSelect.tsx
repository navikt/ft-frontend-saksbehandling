import React, { useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Select, type SelectProps } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

type Props<T extends FieldValues> = {
  isEdited?: boolean;
  onChange?: (event: any) => void;
  validate?: ((value: string) => ValidationReturnType)[];
  selectValues: React.ReactElement<any>[];
  hideValueOnDisable?: boolean;
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'> &
  Omit<SelectProps, 'children' | 'value' | 'defaultValue' | 'onChange'>;

export const RhfSelect = <T extends FieldValues>({
  label,
  selectValues,
  validate = [],
  readOnly = false,
  hideValueOnDisable = false,
  onChange,
  hideLabel,
  isEdited,
  size = 'small',
  name,
  control,
  disabled,
  ...rest
}: Props<T>) => {
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
    <Select
      size={size}
      error={getError(errors, name)}
      label={label}
      value={(hideValueOnDisable && disabled) || noCorrespondingOptionFound ? '' : field.value}
      onChange={evt => {
        if (onChange) {
          onChange(evt);
        }
        field.onChange(evt);
      }}
      hideLabel={hideLabel}
      {...rest}
    >
      <option style={{ display: 'none' }} />
      {selectValues}
    </Select>
  );
};
