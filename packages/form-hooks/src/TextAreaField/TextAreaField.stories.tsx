import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { TextAreaField } from './TextAreaField';

const meta = {
  component: TextAreaField,
  tags: ['autodocs'],
  decorators: rhfDecorator({
    testTextAreaFieldPre:
      'Ein tekst med linjeskift.\nNeste linje, så to linjeskift.\n\nSå tre linjeskift.\n\n\nSiste linje',
  }),
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof meta>;

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
