import { Radio } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfRadioGroup } from './RhfRadioGroup';

const meta = {
  component: RhfRadioGroup,
  tags: ['autodocs'],
  args: {
    readOnly: false,
    isEdited: false,
    control: undefined, // This will be provided by the decorator
  },
  decorators: rhfDecorator({ radiopre: 'no' }),
} satisfies Meta<typeof RhfRadioGroup>;

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
    legend: 'Dette er en radiogruppe',
    children: defaultRadios,
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    name: 'radiopre',
    legend: 'Dette er en readonly radioknapp med overstyrt markering',
    readOnly: true,
    isEdited: true,
    children: defaultRadios,
  },
};
