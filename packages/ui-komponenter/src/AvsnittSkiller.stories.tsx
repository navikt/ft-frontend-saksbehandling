import { Meta, StoryObj } from '@storybook/react-vite';

import { AvsnittSkiller } from './AvsnittSkiller';

const meta = {
  component: AvsnittSkiller,
  render: () => (
    <div>
      Dette er en tekst
      <AvsnittSkiller />
      Dette er en tekst
    </div>
  ),
} satisfies Meta<typeof AvsnittSkiller>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
