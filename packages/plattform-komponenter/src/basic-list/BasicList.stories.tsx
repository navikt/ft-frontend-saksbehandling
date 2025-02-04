import { Meta, StoryObj } from '@storybook/react';

import { BasicList } from './BasicList';

const meta = {
  title: 'BasicList',
  component: BasicList,
} satisfies Meta<typeof BasicList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elements: [<p key="1">Dette er et listeelement</p>, <p key="2">Dette er et annet listeelmeent</p>],
  },
};
