import { Meta, StoryObj } from '@storybook/react';

import { LabelledContent } from './LabelledContent';

const meta = {
  title: 'plattform-komponenter/Labelled content',
  component: LabelledContent,
} satisfies Meta<typeof LabelledContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    content: 'Content',
  },
};
