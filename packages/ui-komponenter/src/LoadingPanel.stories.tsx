import { Meta, StoryObj } from '@storybook/react';

import { LoadingPanel } from './LoadingPanel';

const meta = {
  title: 'ui-komponenter/LoadingPanel',
  component: LoadingPanel,
} satisfies Meta<typeof LoadingPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
