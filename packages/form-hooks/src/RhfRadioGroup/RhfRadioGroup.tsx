import { type ReactElement, type ReactNode } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { HStack, RadioGroup } from '@navikt/ds-react';
import classnames from 'classnames';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

import styles from './rhfRadioGroup.module.css';

type Props<T extends FieldValues> = {
  description?: string | ReactNode;
  label?: string | ReactNode;
  size?: 'medium' | 'small';
  isReadOnly?: boolean;
  isEdited?: boolean;
  hideLegend?: boolean;
  validate?: Array<(value: string | number | boolean) => ValidationReturnType>;
  onChange?: (value: string | boolean | number) => void;
  children: ReactElement | ReactElement[];
  className?: string;
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfRadioGroup = <T extends FieldValues>({
  label,
  description,
  validate = [],
  onChange,
  children,
  className,
  isReadOnly = false,
  size = 'small',
  isEdited = false,
  hideLegend = false,
  ...controllerProps
}: Props<T>) => {
  const { name, control } = controllerProps;
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
          {label}
          {isReadOnly && isEdited && <EditedIcon />}
        </HStack>
      }
      hideLegend={hideLegend}
      aria-readonly={isReadOnly}
      readOnly={isReadOnly}
      description={description}
      size={size}
      error={getError(errors, name)}
      onChange={value => {
        if (onChange) {
          onChange(value);
        }
        field.onChange(value);
      }}
      className={classnames(className, styles.noReadOnlyIcon)}
    >
      {children}
    </RadioGroup>
  );
};
