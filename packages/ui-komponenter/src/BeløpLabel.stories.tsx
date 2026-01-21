import type { Meta, StoryObj } from '@storybook/react-vite';

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

export const MedAvrundetDesimal: Story = {
  args: {
    beløp: 2345678.359999,
  },
};

export const MedAvrundetNagativDesimal: Story = {
  args: {
    beløp: '-96164.456',
  },
};

export const MedKroner: Story = {
  args: {
    kr: true,
  },
};

export const NoBeløp: Story = {
  args: {
    beløp: undefined,
    kr: true,
  },
};
export const RødFargeBeløp: Story = {
  args: {
    beløp: 0,
    kr: false,
    rød: true,
  },
};
