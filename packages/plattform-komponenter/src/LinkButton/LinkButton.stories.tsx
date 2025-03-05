import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from './LinkButton';

const meta = {
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: action('onClick'),
    children: 'Click me',
  },
};
