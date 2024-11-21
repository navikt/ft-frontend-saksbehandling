import type { Meta, StoryObj } from '@storybook/react';

import CheckboxPanel from './CheckboxPanel';
import { rhfDecorator } from '../../.storybook/decorators';
import React from 'react';

const meta = {
  component: CheckboxPanel,
  tags: ['autodocs'],
  args: {
    isReadOnly: false,
    isEdited: false,
    isHorizontal: false,
  },
  decorators: rhfDecorator({ checkboxpanelpre: ['verdi1', 'verdi3'] }),
} satisfies Meta<typeof CheckboxPanel>;

export default meta;

type Story = StoryObj<typeof meta>;
const defaultCheckboxes = [
  { label: 'Verdi 1', value: 'verdi1' },
  { label: 'Verdi 2', value: 'verdi2' },
  { label: 'Verdi 3', value: 'verdi3' },
];

export const Default: Story = {
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel',
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre',
  },
};

export const HorisontalKnapper: Story = {
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper',
  },
};

export const MedInnhold: Story = {
  args: {
    checkboxes: [
      {
        label: '§14-7, 3. ledd',
        value: '14-7.3',
        element: <div>Søker omfattes av §14-7, 3. ledd.</div>,
      },
      {
        label: '§14-5, 2. ledd',
        value: '14-5.2',
        element: <div>Søker omfattes av §14-5, 2. ledd.</div>,
      },
    ],
    name: 'radio',
    label: 'Dette er checkboxpanel med innhold',
  },
};
