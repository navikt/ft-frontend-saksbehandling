import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfTextarea } from './RhfTextarea';

const meta = {
  component: RhfTextarea,
  tags: ['autodocs'],
  decorators: [rhfDecorator],
  args: {
    name: 'field',
    label: 'Label',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    isEdited: false,
    disabled: false,
    hideLabel: false,
  },
} satisfies Meta<typeof RhfTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er et tekstfelt',
  },
};

export const MedVerdi: Story = {
  parameters: {
    defaultValues: {
      field: 'Ein tekst med linjeskift.\nNeste linje, så to linjeskift.\n\nSå tre linjeskift.\n\n\nSiste linje',
    },
  },
  args: {
    description: 'Dette er et tekstfelt der verdi er valgt',
  },
};

export const ReadOnly: Story = {
  parameters: MedVerdi.parameters,
  args: {
    description: 'Dette er et tekstfelt som er readonly',
    readOnly: true,
  },
};

export const MedMaxLength: Story = {
  args: {
    description: 'Dette er et tekstfelt med maks lengde',
    maxLength: 50,
  },
};

export const MedMBadge: Story = {
  args: {
    description: 'Dette er et tekstfelt med badge',
    badges: [
      {
        type: 'warning',
        titleText: 'Dette er en test',
      },
    ],
  },
};
