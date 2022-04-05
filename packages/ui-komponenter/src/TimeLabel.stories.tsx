import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import TimeLabel from './TimeLabel';

const intl = createIntl({});

export default {
  title: 'TimeLabel',
  component: TimeLabel,
};

export const visTidslabel = () => (
  <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>
);
