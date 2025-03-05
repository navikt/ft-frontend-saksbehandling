import { Meta, StoryObj } from '@storybook/react';

import { SystemButton } from './SystemButton';

const meta = {
  component: SystemButton,
} satisfies Meta<typeof SystemButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => null,
    isToggled: true,
  },
};
