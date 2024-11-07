import dayjs from 'dayjs';
import {
  removeSpacesFromNumber,
  fodselsnummerPattern,
  isValidFodselsnummer,
  DDMMYYYY_DATE_FORMAT,
} from '@navikt/ft-utils';

import {
  arrayMinLengthMessage,
  dateNotAfterOrEqualMessage,
  dateNotBeforeOrEqualMessage,
  dateRangesOverlappingBetweenPeriodTypesMessage,
  dateRangesOverlappingMessage,
  datesNotEqual,
  invalidDateMessage,
  invalidDatesInPeriodMessage,
  invalidDecimalMessage,
  invalidFodselsnummerFormatMessage,
  invalidFodselsnummerMessage,
  invalidIntegerMessage,
  invalidNumberMessage,
  invalidOrgNumberMessage,
  invalidOrgNumberOrFodselsnrMessage,
  invalidPeriodMessage,
  invalidPeriodRangeMessage,
  invalidSaksnummerOrFodselsnummerFormatMessage,
  invalidTextMessage,
  invalidValueMessage,
  isRequiredMessage,
  maxLengthMessage,
  maxLengthOrFodselsnrMessage,
  maxValueMessage,
  minLengthMessage,
  minValueMessage,
  hasWhiteSpace,
} from './messages';
import {
  dateRangesAreSequential,
  decimalRegex,
  integerRegex,
  isEmpty,
  isoDateRegex,
  nameGyldigRegex,
  nameRegex,
  numberRegex,
  saksnummerOrFodselsnummerPattern,
  textGyldigRegex,
  textRegex,
  tomorrow,
  yesterday,
  numberOptionalNegativeRegex,
  integerOptionalNegativeRegex,
  today,
} from './validatorsHelper';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

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

export const requiredIfNotPristine = (
  value?: InputValue | null, // NOSONAR
  // @ts-ignore Fiks
  _allValues: any,
  props: { pristine: boolean },
): FormValidationResult => (props.pristine || !isEmpty(value) ? undefined : isRequiredMessage());

export const requiredIfCustomFunctionIsTrue =
  (
    // @ts-ignore Fiks
    isRequiredFunction: (values?: InputValue | null, props: { pristine: boolean }) => any,
  ) =>
  (
    value?: InputValue | null, // NOSONAR
    allValues?: InputValue | null, // NOSONAR
    // @ts-ignore Fiks
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
  (number: number): FormValidationResult =>
    number >= length ? null : minValueMessage(length);
export const maxValue =
  (length: number) =>
  (number: number): FormValidationResult =>
    number <= length ? null : maxValueMessage(length);

export const minValueFormatted =
  (min: number) =>
  (number: number): FormValidationResult =>
    removeSpacesFromNumber(number) >= min ? null : minValueMessage(min);
export const maxValueFormatted =
  (max: number) =>
  (number: number): FormValidationResult =>
    removeSpacesFromNumber(number) <= max ? null : maxValueMessage(max);

export const hasValidOrgNumber = (number: number): FormValidationResult =>
  number.toString().trim().length === 9 ? null : invalidOrgNumberMessage();
export const hasValidOrgNumberOrFodselsnr = (number: number): FormValidationResult =>
  number.toString().trim().length === 9 || number.toString().trim().length === 11
    ? null
    : invalidOrgNumberOrFodselsnrMessage();
export const hasNoWhiteSpace = (value: string): FormValidationResult => (/\s/g.test(value) ? hasWhiteSpace() : null);

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
  isEmpty(text) || saksnummerOrFodselsnummerPattern.test(text) ? null : invalidSaksnummerOrFodselsnummerFormatMessage();

export const hasValidDate = (text: string): FormValidationResult =>
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

export const dateIsBefore =
  (dateToCheckAgainst: string, errorMessageFunction: (date: string) => FormValidationResult) =>
  (inputDate: string): FormValidationResult =>
    isEmpty(inputDate) || dayjs(inputDate).isBefore(dayjs(dateToCheckAgainst).startOf('day'))
      ? null
      : errorMessageFunction(dayjs(dateToCheckAgainst).format(DDMMYYYY_DATE_FORMAT));

export const dateRangesNotOverlapping = (ranges: string[][]): FormValidationResult =>
  dateRangesAreSequential(ranges) ? null : dateRangesOverlappingMessage();
export const dateRangesNotOverlappingCrossTypes = (ranges: string[][]): FormValidationResult =>
  dateRangesAreSequential(ranges) ? null : dateRangesOverlappingBetweenPeriodTypesMessage();

export const dateBeforeToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateBeforeOrEqual(yesterday())(text);
export const dateBeforeOrEqualToToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateBeforeOrEqual(today())(text);
export const dateAfterToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateAfterOrEqual(tomorrow())(text);
export const dateAfterOrEqualToToday = (text: dayjs.Dayjs | string | undefined): FormValidationResult =>
  dateAfterOrEqual(today())(text);

export const hasValidFodselsnummerFormat = (text: string): FormValidationResult =>
  !fodselsnummerPattern.test(text) ? invalidFodselsnummerFormatMessage() : null;
export const hasValidFodselsnummer = (text: string): FormValidationResult =>
  !isValidFodselsnummer(text) ? invalidFodselsnummerMessage() : null;

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
export const arrayMinLength =
  (length: number) =>
  (value: string | any[]): FormValidationResult =>
    value && value.length >= length ? null : arrayMinLengthMessage(length);

export const dateIsAfter = (date: string, checkAgainsDate: string): boolean => dayjs(date).isAfter(checkAgainsDate);
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

export const validateProsentandel = (prosentandel: string | number): FormValidationResult =>
  required(prosentandel) || hasValidDecimal(prosentandel) || hasValidNumber(prosentandel.toString().replace('.', ''));

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
