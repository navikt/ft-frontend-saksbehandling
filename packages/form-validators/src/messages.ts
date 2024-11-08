import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const { formatMessage } = createIntl(messages);

export const dateNotBeforeOrEqualMessage = (limit: string): string =>
  formatMessage({ id: 'DateNotBeforeOrEqual' }, { limit });
export const dateNotAfterOrEqualMessage = (limit: string): string =>
  formatMessage({ id: 'DateNotAfterOrEqual' }, { limit });
export const dateRangesOverlappingMessage = (): string => formatMessage({ id: 'DateRangesOverlapping' });
export const dateRangesOverlappingBetweenPeriodTypesMessage = (): string =>
  formatMessage({ id: 'DateRangesOverlappingPeriodTypes' });
export const datesNotEqual = (value: string): string => formatMessage({ id: 'DatesNotEqual' }, { value });

export const invalidDateMessage = (): string => formatMessage({ id: 'InvalidDate' });
export const invalidDatesInPeriodMessage = (): string => formatMessage({ id: 'InvalidDatesInPeriod' });

export const invalidDecimalMessage = (text: string): string => formatMessage({ id: 'InvalidDecimal' }, { text });
export const invalidIntegerMessage = (text: string): string => formatMessage({ id: 'InvalidInteger' }, { text });
export const invalidNumberMessage = (text: string): string => formatMessage({ id: 'InvalidNumber' }, { text });

export const invalidFodselsnrMessage = (): string => formatMessage({ id: 'InvalidFodselsnr' });
export const invalidFodselsnrFormatMessage = (): string => formatMessage({ id: 'InvalidFodselsnrFormat' });

export const invalidOrgNumberMessage = (): string => formatMessage({ id: 'InvalidOrgnr' });
export const invalidOrgNumberOrFodselsnrMessage = (): string => formatMessage({ id: 'InvalidOrgnrOrFodselsnr' });

export const invalidPeriodMessage = (): string => formatMessage({ id: 'InvalidPeriod' });
export const invalidPeriodRangeMessage = (): string => formatMessage({ id: 'InvalidPeriodRange' });

export const invalidSaksnrOrFodselsnrFormatMessage = (): string =>
  formatMessage({
    id: 'InvalidSaksnrOrFodselsnrFormat',
  });

export const invalidTextMessage = (text: string): string => formatMessage({ id: 'InvalidText' }, { text });
export const invalidValueMessage = (value: string): string => formatMessage({ id: 'InvalidValue' }, { value });

export const illegalWhiteSpaceMessage = (): string => formatMessage({ id: 'IllegalWhiteSpace' });

export const isRequiredMessage = (): string => formatMessage({ id: 'IsRequired' });

export const maxLengthMessage = (length: number): string => formatMessage({ id: 'MaxLength' }, { length });
export const minLengthMessage = (length: number): string => formatMessage({ id: 'MinLength' }, { length });

export const maxLengthOrFodselsnrMessage = (length: number): string =>
  formatMessage({ id: 'MaxLengthOrFodselsnr' }, { length });

export const maxValueMessage = (length: number): string => formatMessage({ id: 'MaxValue' }, { length });
export const minValueMessage = (length: number): string => formatMessage({ id: 'MinValue' }, { length });

export const sammeFodselsnrSomSokerMessage = (): string => formatMessage({ id: 'SammeFodselsnrSomSoker' });
