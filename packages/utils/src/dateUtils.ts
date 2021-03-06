import moment from 'moment/moment';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import 'moment/locale/nb';
import { DDMMYYYY_DATE_FORMAT, HHMM_TIME_FORMAT, ISO_DATE_FORMAT, YYYY_MM_FORMAT } from './formats';

dayjs.extend(utc);
dayjs.extend(duration);

export const TIDENES_ENDE = '9999-12-31';

type WeekAndDay = {
  id: string;
  weeks?: number;
  days?: number;
};

// TODO Denne funksjonen må ut ifrå utils. Dette er uttakslogikk
const checkDays = (weeks?: number, days?: number): WeekAndDay => {
  const weeksDaysObj = {
    weeks,
    days,
  };

  let id = 'UttakInfoPanel.AntallFlereDagerOgFlereUker';

  if (weeks === undefined && days === undefined) {
    id = 'UttakInfoPanel.TidenesEnde';
  }

  if (days === 0) {
    id = weeks === 1 ? 'UttakInfoPanel.AntallNullDagerOgEnUke' : 'UttakInfoPanel.AntallNullDagerOgFlereUker';
  }

  if (weeks === 0) {
    id = days === 1 ? 'UttakInfoPanel.AntallEnDagOgNullUker' : 'UttakInfoPanel.AntallFlereDagerOgNullUker';
  }

  if (days === 1) {
    id = weeks === 1 ? 'UttakInfoPanel.AntallEnDagOgEnUke' : 'UttakInfoPanel.AntallEnDagOgFlereUker';
  }

  if (weeks === 1) {
    id = 'UttakInfoPanel.AntallFlereDagerOgEnUke';
  }

  return {
    id,
    ...weeksDaysObj,
  };
};

export const calcDays = (fraDatoPeriode: string, tilDatoPeriode: string, notWeekends = true): number => {
  if (tilDatoPeriode === TIDENES_ENDE) {
    // @ts-ignore Kva er dette?
    return checkDays();
  }

  const fraDato = moment(fraDatoPeriode, ISO_DATE_FORMAT);
  const tilDato = moment(tilDatoPeriode, ISO_DATE_FORMAT);
  let numOfDays;

  if (notWeekends) {
    let count = tilDato.diff(fraDato, 'days');
    let date = moment(fraDatoPeriode, ISO_DATE_FORMAT);
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

  return checkDays(weeks, days);
};

export const calcDaysAndWeeksWithWeekends = (fraDatoPeriode: string, tilDatoPeriode: string): WeekAndDay => {
  const notWeekends = false;

  const numOfDays = calcDays(fraDatoPeriode, tilDatoPeriode, notWeekends);

  const weeks = Math.floor(numOfDays / 7);
  const days = numOfDays % 7;

  return checkDays(weeks, days);
};

export const dateFormat = (date?: Date | string): string => moment(date).format(DDMMYYYY_DATE_FORMAT);

export const timeFormat = (date: string): string => moment(date).format(HHMM_TIME_FORMAT);

// Skal ikke legge til dag når dato er tidenes ende
export const addDaysToDate = (dateString: string, nrOfDays: number): string =>
  dateString === TIDENES_ENDE
    ? dateString
    : moment(dateString, ISO_DATE_FORMAT).add(nrOfDays, 'days').format(ISO_DATE_FORMAT);

const hentMånederMellom = (fomDate: Dayjs, tomDate: Dayjs) => {
  const diff = tomDate.startOf('month').diff(fomDate.endOf('month'));
  const diffDuration = dayjs.duration(diff);
  return diffDuration.months();
};

export const findDifferenceInMonthsAndDays = (
  fomDate: string,
  tomDate: string,
): { months: number; days: number } | undefined => {
  const fDate = dayjs(fomDate, ISO_DATE_FORMAT, true).utc(true);
  const tDate = dayjs(tomDate, ISO_DATE_FORMAT, true).utc(true);
  if (!fDate.isValid() || !tDate.isValid() || fDate.isAfter(tDate)) {
    return undefined;
  }

  // Datoer i samme måned
  if (fDate.startOf('month').isSame(tDate.startOf('month'))) {
    const diff = tDate.add(1, 'day').diff(fDate);
    const diffDuration = dayjs.duration(diff);

    return {
      months: diffDuration.months(),
      days: diffDuration.days(),
    };
  }

  let antallMåneder = hentMånederMellom(fDate, tDate);
  let antallDager = 0;

  if (tDate.date() === tDate.daysInMonth()) {
    antallMåneder += 1;
  } else {
    antallDager = tDate.date();
  }
  if (fDate.startOf('month').isSame(fDate)) {
    antallMåneder += 1;
  } else {
    antallDager += 1 + fDate.daysInMonth() - fDate.date();
  }

  return {
    months: antallMåneder,
    days: antallDager,
  };
};

export const getRangeOfMonths = (fom: string, tom: string): { month: string; year: string }[] => {
  moment.locale('nb');
  const fraMåned = moment(fom, YYYY_MM_FORMAT);
  const tilMåned = moment(tom, YYYY_MM_FORMAT);
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

export const initializeDate = (dateString: string) => {
  const supportedFormats = ['YYYY-MM-DD', 'DD.MM.YYYY'];
  return dayjs(dateString, supportedFormats).utc(true).startOf('day');
};

export const prettifyDateString = (dateString: string) => {
  const prettyDateFormat = 'DD.MM.YYYY';

  const dateObject = initializeDate(dateString);
  return dateObject.format(prettyDateFormat);
};

export function isSameOrBefore(date: string | Dayjs | Date, otherDate: string | Dayjs | Date) {
  const dateFormats = ['YYYY-MM-DD', 'DD.MM.YYYY'];
  const dateInQuestion = dayjs(date, dateFormats).utc(true);
  const formattedOtherDate = dayjs(otherDate, dateFormats).utc(true);
  return dateInQuestion.isBefore(formattedOtherDate) || dateInQuestion.isSame(formattedOtherDate);
}

export const isValidDate = (date: any) => !Number.isNaN(new Date(date) as any);

export const getDateAndTime = (tidspunkt?: string): { date: string; time: string } | undefined => {
  if (!tidspunkt) {
    return undefined;
  }
  const dateTime = dayjs(tidspunkt);
  const date = dateTime.format(DDMMYYYY_DATE_FORMAT);
  const time = dateTime.format(HHMM_TIME_FORMAT);
  return { date, time };
};
