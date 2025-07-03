import React, { ReactNode, useMemo } from 'react';
import { FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';

import { Select } from '@navikt/ds-react';

import { getError, getValidationRules, ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

type Props<T extends FieldValues> = {
  label: string | ReactNode;
  onChange?: (event: any) => void;
  validate?: ((value: string) => ValidationReturnType)[];
  readOnly?: boolean;
  selectValues: React.ReactElement<any>[];
  description?: ReactNode;
  hideValueOnDisable?: boolean;
  className?: string;
  hideLabel?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfSelect = <T extends FieldValues>({
  label,
  selectValues,
  validate = [],
  readOnly = false,
  description,
  hideValueOnDisable = false,
  onChange,
  className,
  hideLabel,
  isEdited,
  size,
  ...controllerProps
}: Props<T>) => {
  const { name, control, disabled } = controllerProps;

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
    </Select>
  );
};
