import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfCheckbox } from './RhfCheckbox';

const meta = {
  component: RhfCheckbox,
  tags: ['autodocs'],
  decorators: [rhfDecorator],
  args: {
    name: 'field',
    label: 'Label',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    disabled: false,
    hideLabel: false,
  },
} satisfies Meta<typeof RhfCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er en checkbox',
  },
};

export const MedVerdi: Story = {
  parameters: { defaultValues: { field: true } },
  args: {
    description: 'Dette er en checkbox der verdi er valgt',
  },
};

export const ReadOnly: Story = {
  parameters: { defaultValues: { field: true } },
  args: {
    description: 'Dette er en checkbox som er readonly',
    readOnly: true,
  },
};
