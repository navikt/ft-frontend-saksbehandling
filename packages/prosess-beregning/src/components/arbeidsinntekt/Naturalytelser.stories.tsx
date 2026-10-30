import { RawIntlProvider } from 'react-intl';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { createIntl } from '@navikt/ft-utils';

import { Naturalytelser } from './Naturalytelser';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const meta = {
  component: Naturalytelser,
  decorators: [
    Story => (
      <RawIntlProvider value={intl}>
        <Story />
      </RawIntlProvider>
    ),
  ],
} satisfies Meta<typeof Naturalytelser>;

export default meta;

type Story = StoryObj<typeof meta>;

const naturalytelseEndringer = [
  {
    fom: '2026-01-01',
    tom: '2026-01-31',
    beløpPrMåned: 1000,
    beløpPrÅr: 12000,
  },
  {
    fom: '2026-02-01',
    tom: '2026-02-28',
    beløpPrMåned: 1500,
    beløpPrÅr: 18000,
  },
  {
    fom: '2026-03-01',
    tom: '2026-03-31',
    beløpPrMåned: 2000,
    beløpPrÅr: 24000,
  },
];

export const EnNaturalytelse: Story = {
  args: {
    naturalytelseEndringer: naturalytelseEndringer.slice(0, 1),
  },
};

export const TreNaturalytelser: Story = {
  args: {
    naturalytelseEndringer,
  },
};

export const IngenNaturalytelser: Story = {
  args: {
    naturalytelseEndringer: [],
  },
};
