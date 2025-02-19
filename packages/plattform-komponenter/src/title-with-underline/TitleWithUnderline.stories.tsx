import { Meta, StoryObj } from '@storybook/react';

import { TitleWithUnderline } from './TitleWithUnderline';

const meta = {
  title: 'plattform-komponenter/Title with underline',
  component: TitleWithUnderline,
} satisfies Meta<typeof TitleWithUnderline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title',
  },
};
