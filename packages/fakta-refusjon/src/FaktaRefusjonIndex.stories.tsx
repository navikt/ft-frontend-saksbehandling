import type { Meta, StoryObj } from '@storybook/react-vite';

import { FaktaRefusjonIndex } from './FaktaRefusjonIndex';

const meta = {
  component: FaktaRefusjonIndex,
} satisfies Meta<typeof FaktaRefusjonIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
