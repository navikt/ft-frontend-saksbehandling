import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from '../../index';
import { rhfDecorator } from '../../.storybook/decorators';

export default {
  component: NumberField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testnumberpre: 45.1 }),
} satisfies Meta<typeof NumberField>;

type Story = StoryObj<typeof NumberField>;

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
