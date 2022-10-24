import React, { useState, FunctionComponent, ReactNode, useMemo, useCallback } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
// eslint-disable-next-line camelcase
import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { getError, getValidationRules } from './formUtils';
import ReadOnlyField from './ReadOnlyField';

dayjs.extend(customParseFormat);

export interface DatepickerProps {
  name: string;
  label?: string | ReactNode;
  validate?: ((value: string) => any)[];
  disabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (value: any) => void;
  disabledDays?: {
    fromDate?: Date;
    toDate?: Date;
  };
  isEdited?: boolean;
}

const Datepicker: FunctionComponent<DatepickerProps> = ({
  name,
  label,
  validate = [],
  disabled = false,
  isReadOnly = false,
  onChange,
  disabledDays,
  isEdited,
}): JSX.Element => {
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

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
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
      />
    );
  }

  const dpProps = {
    ...datepickerProps,
    fromDate: disabledDays?.fromDate,
    toDate: disabledDays?.toDate,
  };

  return (
    // eslint-disable-next-line react/jsx-pascal-case, camelcase
    <UNSAFE_DatePicker {...dpProps}>
      {/* eslint-disable-next-line react/jsx-pascal-case, camelcase */}
      <UNSAFE_DatePicker.Input
        {...inputProps}
        onChange={onChangeInput}
        value={fieldValue}
        size="small"
        label={label}
        disabled={disabled}
        error={getError(errors, name)}
      />
    </UNSAFE_DatePicker>
  );
};

export default Datepicker;
