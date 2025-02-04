import { FormattedDate } from 'react-intl';

export interface Props {
  dateString: string;
}

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
export const DateLabel = ({ dateString }: Props) => (
  <FormattedDate day="2-digit" month="2-digit" year="numeric" value={new Date(dateString)} />
);
