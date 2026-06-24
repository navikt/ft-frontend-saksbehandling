import React, { type ReactNode, useCallback, useMemo, useState } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { DatePicker, type DatePickerProps, useDatepicker } from '@navikt/ds-react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

dayjs.extend(customParseFormat);

type Props<T extends FieldValues> = {
  label?: ReactNode;
  hideLabel?: boolean;
  description?: ReactNode;
  size?: 'medium' | 'small';
  readOnly?: boolean;
  onChange?: (value: string) => void;
  disabledDays?: DatePickerProps['disabled'];
  isEdited?: boolean;
  validate?: ((value: string) => ValidationReturnType)[];
  defaultMonth?: Date;
  fromDate?: Date;
  toDate?: Date;
  inputFormats?: string[];
  control: UseControllerProps<T>['control'];
} & Omit<UseControllerProps<T>, 'control'>;

export const RhfDatepicker = <T extends FieldValues>({
  label,
  description,
  validate = [],
  hideLabel,
  readOnly,
  size = 'small',
  onChange,
  disabledDays,
  isEdited,
  defaultMonth,
  fromDate,
  toDate,
  inputFormats = [DDMMYYYY_DATE_FORMAT],
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
      const parserFormats = inputFormats.length > 0 ? inputFormats : [DDMMYYYY_DATE_FORMAT];
      const { inputVerdi, dato } = formatDateInput({
        nyVerdi: event.target.value,
        forrigeVerdi: fieldValue,
        parserFormats,
      });

      setFieldValue(inputVerdi);
      if (onChange) {
        onChange(dato);
      }
      field.onChange(dato);
    },
    [setFieldValue, onChange, field, inputFormats, fieldValue],
  );

  if (readOnly) {
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

const formatDateInput = ({
  nyVerdi,
  forrigeVerdi,
  parserFormats,
}: {
  nyVerdi: string;
  forrigeVerdi: string;
  parserFormats: string[];
}): { inputVerdi: string; dato: string } => {
  const direkteParset = dayjs(nyVerdi, parserFormats, true);
  if (direkteParset.isValid()) {
    return { inputVerdi: nyVerdi, dato: direkteParset.format(ISO_DATE_FORMAT) };
  }

  // Setter automatisk inn punktum når brukeren skriver 8 sifre: "26082025" -> "26.08.2025"
  const tall = nyVerdi.replace(/\D/g, '');
  const forrigeTall = forrigeVerdi.replace(/\D/g, '');
  if (tall.length === 8 && tall !== forrigeTall) {
    const formatert = `${tall.slice(0, 2)}.${tall.slice(2, 4)}.${tall.slice(4, 8)}`;
    const parset = dayjs(formatert, DDMMYYYY_DATE_FORMAT, true);
    if (parset.isValid()) {
      return { inputVerdi: formatert, dato: parset.format(ISO_DATE_FORMAT) };
    }
  }

  return { inputVerdi: nyVerdi, dato: nyVerdi };
};
