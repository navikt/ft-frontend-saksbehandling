import React, { FunctionComponent, ReactElement, ReactNode, useMemo } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { CheckboxGroup, Checkbox, HStack } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';
import { getError, getValidationRules } from './formUtils';

interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

interface CheckboxPanelProps {
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
}

const CheckboxPanel: FunctionComponent<CheckboxPanelProps> = ({
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

  return (
    <>
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
        size="small"
        legend={label}
        error={getError(errors, name)}
        hideLegend={hideLegend}
      >
        {!isHorizontal &&
          checkboxes
            .filter(checkbox => !isReadOnly || field.value === parse(checkbox.value))
            .map(checkbox => (
              <Checkbox
                key={checkbox.value}
                value={parse(checkbox.value)}
                disabled={checkbox.disabled || disabled || isReadOnly}
              >
                {checkbox.label}
              </Checkbox>
            ))}
        {isHorizontal && (
          <HStack gap="4">
            {checkboxes
              .filter(checkbox => !isReadOnly || field.value === parse(checkbox.value))
              .map(checkbox => (
                <Checkbox
                  key={checkbox.value}
                  value={parse(checkbox.value)}
                  disabled={checkbox.disabled || disabled || isReadOnly}
                >
                  {checkbox.label}
                </Checkbox>
              ))}
          </HStack>
        )}
      </CheckboxGroup>
      {isReadOnly && isEdited && <EditedIcon />}
    </>
  );
};

export default CheckboxPanel;
