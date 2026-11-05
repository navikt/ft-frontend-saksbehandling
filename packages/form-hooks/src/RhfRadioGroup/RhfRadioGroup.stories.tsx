import { Radio } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfRadioGroup } from './RhfRadioGroup';

const meta = {
  component: RhfRadioGroup,
  tags: ['autodocs'],
  args: {
    legend: 'Legend',
    name: 'field',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    isEdited: false,
    disabled: false,
    hideLegend: false,
    children: (
      <>
        <Radio value="yes">Oppfylt</Radio>
        <Radio value="no">Ikke oppfylt</Radio>
        <Radio value="partial">Delvis oppfylt</Radio>
      </>
    ),
  },
  decorators: [rhfDecorator],
} satisfies Meta<typeof RhfRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er en beskrivelse',
  },
};

export const MedValidering: Story = {
  args: {
    description: 'Dette er en radiogruppe med validering',
    validate: [value => (value ? undefined : 'Velg en verdi')],
    children: (
      <>
        <Radio value="deaktivert" disabled>
          Deaktivert
        </Radio>
        <Radio value="verdi">Verdi</Radio>
      </>
    ),
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  parameters: { defaultValues: { field: 'no' } },
  args: {
    description: 'Dette er en readonly radioknapp med overstyrt markering',
    readOnly: true,
    isEdited: true,
  },
};
