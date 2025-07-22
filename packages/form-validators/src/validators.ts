import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  DDMMYYYY_DATE_FORMAT,
  fodselsnummerPattern,
  isValidFodselsnummer,
  removeSpacesFromNumber,
} from '@navikt/ft-utils';

import {
  dateNotAfterOrEqualMessage,
  dateNotBeforeOrEqualMessage,
  dateRangesOverlappingMessage,
  datesNotEqual,
  illegalWhiteSpaceMessage,
  invalidDateMessage,
  invalidDatesInPeriodMessage,
  invalidDecimalMessage,
  invalidFodselsnrFormatMessage,
  invalidFodselsnrMessage,
  invalidIntegerMessage,
  invalidNumberMessage,
  invalidOrgNumberMessage,
  invalidOrgNumberOrFodselsnrMessage,
  invalidPeriodMessage,
  invalidPeriodRangeMessage,
  invalidSaksnrOrFodselsnrFormatMessage,
  invalidTextMessage,
  invalidValueMessage,
  isRequiredMessage,
  maxLengthMessage,
  maxLengthOrFodselsnrMessage,
  maxValueMessage,
  minLengthMessage,
  minValueMessage,
  sammeFodselsnrSomSokerMessage,
} from './messages';
import {
  dateRangesAreSequential,
  decimalRegex,
  integerOptionalNegativeRegex,
  integerRegex,
  isEmpty,
  isoDateRegex,
  nameGyldigRegex,
  nameRegex,
  numberOptionalNegativeRegex,
  numberRegex,
  saksnummerOrFodselsnummerPattern,
  textGyldigRegex,
  textRegex,
  today,
  yesterday,
} from './validatorsHelper';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

type DateType = dayjs.Dayjs | string;

type InputValue = string | number | boolean;

type FormValidationResult = string | null | undefined;

export const maxLengthOrFodselsnr =
  (length: number) =>
  (text: string): FormValidationResult =>
    isEmpty(text) || text.toString().trim().length <= length ? null : maxLengthOrFodselsnrMessage(length);
export const required = (value?: InputValue): FormValidationResult =>
  isEmpty(value) ? isRequiredMessage() : undefined;
export const notDash = (value: InputValue): FormValidationResult => (value === '-' ? isRequiredMessage() : undefined);

export const requiredIfCustomFunctionIsTrue =
  (
    // @ts-expect-error Fiks
    isRequiredFunction: (values?: InputValue | null, props: { pristine: boolean }) => any,
  ) =>
  (
    value?: InputValue | null, // NOSONAR
    allValues?: InputValue | null, // NOSONAR
    // @ts-expect-error Fiks
    props: { pristine: boolean },
  ): FormValidationResult =>
    isEmpty(value) && isRequiredFunction(allValues, props) ? isRequiredMessage() : undefined;

export const requiredIfCustomFunctionIsTrueNew =
  (isRequiredFunction: (value?: InputValue) => boolean) =>
  (value?: InputValue): FormValidationResult =>
    isEmpty(value) && isRequiredFunction(value) ? isRequiredMessage() : undefined;

export const minLength =
  (length: number) =>
  (text: string): FormValidationResult =>
    isEmpty(text) || text.toString().trim().length >= length ? null : minLengthMessage(length);
export const maxLength =
  (length: number) =>
  (text: string): FormValidationResult =>
    isEmpty(text) || text.toString().trim().length <= length ? null : maxLengthMessage(length);

export const minValue =
  (length: number) =>
  (number: number | string): FormValidationResult =>
    getNumberFromText(number) >= length ? null : minValueMessage(length);

export const maxValue =
  (length: number) =>
  (number: number | string): FormValidationResult =>
    getNumberFromText(number) <= length ? null : maxValueMessage(length);

export const maxValueFormatted =
  (max: number) =>
  (number: number | string): FormValidationResult =>
    removeSpacesFromNumber(number) <= max ? null : maxValueMessage(max);

const getNumberFromText = (number: string | number): number => {
  return typeof number === 'string' ? Number(number) : number;
};

export const hasValidOrgNumber = (number: string | number): FormValidationResult => {
  // Beholder logikken med å fjerne whitespace før og etter, men det er vel egentlig ikke noe validatoren bør gjøre?
  // Hvis man ikke fjerner de ved submit kan det være at backend ikke liker det
  const trimmedNumber = number.toString().trim();
  if (Number.isNaN(Number(trimmedNumber))) {
    return invalidOrgNumberMessage();
  }
  return trimmedNumber.length === 9 ? null : invalidOrgNumberMessage();
};

export const hasValidOrgNumberOrFodselsnr = (number: string | number): FormValidationResult =>
  number.toString().trim().length === 9 || number.toString().trim().length === 11
    ? null
    : invalidOrgNumberOrFodselsnrMessage();
export const hasNoWhiteSpace = (value: string): FormValidationResult =>
  /\s/g.test(value) ? illegalWhiteSpaceMessage() : null;

const hasValidNumber = (text: string | number): FormValidationResult =>
  isEmpty(text) || numberRegex.test(text.toString()) ? null : invalidNumberMessage(text.toString());
const hasValidInt = (text: string | number): FormValidationResult =>
  isEmpty(text) || integerRegex.test(text.toString()) ? null : invalidIntegerMessage(text.toString());
const hasValidDec = (text: string | number): FormValidationResult =>
  isEmpty(text) || decimalRegex.test(text.toString()) ? null : invalidDecimalMessage(text.toString());
export const hasValidInteger = (text: string | number): FormValidationResult =>
  hasValidNumber(text) || hasValidInt(text);
export const hasValidDecimal = (text: string | number): FormValidationResult =>
  hasValidNumber(text) || hasValidDec(text);

