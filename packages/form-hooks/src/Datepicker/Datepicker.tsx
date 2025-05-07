import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { DatePicker, DatePickerProps, useDatepicker } from '@navikt/ds-react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { getError, getValidationRules } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

dayjs.extend(customParseFormat);

export interface DatepickerProps {
  name: string;
  label?: string | ReactNode;
  hideLabel?: boolean;
  description?: string | ReactNode;
  validate?: ((value: string) => any)[];
  disabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (value: any) => void;
  disabledDays?: DatePickerProps['disabled'];
  isEdited?: boolean;
  defaultMonth?: Date;
  size?: 'medium' | 'small';
  fromDate?: Date;
  toDate?: Date;
}

export const Datepicker = ({
  name,
  label,
  description,
  validate = [],
  hideLabel = false,
  disabled = false,
  isReadOnly = false,
  onChange,
  disabledDays,
  isEdited,
  defaultMonth,
  fromDate,
  toDate,
  size = 'small',
}: DatepickerProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  const defaultDate = field.value ? dayjs(field.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT) : '';
  const [fieldValue, setFieldValue] = useState<string>(defaultDate);

  const { datepickerProps, inputProps } = useDatepicker({
    onDateChange: date => {
      if (date !== undefined) {
        const verdi = dayjs(date).format(ISO_DATE_FORMAT);
        if (onChange) {
          onChange(verdi);
        }
        field.onChange(verdi);
        setFieldValue(dayjs(verdi, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT));
      }
    },
    defaultSelected: field.value ? dayjs(field.value, ISO_DATE_FORMAT, true).toDate() : undefined,
    defaultMonth: defaultMonth || (!field.value && toDate ? toDate : undefined),
    disabled: disabledDays,
  });

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const verdi = dayjs(event.target.value, DDMMYYYY_DATE_FORMAT, true).format(ISO_DATE_FORMAT);
      const validDate = verdi !== 'Invalid Date';

      setFieldValue(event.target.value);
      if (onChange) {
        onChange(validDate ? verdi : event.target.value);
      }
      field.onChange(validDate ? verdi : event.target.value);
    },
    [setFieldValue, onChange, field],
  );

  if (isReadOnly) {
    return (
      <ReadOnlyField
        label={label}
        value={field.value ? dayjs(field.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT) : undefined}
        isEdited={isEdited}
        hideLabel={hideLabel}
        size={size}
      />
    );
  }

  const dpProps = {
    ...datepickerProps,
    fromDate: fromDate,
    toDate: toDate,
    dropdownCaption: fromDate && toDate ? true : undefined,
  };

  return (
    <DatePicker {...dpProps}>
      <DatePicker.Input
        {...inputProps}
        hideLabel={hideLabel}
        onChange={onChangeInput}
        value={fieldValue}
        size={size}
        label={label}
        description={description}
        disabled={disabled}
        error={getError(errors, name)}
      />
    </DatePicker>
  );
};
