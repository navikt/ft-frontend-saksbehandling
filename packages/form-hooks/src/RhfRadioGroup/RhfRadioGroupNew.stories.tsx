import { Radio } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfRadioGroupNew } from './RhfRadioGroupNew';

const meta = {
  component: RhfRadioGroupNew,
  tags: ['autodocs'],
  args: {
    isReadOnly: false,
    isEdited: false,
    control: undefined, // This will be provided by the decorator
  },
  decorators: rhfDecorator({ radiopre: 'no' }),
} satisfies Meta<typeof RhfRadioGroupNew>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultRadios = (
  <>
    <Radio value="yes">Oppfylt</Radio>
    <Radio value="no">Ikke oppfylt</Radio>
    <Radio value="partial">Delvis oppfylt</Radio>
  </>
);

export const Default: Story = {
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    children: defaultRadios,
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    children: defaultRadios,
  },
};
