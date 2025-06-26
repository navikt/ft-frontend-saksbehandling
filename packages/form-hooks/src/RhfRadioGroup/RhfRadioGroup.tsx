import { Fragment, ReactElement, ReactNode, useMemo } from 'react';
import { FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';

import { HStack, Radio, RadioGroup } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, ValidationReturnType } from '../formUtils';

import styles from './rhfRadioGroup.module.css';

// TODO (TOR) Denne bør skrivast om til å ta inn Radio-element som children

export interface RadioProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

type Props<T extends FieldValues> = {
  description?: string;
  label?: string | ReactNode;
  radios: RadioProps[];
  validate?: ((value: string | number) => ValidationReturnType)[];
  onChange?: (value: any) => void;
  isReadOnly?: boolean;
  isHorizontal?: boolean;
  parse?: (value: string) => any;
  isTrueOrFalseSelection?: boolean;
  hideLegend?: boolean;
  hideRadioLabels?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
} & UseControllerProps<T>;

export const RhfRadioGroup = <T extends FieldValues>({
  label,
  description,
  validate = [],
  radios,
  onChange,
  isReadOnly = false,
  isHorizontal = false,
  parse = value => value,
  isTrueOrFalseSelection = false,
  hideLegend = false,
  hideRadioLabels = false,
  isEdited = false,
  size = 'small',
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

  const parseValue = isTrueOrFalseSelection ? (value: string) => value === 'true' : parse;

  const legend = (
    <HStack justify="center" gap="2">
      {label}
      {isReadOnly && isEdited && <EditedIcon />}
    </HStack>
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
      size={size}
      legend={legend}
      description={description}
      error={getError(errors, name)}
      className={hideRadioLabels ? styles.hideRadioLabels : ''}
      hideLegend={hideLegend}
    >
      {!isHorizontal &&
        radios.map(radio => (
          <Fragment key={radio.value}>
            <Radio size={size} value={parseValue(radio.value)} disabled={radio.disabled || disabled || isReadOnly}>
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
                size={size}
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
