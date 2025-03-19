import { dateFormat, type DateFormatOptions } from '@navikt/ft-utils';

type Props = {
  dateString: string;
} & DateFormatOptions;

/**
 * DateLabel
 *
 * Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.
 *
 * Eksempel:
 * ```html
 * <DateLabel dateString="2017-08-31" />
 * ```
 */
export const DateLabel = ({ dateString, year, month, day }: Props) => (
  <>{dateFormat(dateString, { year, month, day })}</>
);
