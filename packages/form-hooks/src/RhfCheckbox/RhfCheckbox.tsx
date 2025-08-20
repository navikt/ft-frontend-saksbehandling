import { type ReactNode, useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Checkbox, ErrorMessage } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';

type Props<T extends FieldValues> = {
  label: string | ReactNode;
  validate?: Array<(value: string) => ValidationReturnType>;
  readOnly?: boolean;
  onChange?: (isChecked: boolean) => void;
  onClick?: () => void;
  className?: string;
  control: UseControllerProps<T>['control'];
  size?: 'medium' | 'small';
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfCheckbox = <T extends FieldValues>({
  label,
  validate = [],
  readOnly = false,
  onChange,
  onClick,
  className,
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

  const error = getError(errors, name);

  return (
    <>
      <Checkbox
        size={size}
        disabled={disabled || readOnly}
        checked={field.value === true}
        className={className}
        error={!!error}
        {...field}
        onChange={event => {
          field.onChange(event);
          if (onChange) {
            onChange(event.currentTarget.checked);
          }
        }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {label}
      </Checkbox>
      {error && <ErrorMessage>{getError(errors, name)}</ErrorMessage>}
    </>
  );
};
