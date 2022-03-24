import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@ft-frontend-saksbehandling/utils';
import { TimeLabel } from '@ft-frontend-saksbehandling/shared-components';

const intl = createIntl({});

export default {
  title: 'sharedComponents/TimeLabel',
  component: TimeLabel,
};

export const visTidslabel = () => (
  <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>
);
