import React, { FunctionComponent } from 'react';
import { FormattedDate } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { BodyShort } from '@navikt/ds-react';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OwnProps {
  dateStringFom: string;
  dateStringTom?: string;
  showTodayString?: boolean;
  size?: 'medium' | 'small';
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
const PeriodLabel: FunctionComponent<OwnProps> = ({ dateStringFom, dateStringTom, showTodayString = false, size }) => (
  <BodyShort as="span" size={size}>
    <FormattedDate day="2-digit" month="2-digit" year="numeric" value={new Date(dateStringFom)} />
    {' - '}
    {dateStringTom && <FormattedDate day="2-digit" month="2-digit" year="numeric" value={new Date(dateStringTom)} />}
    {showTodayString && !dateStringTom && <span>{intl.formatMessage({ id: 'PeriodLabel.DateToday' })}</span>}
  </BodyShort>
);

export default PeriodLabel;
