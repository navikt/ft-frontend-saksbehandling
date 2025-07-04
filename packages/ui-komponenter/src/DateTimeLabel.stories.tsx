import { RawIntlProvider } from 'react-intl';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { createIntl } from '@navikt/ft-utils';

import { DateTimeLabel } from './DateTimeLabel';

const intl = createIntl({});

const meta: Meta<typeof DateTimeLabel> = {
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
    dateTimeString: '2024-05-02T09:54:21',
  },
};

type Story = StoryObj<typeof DateTimeLabel>;

export const Default: Story = {};

export const MedTilpassetUtrykk: Story = {
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    year: '2-digit',
    second: '2-digit',
  },
};

export default meta;
