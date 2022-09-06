import React, { FunctionComponent, ReactNode } from 'react';
import { Datepicker } from 'nav-datovelger';
import { Label } from '@navikt/ds-react';
import { CalendarPlacement } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import FieldError from './FieldError';

import './datepicker.less';

interface PureDatepickerProps {
  label?: string | ReactNode;
  errorMessage?: string;
  ariaLabel?: string;
  inputId: string;
  calendarSettings?: {
    position?: CalendarPlacement;
  };
  disabled?: boolean;
  initialMonth?: Date;
  disabledDays?: {
    before: Date;
    after?: Date;
  };
}

const PureDatepicker: FunctionComponent<PureDatepickerProps & DatepickerProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  limitations,
  ariaLabel,
  inputId,
  calendarSettings,
  disabled,
  initialMonth,
  disabledDays,
}): JSX.Element => {
  const dayPickerProps = {
    initialMonth: initialMonth ? new Date(initialMonth) : undefined,
    disabledDays,
  };

  return (
    <div className="datepicker">
      {label && (
        <>
          <Label htmlFor={inputId} size="small">
            {label}
          </Label>
          <VerticalSpacer fourPx />
        </>
      )}
      <Datepicker
        onChange={onChange}
        value={value}
        inputProps={{
          placeholder: 'dd.mm.åååå',
          'aria-label': ariaLabel,
        }}
        limitations={limitations}
        dayPickerProps={dayPickerProps}
        calendarSettings={calendarSettings}
        inputId={inputId}
        disabled={disabled}
      />
      {errorMessage && <FieldError message={errorMessage} />}
    </div>
  );
};

export default PureDatepicker;
