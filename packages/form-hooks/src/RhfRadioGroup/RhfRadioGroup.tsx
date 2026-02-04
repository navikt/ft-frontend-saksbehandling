import { type ReactElement } from 'react';
import {
  type FieldPath,
  type FieldPathValue,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';

import { HStack, RadioGroup, type RadioGroupProps } from '@navikt/ds-react';
import classnames from 'classnames';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

import styles from '../readOnlyIcon.module.css';

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  isEdited?: boolean;
  validate?: Array<(value: FieldPathValue<TFieldValues, TName>) => ValidationReturnType>;
  onChange?: (value: FieldPathValue<TFieldValues, TName>) => void;
  children: ReactElement | ReactElement[];
  className?: string;
  control: UseControllerProps<TFieldValues, TName>['control'];
} & Omit<UseControllerProps<TFieldValues, TName>, 'control'> &
  Omit<RadioGroupProps, 'defaultValue' | 'defaultChecked' | 'onChange'>;

export const RhfRadioGroup = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  legend,
  validate = [],
  onChange,
  children,
  className,
  readOnly,
  size = 'small',
  isEdited,
  name,
  control,
  ...rest
}: Props<TFieldValues, TName>) => {
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
