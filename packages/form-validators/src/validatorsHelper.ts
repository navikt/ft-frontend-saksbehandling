import dayjs from 'dayjs';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

export const isoDateRegex = /(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/;
export const numberRegex = /^\d+([,.]\d+)?$/;
export const numberOptionalNegativeRegex = /^-?\d+([,.]\d+)?$/;
export const integerRegex = /^\s*\d+\s*$/;
export const integerOptionalNegativeRegex = /^\s*-?\d+\s*$/;
export const decimalRegex = /^\d+(.\d{1,2})?$/;
export const saksnummerOrFodselsnummerPattern = /^\d{0,18}$/;

export const textRegex = /^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u;
export const textGyldigRegex = /[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu;

export const nameRegex = /^[0-9\p{L}\p{Z}.'-]*$/u;
export const nameGyldigRegex = /[0-9\p{L}\p{Z}.'-]*/gu;

export const isEmpty = (text: string | number | boolean | dayjs.Dayjs | null | undefined) =>
  text === null || text === undefined || text.toString().trim().length === 0;

export const yesterday = (): dayjs.Dayjs => dayjs().subtract(1, 'days').startOf('day');
export const today = (): dayjs.Dayjs => dayjs().startOf('day');

export const dateRangesAreSequential = (ranges: string[][]): boolean => {
  if (Array.isArray(ranges)) {
    const isBeforeTheNextDate = (element: string, index: number, array: string[]): boolean => {
      const current = dayjs(element, ISO_DATE_FORMAT).startOf('day');
      const next = index + 1 < array.length ? dayjs(array[index + 1], ISO_DATE_FORMAT).startOf('day') : null;
      return next !== null ? current.isBefore(next) : true;
    };

    return [...ranges]
      .sort((range1, range2) =>
        dayjs(range1[0], ISO_DATE_FORMAT).startOf('day').isAfter(dayjs(range2[0], ISO_DATE_FORMAT).startOf('day'))
          ? 1
          : -1,
      )
      .map(range => (range[0] === range[1] ? [range[0]] : range))
      .reduce((range1, range2) => range1.concat(range2))
      .every(isBeforeTheNextDate);
  }

  return true;
};
