import { Checkbox } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfCheckboxGroup } from './RhfCheckboxGroup';

const meta = {
  component: RhfCheckboxGroup,
  tags: ['autodocs'],
  args: {
    name: 'field',
    legend: 'Legend',
    readOnly: false,
    isEdited: false,
    disabled: false,
    hideLegend: false,
    control: undefined,
    children: [
      <Checkbox key="verdi1" value="verdi1">
        Verdi 1
      </Checkbox>,
      <Checkbox key="verdi2" value="verdi2">
        Verdi 2
      </Checkbox>,
      <Checkbox key="verdi3" value="verdi3">
        Verdi 3
      </Checkbox>,
    ],
  },
  decorators: [rhfDecorator],
} satisfies Meta<typeof RhfCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er en beskrivelse',
  },
};

export const MedVerdi: Story = {
  parameters: { defaultValues: { field: ['verdi1', 'verdi3'] } },
  args: {
    description: 'Dette er en checkboxpanel der verdi er valgt',
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  parameters: { defaultValues: { field: ['verdi1', 'verdi3'] } },
  args: {
    readOnly: true,
    isEdited: true,
    description: 'Dette er en readonly checkboxpanel med overstyrt markering',
  },
};

export const MedValidering: Story = {
  args: {
    description: 'Dette er en checkboks med validering',
    validate: [checkedElements => (checkedElements?.length ? undefined : 'Velg minst  ett element')],
    children: [
      <Checkbox key="deaktivert" value="deaktivert" disabled>
        Deaktivert
      </Checkbox>,
      <Checkbox key="verdi" value="verdi">
        Verdi
      </Checkbox>,
    ],
  },
};