const hasValidPosOrNegNumber = (text: string): FormValidationResult =>
  isEmpty(text) || numberOptionalNegativeRegex.test(text) ? null : invalidNumberMessage(text);
const hasValidPosOrNegInt = (text: string): FormValidationResult =>
  isEmpty(text) || integerOptionalNegativeRegex.test(text) ? null : invalidIntegerMessage(text);
export const hasValidPosOrNegInteger = (text: string): FormValidationResult =>
  hasValidPosOrNegNumber(text) || hasValidPosOrNegInt(text);

export const hasValidSaksnummerOrFodselsnummerFormat = (text: string): FormValidationResult =>
  isEmpty(text) || saksnummerOrFodselsnummerPattern.test(text) ? null : invalidSaksnrOrFodselsnrFormatMessage();

export const hasValidDate = (text: string = ''): FormValidationResult =>
  isEmpty(text) || isoDateRegex.test(text) ? null : invalidDateMessage();

export const dateBeforeOrEqual =
  (latest: DateType) =>
  (text: dayjs.Dayjs | string | undefined): FormValidationResult => {
    const latestDate = dayjs(latest).endOf('day');
    return isEmpty(text) || dayjs(text).isSameOrBefore(latestDate)
      ? null
      : dateNotBeforeOrEqualMessage(latestDate.format(DDMMYYYY_DATE_FORMAT));
  };

export const dateAfterOrEqual =
  (earliest: DateType) =>
  (text: dayjs.Dayjs | string | undefined): FormValidationResult => {
    const earliestDate = dayjs(earliest).startOf('day');
    return isEmpty(text) || dayjs(text).isSameOrAfter(earliestDate)
      ? null
      : dateNotAfterOrEqualMessage(earliestDate.format(DDMMYYYY_DATE_FORMAT));
  };

export const dateRangesNotOverlapping = (ranges: string[][]): FormValidationResult =>
  dateRangesAreSequential(ranges) ? null : dateRangesOverlappingMessage();

export const dateBeforeToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateBeforeOrEqual(yesterday())(text);
export const dateBeforeOrEqualToToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateBeforeOrEqual(today())(text);

export const dateAfterOrEqualToToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateAfterOrEqual(today())(text);

export const hasValidFodselsnummerFormat = (text: string): FormValidationResult =>
  !fodselsnummerPattern.test(text) ? invalidFodselsnrFormatMessage() : null;
export const hasValidFodselsnummer = (text: string): FormValidationResult =>
  !isValidFodselsnummer(text) ? invalidFodselsnrMessage() : null;

export const harSammeFodselsnummerSomSoker = (fodeslnrSoker: string) => (foedselsnummer: string) =>
  foedselsnummer === fodeslnrSoker ? sammeFodselsnrSomSokerMessage() : null;

export const hasValidText = (text: string): FormValidationResult => {
  if (!textRegex.test(text)) {
    const illegalChars = text.replace(textGyldigRegex, '');
    return invalidTextMessage(illegalChars.replace(/[\t]/g, 'Tabulatortegn'));
  }
  return null;
};

export const hasValidName = (text: string): FormValidationResult => {
  if (!nameRegex.test(text)) {
    const illegalChars = text.replace(nameGyldigRegex, '');
    return invalidTextMessage(illegalChars.replace(/[\t]/g, 'Tabulatortegn'));
  }
  return null;
};

export const hasValidValue =
  (value: string) =>
  (invalidValue: string): FormValidationResult =>
    value === invalidValue ? invalidValueMessage(value) : null;

export const isDatesEqual = (date1: string, date2: string): FormValidationResult =>
  date1 !== date2 ? datesNotEqual(dayjs(date2).format(DDMMYYYY_DATE_FORMAT)) : null;

export const validPeriodeFomTom = (fomDate: string, tomDate: string): FormValidationResult => {
  if (isEmpty(fomDate) && isEmpty(tomDate)) {
    return null;
  }
  return dayjs(fomDate).isSameOrBefore(dayjs(tomDate).startOf('day')) ? null : invalidPeriodMessage();
};

export const hasValidPeriod = (fomDate: string, tomDate: string): FormValidationResult => {
  if (isEmpty(fomDate) && isEmpty(tomDate)) {
    return null;
  }
  if (!isoDateRegex.test(fomDate) || !isoDateRegex.test(tomDate)) {
    return invalidDatesInPeriodMessage();
  }
  return dayjs(fomDate).isSameOrBefore(dayjs(tomDate).startOf('day')) ? null : invalidPeriodMessage();
};

export const isWithinOpptjeningsperiode =
  (fomDateLimit: string, tomDateLimit: string) =>
  (fom: string, tom: string): FormValidationResult => {
    const isBefore = dayjs(fom).isBefore(dayjs(fomDateLimit));
    const isAfter = dayjs(tom).isAfter(dayjs(tomDateLimit));
    return isBefore || isAfter ? invalidPeriodRangeMessage() : null;
  };

export const ariaCheck = (): void => {
  let errors: any;
  setTimeout(() => {
    if (document.getElementsByClassName('skjemaelement__feilmelding').length > 0) {
      errors = document.getElementsByClassName('skjemaelement__feilmelding');
    } else if (document.getElementsByClassName('alertstripe--advarsel')) {
      errors = document.getElementsByClassName('alertstripe--advarsel');
    }
    if (errors && errors.length > 0) {
      const ariaNavTab = document.createAttribute('tabindex');
      ariaNavTab.value = '-1';
      const firstError = errors[0];
      firstError.setAttributeNode(ariaNavTab);
      const element = document.activeElement as HTMLElement;
      element.blur();
      firstError.focus();
    }
  }, 300);
};
