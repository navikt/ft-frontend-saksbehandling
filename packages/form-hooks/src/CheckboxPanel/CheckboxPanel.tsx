import { Fragment, ReactElement, ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Checkbox, CheckboxGroup, HStack } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules } from '../formUtils';

export interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

export interface CheckboxPanelProps {
  name: string;
  label?: string | ReactNode;
  description?: string;
  checkboxes: CheckboxProps[];
  validate?: ((value: string | number) => any)[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
  hideLegend?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
}

export const CheckboxPanel = ({
  label,
  name,
  description,
  validate = [],
  checkboxes,
  onChange,
  disabled = false,
  isReadOnly = false,
  isHorizontal = false,
  parse = value => value,
  hideLegend = false,
  isEdited = false,
  size = 'small',
}: CheckboxPanelProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    name,
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
      {!isHorizontal &&
        checkboxes.map(checkbox => (
          <Fragment key={checkbox.value}>
            <Checkbox size={size} value={parse(checkbox.value)} disabled={checkbox.disabled || disabled || isReadOnly}>
              {checkbox.label}
            </Checkbox>
            {(field.value ?? []).includes(parse(checkbox.value)) && checkbox.element}
          </Fragment>
        ))}
      {isHorizontal && (
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
            .filter(checkbox => (field.value ?? []).includes(parse(checkbox.value)))
            .map(checkbox => (
              <Fragment key={checkbox.value}>{checkbox.element}</Fragment>
            ))}
        </>
      )}
    </CheckboxGroup>
  );
};
