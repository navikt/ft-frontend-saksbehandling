import React, { type ReactNode, useCallback, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { DatePicker, HStack, Label, useRangeDatepicker, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

dayjs.extend(customParseFormat);

interface Props {
  fomName: string;
  tomName: string;
  label?: string | ReactNode;
  validate?: ((value: string) => ValidationReturnType)[];
  disabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (value: any) => void;
  fromDate?: Date;
  toDate?: Date;
  isEdited?: boolean;
  size?: 'medium' | 'small';
}

// @deprecated brukes ikke(?)
export const RhfRangepicker = ({
  fomName,
  tomName,
  label,
  validate = [],
  disabled = false,
  isReadOnly = false,
  onChange,
  fromDate,
  toDate,
  isEdited,
  size = 'small',
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field: fomField } = useController({
    name: fomName,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  const { field: tomField } = useController({
    name: tomName,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  const defaultDateFom = fomField.value
    ? dayjs(fomField.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT)
    : '';
  const [fieldValueFom, setFieldValueFom] = useState<string>(defaultDateFom);
  const defaultDateTom = tomField.value
    ? dayjs(tomField.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT)
    : '';
  const [fieldValueTom, setFieldValueTom] = useState<string>(defaultDateTom);

  const { datepickerProps, toInputProps, fromInputProps } = useRangeDatepicker({
    onRangeChange: range => {
      const fom = range?.from ? dayjs(range?.from).format(ISO_DATE_FORMAT) : undefined;
      if (onChange) {
        onChange(fom);
      }
      fomField.onChange(fom);
      setFieldValueFom(dayjs(fom, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT));

      const tom = range?.to ? dayjs(range?.to).format(ISO_DATE_FORMAT) : undefined;
      if (onChange) {
        onChange(tom);
      }
      tomField.onChange(tom);
      setFieldValueTom(tom ? dayjs(tom, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT) : '');
    },
  });

  const onChangeInputFom = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const verdi = dayjs(event.target.value, DDMMYYYY_DATE_FORMAT, true).format(ISO_DATE_FORMAT);
      const validDate = verdi !== 'Invalid Date';

      setFieldValueFom(event.target.value);
      if (onChange) {
        onChange(validDate ? verdi : event.target.value);
      }
      fomField.onChange(validDate ? verdi : event.target.value);
    },
    [setFieldValueFom, onChange, fomField],
  );

  const onChangeInputTom = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const verdi = dayjs(event.target.value, DDMMYYYY_DATE_FORMAT, true).format(ISO_DATE_FORMAT);
      const validDate = verdi !== 'Invalid Date';

      setFieldValueTom(event.target.value);
      if (onChange) {
        onChange(validDate ? verdi : event.target.value);
      }
      tomField.onChange(validDate ? verdi : event.target.value);
    },
    [setFieldValueTom, onChange, tomField],
  );

  if (isReadOnly) {
    const fom = fomField.value ? dayjs(fomField.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT) : undefined;
    const tom = tomField.value ? dayjs(tomField.value, ISO_DATE_FORMAT, true).format(DDMMYYYY_DATE_FORMAT) : undefined;
    return <ReadOnlyField label={label} value={`${fom} - ${tom || ''}`} isEdited={isEdited} size={size} />;
  }

  const dpProps = {
    ...datepickerProps,
    fromDate: fromDate,
    toDate: toDate,
  };

  return (
    <DatePicker {...dpProps}>
      <VStack gap="space-8">
        <Label size="small">{label}</Label>
        <HStack gap="space-16">
          <DatePicker.Input
            {...fromInputProps}
            onChange={onChangeInputFom}
            value={fieldValueFom}
            size={size}
            hideLabel
            label=""
            aria-label="Fra dato"
            disabled={disabled}
            error={getError(errors, fomName)}
          />
          <DatePicker.Input
            {...toInputProps}
            onChange={onChangeInputTom}
            value={fieldValueTom}
            size={size}
            label=""
            aria-label="Til dato"
            hideLabel
            disabled={disabled}
            error={getError(errors, tomName)}
          />
        </HStack>
      </VStack>
    </DatePicker>
  );
};
