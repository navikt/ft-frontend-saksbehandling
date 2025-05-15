import dayjs from 'dayjs';

import { createIntl } from './createIntl';
import { dateFormat, DateFormatOptions } from './dateFormat';
import { TIDENES_ENDE } from './dateUtils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type Period = { fom: string; tom?: string };

export const sortPeriodsByFom = (a: Period, b: Period) => dayjs(a.fom).diff(dayjs(b.fom));

type PeriodFormatUtils = {
  separator?: string;
  showTodayString?: boolean;
} & DateFormatOptions;

export const periodFormat = (fom: string, tom: string | undefined, options?: PeriodFormatUtils) => {
  const { separator = '-', showTodayString = false, ...rest } = options ?? {};
  const fomFormatted = dateFormat(fom, rest);
  const tomFormatted = formaterTomDato(tom, showTodayString, rest);
  return `${fomFormatted} ${separator} ${tomFormatted}`;
};

const formaterTomDato = (tom: string | undefined, showTodayString: boolean, options: DateFormatOptions) => {
  if (!tom && showTodayString) {
    return intl.formatMessage({ id: 'PeriodLabel.DateToday' });
  }
  if (!tom || tom === TIDENES_ENDE) {
    return '';
  }
  return dateFormat(tom, options);
};
