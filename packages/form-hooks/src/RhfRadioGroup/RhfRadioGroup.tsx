import { type ReactElement } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { HStack, RadioGroup, type RadioGroupProps } from '@navikt/ds-react';
import classnames from 'classnames';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

import styles from './rhfRadioGroup.module.css';

type Props<T extends FieldValues> = {
  isEdited?: boolean;
  validate?: Array<(value: string | number | boolean) => ValidationReturnType>;
  onChange?: (value: string | boolean | number) => void;
  children: ReactElement | ReactElement[];
  className?: string;
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'> &
  Omit<RadioGroupProps, 'defaultValue' | 'defaultChecked' | 'onChange'>;

export const RhfRadioGroup = <T extends FieldValues>({
  legend,
  validate = [],
  onChange,
  children,
  className,
  readOnly = false,
  size = 'small',
  isEdited = false,
  name,
  control,
  ...rest
}: Props<T>) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    name,
    control,
    rules: {
      validate: getValidationRules(validate),
    },
  });

  return (
    <RadioGroup
      name={name}
      value={field.value !== undefined ? field.value : null}
      legend={
        <HStack justify="center" gap="space-8">
          {legend}
          {readOnly && isEdited && <EditedIcon />}
        </HStack>
      }
      aria-readonly={readOnly}
      readOnly={readOnly}
      size={size}
      error={getError(errors, name)}
      onChange={value => {
        if (onChange) {
          onChange(value);
        }
        field.onChange(value);
      }}
      className={classnames(className, styles.noReadOnlyIcon)}
      {...rest}
    >
      {children}
    </RadioGroup>
  );
};
