import { periodFormat } from '@navikt/ft-utils';

interface Props {
  dateStringFom: string;
  dateStringTom?: string;
  showTodayString?: boolean;
}

/**
 * PeriodLabel
 *
 * Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.
 *
 * Eksempel:
 * ```html
 * <PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
 * ```
 */
export const PeriodLabel = ({ dateStringFom, dateStringTom, showTodayString = false }: Props) => (
  <>{periodFormat(dateStringFom, dateStringTom, { showTodayString })}</>
);
