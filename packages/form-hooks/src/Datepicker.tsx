import { DatePicker, useDatepicker } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { FunctionComponent, ReactNode, useCallback, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { getError, getValidationRules } from './formUtils';
import ReadOnlyField from './ReadOnlyField';

dayjs.extend(customParseFormat);

export interface DatepickerProps {
  name: string;
  label?: string | ReactNode;
  description?: string | ReactNode;
  validate?: ((value: string) => any)[];
  disabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (value: any) => void;
  disabledDays?: {
    fromDate?: Date;
    toDate?: Date;
  };
  isEdited?: boolean;
  defaultMonth?: Date;
  size?: 'medium' | 'small';
}

const Datepicker: FunctionComponent<DatepickerProps> = ({
  name,
  label,
  description,
  validate = [],
  disabled = false,
  isReadOnly = false,
  onChange,
  disabledDays,
  isEdited,
  defaultMonth,
  size = 'small',
}) => {
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
    defaultMonth: defaultMonth || (!field.value && disabledDays?.toDate ? disabledDays.toDate : undefined),
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
        size={size}
      />
    );
  }

  const dpProps = {
    ...datepickerProps,
    fromDate: disabledDays?.fromDate,
    toDate: disabledDays?.toDate,
  };

  return (
    <DatePicker {...dpProps}>
      <DatePicker.Input
        {...inputProps}
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

export default Datepicker;
