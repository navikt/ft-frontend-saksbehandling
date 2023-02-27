import React, { Fragment, FunctionComponent, ReactElement, ReactNode, useMemo } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { CheckboxGroup, Checkbox } from '@navikt/ds-react';
import { FlexContainer, FlexColumn, FlexRow, EditedIcon } from '@navikt/ft-ui-komponenter';
import { getError, getValidationRules } from './formUtils';
import styles from './radioGroupPanel.module.css';

interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

interface CheckboxPanelProps {
  name: string;
  label?: string | ReactNode;
  checkboxes: CheckboxProps[];
  validate?: ((value: string | number) => any)[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
  hideLegend?: boolean;
  hideRadioLabels?: boolean;
  isEdited?: boolean;
}

const CheckboxPanel: FunctionComponent<CheckboxPanelProps> = ({
  label,
  name,
  validate = [],
  checkboxes,
  onChange,
  disabled = false,
  isReadOnly = false,
  isHorizontal = false,
  parse = value => value,
  hideLegend = false,
  hideRadioLabels = false,
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
        className={hideRadioLabels ? styles.hideRadioLabels : ''}
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
          <FlexContainer>
            <FlexRow>
              {checkboxes
                .filter(checkbox => !isReadOnly || field.value === parse(checkbox.value))
                .map(checkbox => (
                  <FlexColumn key={checkbox.value}>
                    <Checkbox value={parse(checkbox.value)} disabled={checkbox.disabled || disabled || isReadOnly}>
                      {checkbox.label}
                    </Checkbox>
                  </FlexColumn>
                ))}
            </FlexRow>
          </FlexContainer>
        )}
      </CheckboxGroup>
      {isReadOnly && isEdited && <EditedIcon />}
    </>
  );
};

export default CheckboxPanel;
