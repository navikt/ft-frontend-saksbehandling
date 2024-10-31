import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

export const isoDateRegex = /(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/;
export const numberRegex = /^\d+([,.]\d+)?$/;
export const numberOptionalNegativeRegex = /^-?\d+([,.]\d+)?$/;
export const integerRegex = /^\s*\d+\s*$/;
export const integerOptionalNegativeRegex = /^\s*-?\d+\s*$/;
export const decimalRegex = /^\d+(.\d{1,2})?$/;
export const saksnummerOrFodselsnummerPattern = /^\d{0,18}$/;

export const textRegex = /^[\p{N}\p{L}\p{Z}\p{P}\p{Sc}\p{Sm}\n]*$/u; // Tillater farlig tegn som <>/&. Bruk formaterFritekst før innsending av fritekstfelt!
export const textGyldigRegex = /^[\p{N}\p{L}\p{Z}\p{P}\p{Sc}\p{Sm}\n]*$/ug;

export const nameRegex = /^[0-9\p{L}\p{Z}.'-]*$/u;
export const nameGyldigRegex = /^[0-9\p{L}\p{Z}.'-]*$/ug;

export const isEmpty = (text?: string | number | boolean | moment.Moment | null) =>
  text === null || text === undefined || text.toString().trim().length === 0;

export const yesterday = (): moment.Moment => moment().subtract(1, 'days').startOf('day');
export const tomorrow = (): moment.Moment => moment().add(1, 'days').startOf('day');

export const dateRangesAreSequential = (ranges: string[][]): boolean => {
  if (Array.isArray(ranges)) {
    const isBeforeTheNextDate = (element: string, index: number, array: string[]): boolean => {
      const current = moment(element, ISO_DATE_FORMAT).startOf('day');
      const next = index + 1 < array.length ? moment(array[index + 1], ISO_DATE_FORMAT).startOf('day') : null;
      return next !== null ? current.isBefore(next) : true;
    };

    return [...ranges]
      .sort((range1, range2) =>
        moment(range1[0], ISO_DATE_FORMAT).startOf('day').isAfter(moment(range2[0], ISO_DATE_FORMAT).startOf('day'))
          ? 1
          : -1,
      )
      .map(range => (range[0] === range[1] ? [range[0]] : range))
      .reduce((range1, range2) => range1.concat(range2))
      .every(isBeforeTheNextDate);
  }

  return true;
};
