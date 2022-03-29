import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@ft-frontend-saksbehandling/utils';

import DateTimeLabel from './DateTimeLabel';

const intl = createIntl({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

export default {
  title: 'ui-komponenter/DateTimeLabel',
  component: DateTimeLabel,
};

export const Default = () => (
  <RawIntlProvider value={intl}>
    <DateTimeLabel
      dateTimeString="2017-08-02T00:54:25.455"
    />
  </RawIntlProvider>
);

export const NyttFormat = () => (
  <RawIntlProvider value={intl}>
    <DateTimeLabel
      dateTimeString="2017-08-02T00:54:25.455"
      useNewFormat
    />
  </RawIntlProvider>
);
