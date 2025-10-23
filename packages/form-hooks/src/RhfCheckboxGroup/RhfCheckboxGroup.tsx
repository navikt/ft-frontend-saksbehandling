import { type ReactElement, type ReactNode, useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Checkbox, CheckboxGroup, type CheckboxGroupProps, HStack } from '@navikt/ds-react';
import classnames from 'classnames';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

import styles from '../readOnlyIcon.module.css';

export interface CheckboxProps {
  value: string;
  label: string | ReactNode;
  disabled?: boolean;
  element?: ReactElement;
}

type Props<T extends FieldValues> = {
  validate?: ((values: (string | number)[]) => ValidationReturnType)[];
  onChange?: (value: any) => void;
  hideLegend?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
  children?: ReactElement<typeof Checkbox>[];
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'> &
  Omit<CheckboxGroupProps, 'value' | 'defaultValue' | 'onChange'>;

export const RhfCheckboxGroup = <T extends FieldValues>({
  legend,
  validate = [],
  onChange,
  readOnly,
  isEdited,
  size = 'small',
  children,
  name,
  control,
  className,
  ...rest
}: Props<T>) => {
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

  return (
    <CheckboxGroup
      name={name}
      value={field.value !== undefined ? field.value : []}
      onChange={value => {
        if (onChange) {
          onChange(value);
        }
        field.onChange(value);
      }}
      size={size}
      legend={
        <HStack justify="center" gap="space-8">
          {legend}
          {readOnly && isEdited && <EditedIcon />}
        </HStack>
      }
      readOnly={readOnly}
      error={getError(errors, name)}
      className={classnames(className, styles.noReadOnlyIcon)}
      {...rest}
    >
      {children}
    </CheckboxGroup>
  );
};
