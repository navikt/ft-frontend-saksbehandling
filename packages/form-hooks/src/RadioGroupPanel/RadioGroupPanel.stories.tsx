import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { rhfDecorator } from '../../.storybook/decorators';
import { RadioGroupPanel } from './RadioGroupPanel';

const meta = {
  title: 'form-hooks/RadioGroupPanel',
  component: RadioGroupPanel,
  tags: ['autodocs'],
  args: {
    isHorizontal: false,
    isReadOnly: false,
    isEdited: false,
  },
  decorators: rhfDecorator({ radiopre: 'no' }),
} satisfies Meta<typeof RadioGroupPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultRadios = [
  { label: 'Oppfylt', value: 'yes' },
  { label: 'Ikke oppfylt', value: 'no' },
  { label: 'Delvis oppfylt', value: 'partial' },
];

export const Default: Story = {
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios,
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios,
  },
};

export const HorisontalKnapper: Story = {
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios,
  },
};

export const MedBoolskVerdier: Story = {
  args: {
    name: 'radiopre',
    label: 'Dette er en radioknapp som er readonly',
    isTrueOrFalseSelection: true,
    radios: [
      { label: 'Ja', value: 'true' },
      { label: 'Nei', value: 'false' },
    ],
  },
};

export const MedInnhold: Story = {
  args: {
    name: 'radio',
    label: 'Dette er radioknapper med innhold',
    radios: [
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
  },
};
