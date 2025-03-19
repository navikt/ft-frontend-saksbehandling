import { dateTimeFormat, DateTimeFormatOptions } from '@navikt/ft-utils';

export type Props = {
  dateTimeString: string;
} & DateTimeFormatOptions;

/**
 * DateTimeLabel
 *
 * Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.
 *
 * Eksempel:
 * ```html
 * <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
 * ```
 */
export const DateTimeLabel = ({ dateTimeString, ...rest }: Props) => <>{dateTimeFormat(dateTimeString, rest)}</>;
