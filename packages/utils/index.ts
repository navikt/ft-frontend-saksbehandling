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
  dateFormat,
  findDifferenceInMonthsAndDays,
  TIDENES_ENDE,
  timeFormat,
  getRangeOfMonths,
  getDateAndTime,
} from './src/dateUtils';
export { default as decodeHtmlEntity } from './src/decodeHtmlEntity';
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
export { default as guid } from './src/guid';
export { replaceNorwegianCharacters, getLanguageFromSprakkode } from './src/languageUtils';
export { notNull, isObjectEmpty, diff, isEqual, isObject, omit, omitOne, omitMany } from './src/objectUtils';
export { parseQueryString, buildPath, formatQueryString } from './src/urlUtils';

export { default as createIntl } from './src/createIntl';

export { default as bemUtils } from './src/bemUtils';
export { default as Period } from './src/Period';
export { prettifyDateString } from './src/dateUtils';
export { sortPeriodsByFomDate } from './src/periodUtils';
