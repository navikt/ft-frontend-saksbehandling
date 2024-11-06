import type { Meta, StoryObj } from '@storybook/react';

import CheckboxPanel from './CheckboxPanel';
import { rhfDecorator } from '../../.storybook/decorators';

export default {
  component: CheckboxPanel,
  tags: ['autodocs'],
  decorators: rhfDecorator({ checkboxpanelpre: ['verdi1', 'verdi3'] }),
} satisfies Meta<typeof CheckboxPanel>;

type Story = StoryObj<typeof CheckboxPanel>;

const defaultCheckboxes = [
  { label: 'Verdi 1', value: 'verdi1' },
  { label: 'Verdi 2', value: 'verdi2' },
  { label: 'Verdi 3', value: 'verdi3' },
];

export const Default: Story = {
  args: {
    name: 'checkboxpanel',
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
  },
};

export const MedVerdi: Story = {
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
  },
};

export const HorisontalKnapper: Story = {
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper',
    checkboxes: defaultCheckboxes,
    isHorizontal: true,
  },
};
