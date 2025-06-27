import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfCheckbox } from './RhfCheckbox';

const meta = {
  component: RhfCheckbox,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testcheckboxpre: true }),
} satisfies Meta<typeof RhfCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er en checkbox',
    name: 'testcheckbox',
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en checkbox der verdi er valgt',
    name: 'testcheckboxpre',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er en checkbox som er readonly',
    name: 'testcheckboxpre',
    readOnly: true,
  },
};
