import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tittel',
    titleHref: 'href',
    children: <div style={{ color: 'white' }}>test</div>,
  },
};
