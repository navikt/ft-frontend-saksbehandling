import { type Meta, type StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfTextField } from './RhfTextField';

const meta = {
  component: RhfTextField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testinputpre: 'Hei hei' }),
} satisfies Meta<typeof RhfTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er et inputfelt',
    name: 'testinput',
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er et inputfelt der verdi er valgt',
    name: 'testinputpre',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er et inputfelt som er readonly',
    name: 'testinputpre',
    readOnly: true,
  },
};
