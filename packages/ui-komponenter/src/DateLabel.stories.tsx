import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { createIntl } from '@ft-frontend-saksbehandling/utils';
import DateLabel from './DateLabel';

const intl = createIntl({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

export default {
  title: 'ui-komponenter/DateLabel',
  component: DateLabel,
};

const Template: Story = () => (
  <RawIntlProvider value={intl}>
    <DateLabel
      dateString="2017-10-02"
    />
  </RawIntlProvider>
);

export const Default = Template.bind({});
