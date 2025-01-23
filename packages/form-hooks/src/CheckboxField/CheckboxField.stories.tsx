import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxField } from './CheckboxField';
import { rhfDecorator } from '../../.storybook/decorators';

const meta = {
  component: CheckboxField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testcheckboxpre: true }),
} satisfies Meta<typeof CheckboxField>;

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
