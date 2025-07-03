import { Fragment, ReactElement, ReactNode, useMemo } from 'react';
import { FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';

import { Checkbox, CheckboxGroup, HStack } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, ValidationReturnType } from '../formUtils';

export interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

type Props<T extends FieldValues> = {
  label?: string | ReactNode;
  description?: string;
  validate?: ((value: string | number) => ValidationReturnType)[];
  onChange?: (value: any) => void;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
  hideLegend?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
  checkboxes?: CheckboxProps[];
  children?: ReactElement<typeof Checkbox>[];
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfCheckboxGroup = <T extends FieldValues>({
  label,
  description,
  validate = [],
  checkboxes,
  onChange,
  isReadOnly = false,
  isHorizontal = false,
  parse = value => value,
  hideLegend = false,
  isEdited = false,
  size = 'small',
  children,
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

  const legend = (
    <HStack justify="center" gap="2">
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
      {checkboxes &&
        !isHorizontal &&
        checkboxes.map(checkbox => (
          <Fragment key={checkbox.value}>
            <Checkbox size={size} value={parse(checkbox.value)} disabled={checkbox.disabled || disabled || isReadOnly}>
              {checkbox.label}
            </Checkbox>
            {(field.value ?? []).some(v => v === parse(checkbox.value)) && checkbox.element}
          </Fragment>
        ))}
      {checkboxes && isHorizontal && (
        <>
          <HStack gap="4">
            {checkboxes.map(checkbox => (
              <Checkbox
                key={checkbox.value}
                size={size}
                value={parse(checkbox.value)}
                disabled={checkbox.disabled || disabled || isReadOnly}
              >
                {checkbox.label}
              </Checkbox>
            ))}
          </HStack>
          {checkboxes
            .filter(checkbox => (field.value ?? []).some(v => v === parse(checkbox.value)))
            .map(checkbox => (
              <Fragment key={checkbox.value}>{checkbox.element}</Fragment>
            ))}
        </>
      )}
    </CheckboxGroup>
  );
};
