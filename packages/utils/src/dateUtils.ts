import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import isoWeek from 'dayjs/plugin/isoWeek.js';
import utc from 'dayjs/plugin/utc.js';

import { createIntl } from './createIntl';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from './formats';

import messages from '../i18n/nb_NO.json';

const nbLocale = {
  name: 'nb',
  weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
  weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
  weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
  months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
  monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
  ordinal: (number: number) => `${number}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] HH:mm',
    LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
  },
  relativeTime: {
    future: 'om %s',
    past: '%s siden',
    s: 'noen sekunder',
    m: 'ett minutt',
    mm: '%d minutter',
    h: 'en time',
    hh: '%d timer',
    d: 'en dag',
    dd: '%d dager',
    M: 'en måned',
    MM: '%d måneder',
    y: 'ett år',
    yy: '%d år',
  },
};

dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(duration);
dayjs.locale(nbLocale, undefined, true);

const intl = createIntl(messages);

export const TIDENES_MORGEN = '1000-01-01';
export const TIDENES_ENDE = '9999-12-31';

type WeekAndDay = {
  /**
   * @deprecated Når konsumenter er gått fra å bruke id til å bruke formattedString kan id fjernes.
   */
  id: string;
  formattedString: string;
  weeks?: number;
  days?: number;
};

const initializeDate = (dateString?: string | Dayjs | Date, dateStringFormat?: string | string[], strict?: boolean) => {
  const supportedFormats = dateStringFormat || [ISO_DATE_FORMAT, DDMMYYYY_DATE_FORMAT];
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
    // @ts-expect-error Kva er dette?
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

  // Calculate the full months between the two dates
  const months = tDate.diff(fDate, 'month');
  const remainingDays = tDate.subtract(months, 'month');

  // Calculate the remaining days after full months are taken out
  // Include both the start and end date
  const days = remainingDays.diff(fDate, 'day') + 1;

  return {
    months,
    days,
  };
};
