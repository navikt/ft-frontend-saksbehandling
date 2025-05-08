import { Meta, StoryObj } from '@storybook/react';

import { BeløpLabel } from './BeløpLabel';

const meta = {
  component: BeløpLabel,
  args: {
    beløp: 12345678,
  },
} satisfies Meta<typeof BeløpLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MedKroner: Story = {
  args: {
    withKr: true,
  },
};

export const NoBeløp: Story = {
  args: {
    beløp: undefined,
    withKr: true,
  },
};
