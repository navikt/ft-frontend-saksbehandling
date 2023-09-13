import React, { Fragment, FunctionComponent, ReactElement, ReactNode, useMemo } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { RadioGroup, Radio, HStack } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';
import { getError, getValidationRules } from './formUtils';
import styles from './radioGroupPanel.module.css';

interface RadioProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

interface RadioGroupPanelProps {
  name: string;
  description?: string;
  label?: string | ReactNode;
  radios: RadioProps[];
  validate?: ((value: string | number) => any)[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
  isTrueOrFalseSelection?: boolean;
  hideLegend?: boolean;
  hideRadioLabels?: boolean;
  isEdited?: boolean;
}

const RadioGroupPanel: FunctionComponent<RadioGroupPanelProps> = ({
  label,
  description,
  name,
  validate = [],
  radios,
  onChange,
  disabled = false,
  isReadOnly = false,
  isHorizontal = false,
  parse = value => value,
  isTrueOrFalseSelection = false,
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

  const parseValue = isTrueOrFalseSelection ? (value: string) => value === 'true' : parse;

  const legend =
    isReadOnly && isEdited ? (
      <>
        {label} <EditedIcon />
      </>
    ) : (
      label
    );

  return (
    <RadioGroup
      name={name}
      value={field.value !== undefined ? field.value : null}
      onChange={value => {
        if (onChange) {
          onChange(value);
        }
        field.onChange(value);
      }}
      size="small"
      legend={legend}
      description={description}
      error={getError(errors, name)}
      className={hideRadioLabels ? styles.hideRadioLabels : ''}
      hideLegend={hideLegend}
    >
      {!isHorizontal &&
        radios
          .filter(radio => !isReadOnly || field.value === parseValue(radio.value))
          .map(radio => (
            <Fragment key={radio.value}>
              <Radio value={parseValue(radio.value)} disabled={radio.disabled || disabled || isReadOnly}>
                {radio.label}
              </Radio>
              {field.value === parseValue(radio.value) && radio.element}
            </Fragment>
          ))}
      {isHorizontal && (
        <HStack gap="4">
          {radios
            .filter(radio => !isReadOnly || field.value === parseValue(radio.value))
            .map(radio => (
              <div key={radio.value}>
                <Radio value={parseValue(radio.value)} disabled={radio.disabled || disabled || isReadOnly}>
                  {radio.label}
                </Radio>
                {field.value === parseValue(radio.value) && radio.element}
              </div>
            ))}
        </HStack>
      )}
    </RadioGroup>
  );
};

export default RadioGroupPanel;
