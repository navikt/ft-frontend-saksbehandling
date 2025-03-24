import { createIntl } from './createIntl';
import { dateFormat, DateFormatOptions } from './dateFormat';
import { Period } from './Period';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const sortPeriodsByFomDate = (period1: Period, period2: Period): number => {
  if (period1.startsBefore(period2)) {
    return -1;
  }
  if (period2.startsBefore(period1)) {
    return 1;
  }
  return 0;
};

type PeriodFormatUtils = {
  separator?: string;
  showTodayString?: boolean;
} & DateFormatOptions;

export const periodFormat = (fom: string, tom: string | undefined, options?: PeriodFormatUtils) => {
  const { separator = '-', showTodayString = false, ...rest } = options ?? {};
  const fomFormatted = dateFormat(fom, rest);
  const tomFormatted = tom ? dateFormat(tom, rest) : '';
  return `${fomFormatted} ${separator} ${!tom && showTodayString ? intl.formatMessage({ id: 'PeriodLabel.DateToday' }) : tomFormatted}`;
};
