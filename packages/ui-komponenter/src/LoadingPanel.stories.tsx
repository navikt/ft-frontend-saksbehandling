import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoadingPanel } from './LoadingPanel';

const meta = {
  component: LoadingPanel,
} satisfies Meta<typeof LoadingPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
