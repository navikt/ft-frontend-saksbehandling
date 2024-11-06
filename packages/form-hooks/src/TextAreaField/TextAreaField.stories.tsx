import type { Meta, StoryObj } from '@storybook/react';

import TextAreaField from './TextAreaField';
import { rhfDecorator } from '../../.storybook/decorators';

export default {
  component: TextAreaField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testTextAreaFieldPre: 'Dette er en begrunnelse' }),
} satisfies Meta<typeof TextAreaField>;

type Story = StoryObj<typeof TextAreaField>;

export const Default: Story = {
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField',
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true,
  },
};

export const MedMaxLength: Story = {
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50,
  },
};

export const MedMBadge: Story = {
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [
      {
        type: 'warning',
        titleText: 'Dette er en test',
      },
    ],
  },
};
