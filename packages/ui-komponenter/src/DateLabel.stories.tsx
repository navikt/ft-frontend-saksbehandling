import type { Meta, StoryObj } from '@storybook/react-vite';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { DateLabel } from './DateLabel';

const withIntl = getIntlDecorator({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

const meta = {
  component: DateLabel,
  decorators: [withIntl],
  argTypes: {
    year: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    month: { control: 'radio', options: ['numeric', '2-digit', 'long', 'short', 'narrow', undefined] },
    day: { control: 'radio', options: ['numeric', '2-digit', undefined] },
    dateString: { control: 'date' },
  },
  args: {
    dateString: '2017-10-02',
  },
} satisfies Meta<typeof DateLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MedTilpassetUtrykk: Story = {
  args: {
    day: 'numeric',
    month: 'long',
    year: '2-digit',
  },
};
