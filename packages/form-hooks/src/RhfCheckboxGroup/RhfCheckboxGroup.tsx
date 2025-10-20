import { type ReactElement, type ReactNode, useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Checkbox, CheckboxGroup, HStack } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

export interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

type Props<T extends FieldValues> = {
  label?: string | ReactNode;
  description?: string;
  validate?: ((values: (string | number)[]) => ValidationReturnType)[];
  onChange?: (value: any) => void;
  isReadOnly?: boolean;
  hideLegend?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
  children?: ReactElement<typeof Checkbox>[];
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfCheckboxGroup = <T extends FieldValues>({
  label,
  description,
  validate = [],
  onChange,
  isReadOnly = false,
  hideLegend = false,
  isEdited = false,
  size = 'small',
  children,
  name,
  control,
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

  const legend = (
    <HStack justify="center" gap="space-8">
      {label}
      {isReadOnly && isEdited && <EditedIcon />}
    </HStack>
  );

  return (
    <CheckboxGroup
      name={name}
      description={description}
      value={field.value !== undefined ? field.value : []}
      onChange={value => {
        if (onChange) {
          onChange(value);
        }
        field.onChange(value);
      }}
      size={size}
      legend={legend}
      error={getError(errors, name)}
      hideLegend={hideLegend}
    >
      {children}
    </CheckboxGroup>
  );
};
