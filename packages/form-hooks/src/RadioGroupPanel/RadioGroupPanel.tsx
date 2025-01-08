import React, { Fragment, ReactElement, ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { HStack, Radio, RadioGroup } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules } from '../formUtils';
import styles from './radioGroupPanel.module.css';

export interface RadioProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement<any>;
}

export interface RadioGroupPanelProps {
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

const RadioGroupPanel = ({
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
}: RadioGroupPanelProps) => {
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

  const legend = (
    <>
      {label}
      {isReadOnly && isEdited && <EditedIcon />}
    </>
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
        radios.map(radio => (
          <Fragment key={radio.value}>
            <Radio value={parseValue(radio.value)} disabled={radio.disabled || disabled || isReadOnly}>
              {radio.label}
            </Radio>
            {field.value === parseValue(radio.value) && radio.element}
          </Fragment>
        ))}
      {isHorizontal && (
        <>
          <HStack gap="4">
            {radios.map(radio => (
              <Radio
                key={radio.value}
                value={parseValue(radio.value)}
                disabled={radio.disabled || disabled || isReadOnly}
              >
                {radio.label}
              </Radio>
            ))}
          </HStack>
          {radios
            .filter(radio => field.value === parseValue(radio.value))
            .map(radio => (
              <Fragment key={radio.value}>{radio.element}</Fragment>
            ))}
        </>
      )}
    </RadioGroup>
  );
};

export default RadioGroupPanel;
