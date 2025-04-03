import { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { Margin } from './Margin';

const meta = {
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    marginTop: Margin.xxLarge,
    marginBottom: Margin.large,
    children: <p>Dette er en box</p>,
  },
};
