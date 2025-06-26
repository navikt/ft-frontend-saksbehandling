import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfNumericField } from './RhfNumericField';

const meta = {
  component: RhfNumericField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testnumberpre: 45.1 }),
} satisfies Meta<typeof RhfNumericField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er et numberfelt',
    name: 'testnumber',
    forceTwoDecimalDigits: true,
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er et numberfelt der verdi er valgt',
    name: 'testnumberpre',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er et numberfelt som er readonly',
    name: 'testnumberpre',
    readOnly: true,
  },
};
