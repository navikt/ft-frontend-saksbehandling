import React, { FunctionComponent } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type DateTimeSeperator = 'dash' | 'kl';

export type OwnProps = {
  dateTimeString: string;
  separator?: DateTimeSeperator;
} & Intl.DateTimeFormatOptions;

/**
 * DateTimeLabel
 *
 * Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.
 *
 * Eksempel:
 * ```html
 * <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
 * ```
 */
const DateTimeLabel: FunctionComponent<OwnProps> = ({
  dateTimeString,
  separator = 'dash' as DateTimeSeperator,
  year = 'numeric',
  month = '2-digit',
  day = '2-digit',
  hour = 'numeric',
  minute = 'numeric',
  second = undefined,
}: OwnProps) => {
  const getSeparator = () => {
    switch (separator) {
      case 'dash':
        return ' - ';
      case 'kl':
        return intl.formatMessage({ id: 'DateTimeLabel.Kl' });
    }
  };

  return (
    <>
      <FormattedDate value={new Date(dateTimeString)} day={day} month={month} year={year} />
      {getSeparator()}
      <FormattedTime value={new Date(dateTimeString)} hour={hour} minute={minute} second={second} />
    </>
  );
};

export default DateTimeLabel;
