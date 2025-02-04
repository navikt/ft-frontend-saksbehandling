import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { Meta, StoryObj } from '@storybook/react';

import { createIntl } from '@navikt/ft-utils';

import { DateTimeLabel } from './DateTimeLabel';

const intl = createIntl({});

const meta: Meta<typeof DateTimeLabel> = {
  title: 'ui-komponenter/DateTimeLabel',
  component: DateTimeLabel,
  decorators: Story => (
    <RawIntlProvider value={intl}>
      <Story />
    </RawIntlProvider>
  ),
  argTypes: {
    year: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    month: { control: 'radio', options: ['numeric', '2-digit', 'long', 'short', 'narrow', undefined] },
    day: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    hour: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    minute: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    second: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    dateTimeString: { control: 'date' },
  },
  args: {
    dateTimeString: '2024-08-02T10:54:00',
  },
};

type Story = StoryObj<typeof DateTimeLabel>;

export const Default: Story = {};

export const MedTilpassetUtrykk: Story = {
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    second: '2-digit',
  },
};

export default meta;
