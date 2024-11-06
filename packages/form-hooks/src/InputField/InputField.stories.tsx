import { type Meta, type StoryObj } from '@storybook/react';
import InputField from './InputField';
import { rhfDecorator } from '../../.storybook/decorators';

export default {
  component: InputField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testinputpre: 'Hei hei' }),
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof InputField>;

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
