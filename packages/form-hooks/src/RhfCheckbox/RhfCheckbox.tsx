import { ReactNode, useMemo } from 'react';
import { FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';

import { Checkbox, ErrorMessage } from '@navikt/ds-react';

import { getError, getValidationRules, ValidationReturnType } from '../formUtils';

type Props<T extends FieldValues> = {
  label: string | ReactNode;
  validate?: Array<(value: string) => ValidationReturnType>;
  readOnly?: boolean;
  onChange?: (isChecked: boolean) => void;
  onClick?: () => void;
  className?: string;
} & UseControllerProps<T>;

export const RhfCheckbox = <T extends FieldValues>({
  label,
  validate = [],
  readOnly = false,
  onChange,
  onClick,
  className,
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
        size="small"
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
