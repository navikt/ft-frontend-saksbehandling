import dayjs from 'dayjs';

import { createIntl } from './createIntl';
import { HHMM_TIME_FORMAT } from './formats';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export type DateFormatOptions = Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day'>;

type DateTimeSeperator = 'dash' | 'kl';

export const dateFormat = (dateString: Date | string, options?: DateFormatOptions) => {
  const { year = 'numeric', month = '2-digit', day = '2-digit' } = options ?? {};
  return intl.formatDate(new Date(dateString), { year, month, day });
};

export type DateTimeFormatOptions = {
  separator?: DateTimeSeperator;
} & Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'>;

export const dateTimeFormat = (dateString: Date | string, options?: DateTimeFormatOptions) => {
  const {
    separator = 'dash' as DateTimeSeperator,
    year = 'numeric',
    month = '2-digit',
    day = '2-digit',
    hour = 'numeric',
    minute = 'numeric',
    second = undefined,
  } = options ?? {};

  const getSeparator = () => {
    switch (separator) {
      case 'kl':
        return intl.formatMessage({ id: 'DateTimeLabel.Kl' });
      case 'dash':
        return ' - ';
    }
  };
  const date = intl.formatDate(new Date(dateString), { year, month, day });
  const time = intl.formatDate(new Date(dateString), { hour, minute, second });
  return `${date}${getSeparator()}${time}`;
};

export const timeFormat = (date: string): string => dayjs(date).utc(true).format(HHMM_TIME_FORMAT);
