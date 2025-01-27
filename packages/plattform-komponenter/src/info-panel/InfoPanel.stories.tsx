import { Meta, StoryObj } from '@storybook/react';

import { InfoPanel } from './InfoPanel';

const meta = {
  title: 'Info panel',
  component: InfoPanel,
} satisfies Meta<typeof InfoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    children: 'En type informasjon',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'En annen type informasjon',
  },
};
