import type { Meta, StoryObj } from '@storybook/react';

import { rhfDecorator } from '../../.storybook/decorators';
import { CheckboxField } from './CheckboxField';

const meta = {
  title: 'form-hooks/CheckboxField',
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
