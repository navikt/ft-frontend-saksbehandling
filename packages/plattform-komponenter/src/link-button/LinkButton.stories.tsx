import { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from './LinkButton';

const meta = {
  title: 'Link button',
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('I was clicked'),
    children: 'Click me',
  },
};
