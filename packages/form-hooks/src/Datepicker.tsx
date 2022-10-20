import React, { FunctionComponent, ReactNode, useMemo } from 'react';
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
  label?: string | ReactNode;
  name: string;
  validate?: ((value: string) => any)[];
  disabled?: boolean;
  isReadOnly?: boolean;
  parse?: (value: string) => string;
  format?: (value: string) => string;
  onChange?: (value: any) => void;
  disabledDays?: {
    fromDate?: Date;
    toDate?: Date;
  };
  isEdited?: boolean;
}

const Datepicker: FunctionComponent<DatepickerProps> = ({
  name,
  validate = [],
  label,
  disabled = false,
  isReadOnly = false,
  parse = value => value,
  format = value => value,
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

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    onDateChange: date => {
      const verdi = parse(dayjs(date).format(ISO_DATE_FORMAT));
      if (onChange) {
        onChange(verdi);
      }
      return field.onChange(verdi);
    },
  });

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
        value={field.value ? format(dayjs(field.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT)) : ''}
        size="small"
        label={label}
        disabled={disabled}
        error={getError(errors, name)}
      />
    </UNSAFE_DatePicker>
  );
};

export default Datepicker;
