import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfNumericField } from './RhfNumericField';

const meta = {
  component: RhfNumericField,
  tags: ['autodocs'],
  decorators: [rhfDecorator],
  args: {
    label: 'Label',
    hideLabel: false,
    name: 'field',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    isEdited: false,
    disabled: false,
    forceTwoDecimalDigits: false,
  },
} satisfies Meta<typeof RhfNumericField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er et nummerfelt',
    forceTwoDecimalDigits: true,
  },
};

export const MedVerdi: Story = {
  parameters: { defaultValues: { field: 45.1 } },
  args: {
    description: 'Dette er et nummerfelt der verdi er valgt',
  },
};

export const ReadOnly: Story = {
  parameters: { defaultValues: { field: 45.1 } },
  args: {
    description: 'Dette er et nummerfelt som er readonly',
    readOnly: true,
  },
};

export const MedValidering: Story = {
  args: {
    forceTwoDecimalDigits: true,
    validate: [(value: string) => (value ? undefined : 'Skriv inn et tall')],
  },
};
