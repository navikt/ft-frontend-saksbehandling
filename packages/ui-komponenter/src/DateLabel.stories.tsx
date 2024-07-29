import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { StoryFn } from '@storybook/react';

import { createIntl } from '@navikt/ft-utils';
import DateLabel from './DateLabel';

const intl = createIntl({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

export default {
  title: 'DateLabel',
  component: DateLabel,
};

const Template: StoryFn = () => (
  <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>
);

export const Default = Template.bind({});
