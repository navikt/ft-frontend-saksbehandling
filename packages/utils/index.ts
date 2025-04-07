export { range, haystack, isArrayEmpty, unique } from './src/arrayUtils';
export { isIE11, isEdge, getRelatedTargetIE11, forhandsvisDokument } from './src/browserUtils';
export {
  formatCurrencyWithKr,
  formatCurrencyNoKr,
  removeSpacesFromNumber,
  parseCurrencyInput,
} from './src/currencyUtils';
export {
  addDaysToDate,
  calcDays,
  calcDaysAndWeeks,
  calcDaysAndWeeksWithWeekends,
  findDifferenceInMonthsAndDays,
  TIDENES_ENDE,
  getRangeOfMonths,
  getDateAndTime,
} from './src/dateUtils';
export { dateFormat, dateTimeFormat, timeFormat } from './src/dateFormat';
export type { DateFormatOptions, DateTimeFormatOptions } from './src/dateFormat';
export { decodeHtmlEntity } from './src/decodeHtmlEntity';
export { fodselsnummerPattern, isValidFodselsnummer } from './src/fodselsnummerUtils';
export {
  ISO_DATE_FORMAT,
  DDMMYYYY_DATE_FORMAT,
  DDMMYY_DATE_FORMAT,
  HHMM_TIME_FORMAT,
  DATE_TIME_FORMAT,
  YYYY_MM_FORMAT,
  ACCEPTED_DATE_INPUT_FORMATS,
} from './src/formats';
export { formaterFritekst } from './src/stringUtils';
export { assertUnreachable } from './src/switchCaseUtils';
export { guid } from './src/guid';
export { replaceNorwegianCharacters, getLanguageFromSprakkode } from './src/languageUtils';
export { notNull, isObjectEmpty, diff, isEqual, isObject, omit, omitOne, omitMany } from './src/objectUtils';
export { parseQueryString, buildPath, formatQueryString } from './src/urlUtils';

export { createIntl } from './src/createIntl';
export { BTag } from './src/createTags';

export { bemUtils } from './src/bemUtils';
export { Period } from './src/Period';
export { prettifyDateString } from './src/dateUtils';
export { sortPeriodsByFomDate, periodFormat } from './src/periodUtils';
