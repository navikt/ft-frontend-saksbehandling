import { type ReactElement, type ReactNode, useMemo } from 'react';
import {
  type FieldPath,
  type FieldPathValue,
  type FieldValues,
  type PathValue,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';

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

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  validate?: Array<(value: FieldPathValue<TFieldValues, TName>) => ValidationReturnType>;
  onChange?: (value: FieldPathValue<TFieldValues, TName>) => void;
  hideLegend?: boolean;
  isEdited?: boolean;
  size?: 'medium' | 'small';
  children?: ReactElement<typeof Checkbox>[];
  control: UseControllerProps<TFieldValues, TName>['control'];
} & Omit<UseControllerProps<TFieldValues, TName>, 'control'> &
  Omit<CheckboxGroupProps, 'value' | 'defaultValue' | 'onChange'>;

export const RhfCheckboxGroup = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
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
}: Props<TFieldValues, TName>) => {
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
          onChange(value as PathValue<TFieldValues, TName>);
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
