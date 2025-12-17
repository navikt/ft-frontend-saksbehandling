import type { Meta, StoryObj } from '@storybook/react-vite';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { Avviksberegninger } from './Avviksberegninger';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  decorators: [withIntl],
  component: Avviksberegninger,
} satisfies Meta<typeof Avviksberegninger>;

export default meta;

type Story = StoryObj<typeof Avviksberegninger>;

export const AvviksberegningerFlereTyper: Story = {
  args: {
    sammenligningsgrunnlagPrStatus: [
      {
        sammenligningsgrunnlagFom: '2024-12-01',
        sammenligningsgrunnlagTom: '2025-11-30',
        rapportertPrAar: 480000,
        avvikPromille: 300,
        avvikProsent: 30,
        sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
        differanseBeregnet: 144000,
      },
      {
        sammenligningsgrunnlagFom: '2025-12-01',
        sammenligningsgrunnlagTom: '2025-12-31',
        rapportertPrAar: 380000,
        avvikPromille: 691.2521631,
        avvikProsent: 69.12521631,
        sammenligningsgrunnlagType: 'SAMMENLIGNING_SN',
        differanseBeregnet: -155314,
      },
    ],
  },
};
