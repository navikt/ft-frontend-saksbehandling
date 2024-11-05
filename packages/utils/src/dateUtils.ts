import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/nb';
import createIntl from './createIntl';
import messages from '../i18n/nb_NO.json';

import { DDMMYYYY_DATE_FORMAT, HHMM_TIME_FORMAT, ISO_DATE_FORMAT, YYYY_MM_FORMAT } from './formats';

dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(duration);

const intl = createIntl(messages);

export const TIDENES_ENDE = '9999-12-31';

type WeekAndDay = {
  /**
   * @deprecated Når konsumenter er gått fra å bruke id til å bruke formattedString kan id fjernes
   */
  id: string;
  formattedString: string;
  weeks?: number;
  days?: number;
};

export const initializeDate = (
  dateString?: string | Dayjs | Date,
  dateStringFormat?: string | string[],
  strict?: boolean,
) => {
  const supportedFormats = dateStringFormat || ['YYYY-MM-DD', 'DD.MM.YYYY'];
  return dayjs(dateString, supportedFormats, strict).utc(true).startOf('day');
};

export const createWeekAndDay = (weeks?: number, days?: number): WeekAndDay => {
  let id = 'Dato.AntallDagerOgUker';
  if (weeks === undefined && days === undefined) {
    id = 'Dato.TidenesEnde';
    return {
      id,
      formattedString: intl.formatMessage({ id }),
    };
  }

  if (!weeks && !days) {
    id = 'Dato.NullDager';
    return {
      id,
      formattedString: intl.formatMessage({ id }),
      weeks: 0,
      days: 0,
    };
  }

  return {
    id,
    formattedString: intl.formatMessage(
      { id },
      {
        weeks: weeks ?? 0,
        days: days ?? 0,
        seperator: days && weeks ? ' ' : '',
      },
    ),
    weeks,
    days,
  };
};

export const calcDays = (fraDatoPeriode: string, tilDatoPeriode: string, notWeekends = true): number => {
  if (tilDatoPeriode === TIDENES_ENDE) {
    // @ts-ignore Kva er dette?
    return createWeekAndDay();
  }

  const fraDato = initializeDate(fraDatoPeriode, ISO_DATE_FORMAT);
  const tilDato = initializeDate(tilDatoPeriode, ISO_DATE_FORMAT);
  let numOfDays;

  if (notWeekends) {
    let count = tilDato.diff(fraDato, 'days');
    let date = initializeDate(fraDatoPeriode, ISO_DATE_FORMAT);
    numOfDays = date.isoWeekday() !== 6 && date.isoWeekday() !== 7 ? 1 : 0;

    while (count > 0) {
      date = date.add(1, 'days');

      if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
        numOfDays += 1;
      }

      count -= 1;
    }
  } else {
    // Vi legger til én dag for å få med startdato i perioden
    numOfDays = tilDato.diff(fraDato, 'days') + 1;
  }

  return numOfDays;
};

export const calcDaysAndWeeks = (fraDatoPeriode: string, tilDatoPeriode: string): WeekAndDay => {
  const numOfDays = calcDays(fraDatoPeriode, tilDatoPeriode);

  const weeks = Math.floor(numOfDays / 5);
  const days = numOfDays % 5;

  return createWeekAndDay(weeks, days);
};

export const calcDaysAndWeeksWithWeekends = (fraDatoPeriode: string, tilDatoPeriode: string): WeekAndDay => {
  const notWeekends = false;

  const numOfDays = calcDays(fraDatoPeriode, tilDatoPeriode, notWeekends);

  const weeks = Math.floor(numOfDays / 7);
  const days = numOfDays % 7;

  return createWeekAndDay(weeks, days);
};

export const dateFormat = (date?: Date | string): string => initializeDate(date).format(DDMMYYYY_DATE_FORMAT);

export const timeFormat = (date: string): string => dayjs(date).utc(true).format(HHMM_TIME_FORMAT);
// Skal ikke legge til dag når dato er tidenes ende
export const addDaysToDate = (dateString: string, nrOfDays: number): string =>
  dateString === TIDENES_ENDE
    ? dateString
    : initializeDate(dateString, ISO_DATE_FORMAT).add(nrOfDays, 'days').format(ISO_DATE_FORMAT);

// Inkluderer både start og sluttdato
export const findDifferenceInMonthsAndDays = (
  fomDate: string,
  tomDate: string,
): { months: number; days: number } | undefined => {
  const fDate = initializeDate(fomDate, ISO_DATE_FORMAT, true);
  const tDate = initializeDate(tomDate, ISO_DATE_FORMAT, true);

  if (!fDate.isValid() || !tDate.isValid() || fDate.isAfter(tDate)) {
    return undefined;
  }

  let months = 0;
  let days = 0;

  // Calculate the full months between the two dates
  months = tDate.diff(fDate, 'month');
  const remainingDays = tDate.subtract(months, 'month');

  // Calculate the remaining days after full months are taken out
  days = remainingDays.diff(fDate, 'day');

  // Include both the start and end date
  days += 1;

  return {
    months,
    days,
  };
};

export const getRangeOfMonths = (fom: string, tom: string): { month: string; year: string }[] => {
  dayjs.locale('nb');
  const fraMåned = initializeDate(fom, YYYY_MM_FORMAT);
  const tilMåned = initializeDate(tom, YYYY_MM_FORMAT);
  let currentMonth = fraMåned;
  const range = [
    {
      month: currentMonth.format('MMMM'),
      year: currentMonth.format('YY'),
    },
  ];

  while (currentMonth.isBefore(tilMåned)) {
    currentMonth = currentMonth.add(1, 'month');
    range.push({
      month: currentMonth.format('MMMM'),
      year: currentMonth.format('YY'),
    });
  }

  return range;
};

export const prettifyDateString = (dateString: string) => {
  const prettyDateFormat = 'DD.MM.YYYY';

  const dateObject = initializeDate(dateString);
  return dateObject.format(prettyDateFormat);
};

export function isSameOrBefore(date: string | Dayjs | Date, otherDate: string | Dayjs | Date) {
  const dateFormats = ['YYYY-MM-DD', 'DD.MM.YYYY'];
  const dateInQuestion = initializeDate(date, dateFormats);
  const formattedOtherDate = initializeDate(otherDate, dateFormats);
  return dateInQuestion.isBefore(formattedOtherDate) || dateInQuestion.isSame(formattedOtherDate);
}

export const isValidDate = (date: any) => !Number.isNaN(new Date(date).valueOf());

export const getDateAndTime = (tidspunkt?: string): { date: string; time: string } | undefined => {
  if (!tidspunkt) {
    return undefined;
  }
  const dateTime = dayjs(tidspunkt);
  const date = dateTime.format(DDMMYYYY_DATE_FORMAT);
  const time = dateTime.format(HHMM_TIME_FORMAT);
  return { date, time };
};
