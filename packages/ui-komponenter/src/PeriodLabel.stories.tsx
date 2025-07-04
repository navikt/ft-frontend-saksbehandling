import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { PeriodLabel } from './PeriodLabel';

const intl = createIntl({});

export default {
  component: PeriodLabel,
};

export const VisPeriodelabel = () => (
  <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>
);

export const VisPeriodelabelTilDagensDato = () => (
  <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>
);
