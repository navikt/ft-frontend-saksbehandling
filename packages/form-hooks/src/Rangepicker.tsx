import React, { FunctionComponent, ReactNode, useCallback, useMemo, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { Label, DatePicker, useRangeDatepicker } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { getError, getValidationRules } from './formUtils';
import ReadOnlyField from './ReadOnlyField';

import styles from './rangepicker.module.css';

dayjs.extend(customParseFormat);

export interface RangepickerProps {
  fomName: string;
  tomName: string;
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

const Rangepicker: FunctionComponent<RangepickerProps> = ({
  fomName,
  tomName,
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
    return <ReadOnlyField label={label} value={`${fom} - ${tom || ''}`} isEdited={isEdited} />;
  }

  const dpProps = {
    ...datepickerProps,
    fromDate: disabledDays?.fromDate,
    toDate: disabledDays?.toDate,
  };

  return (
    <DatePicker {...dpProps}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.label}>
            <Label size="small">{label}</Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <DatePicker.Input
              {...fromInputProps}
              onChange={onChangeInputFom}
              value={fieldValueFom}
              size="small"
              hideLabel
              label=""
              disabled={disabled}
              error={getError(errors, fomName)}
            />
          </FlexColumn>
          <FlexColumn>
            <DatePicker.Input
              {...toInputProps}
              onChange={onChangeInputTom}
              value={fieldValueTom}
              size="small"
              label=""
              hideLabel
              disabled={disabled}
              error={getError(errors, tomName)}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </DatePicker>
  );
};

export default Rangepicker;
