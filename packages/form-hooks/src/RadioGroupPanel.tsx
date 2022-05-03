import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import {
  useFormContext, useController, ControllerRenderProps, FieldValues,
} from 'react-hook-form';
import { RadioGruppe, Radio } from 'nav-frontend-skjema';
import { FlexContainer, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { LabelType } from './Label';
import { getError, getValidationRules } from './formUtils';

interface RadioProps {
  value: string;
  label: LabelType;
  element?: ReactElement;
}

interface RadioOption {
  name: string;
  field: ControllerRenderProps<FieldValues, string>;
  radio: RadioProps;
  parse?: (value: string) => any;
  onChange?: (value) => void;
  disabled: boolean;
  isReadOnly: boolean;
}

const RadioOption: FunctionComponent<RadioOption> = ({
  name,
  field,
  radio,
  parse,
  onChange,
  disabled,
  isReadOnly,
}) => {
  const parsedValue = parse(radio.value);
  const isChecked = parsedValue === field.value;

  if (isReadOnly && !isChecked) {
    return <div />;
  }

  return (
    <>
      <Radio
        value={radio.value}
        label={radio.label}
        name={name}
        onChange={() => {
          if (onChange) {
            onChange(radio.value);
          }
          field.onChange(parsedValue);
        }}
        checked={isChecked}
        disabled={disabled || isReadOnly}
      />
      {isChecked && radio.element}
    </>
  );
};

interface RadioGroupPanelProps {
  name: string;
  label?: LabelType;
  radios: RadioProps[];
  validate?: ((value: string | number) => any)[];
  onChange?: (value) => void;
  disabled?: boolean;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
}

const RadioGroupPanel: FunctionComponent<RadioGroupPanelProps> = ({
  label,
  name,
  validate,
  radios,
  onChange,
  disabled = false,
  isReadOnly = false,
  isHorizontal = false,
  parse = (value) => value,
}) => {
  const { formState: { errors } } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  return (
    <RadioGruppe legend={label} feil={getError(errors, name)}>
      {!isHorizontal && radios.map((radio) => (
        <RadioOption
          key={radio.value}
          name={name}
          field={field}
          radio={radio}
          parse={parse}
          onChange={onChange}
          disabled={disabled}
          isReadOnly={isReadOnly}
        />
      ))}
      {isHorizontal && (
        <FlexContainer>
          <FlexRow>
            {radios.map((radio) => (
              <FlexColumn key={radio.value}>
                <RadioOption
                  name={name}
                  field={field}
                  radio={radio}
                  parse={parse}
                  onChange={onChange}
                  disabled={disabled}
                  isReadOnly={isReadOnly}
                />
              </FlexColumn>
            ))}
          </FlexRow>
        </FlexContainer>
      )}
    </RadioGruppe>
  );
};

export default RadioGroupPanel;
