import { Checkbox } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfCheckboxGroup } from './RhfCheckboxGroup';

const meta = {
  component: RhfCheckboxGroup,
  tags: ['autodocs'],
  args: {
    isReadOnly: false,
    isEdited: false,
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
  decorators: rhfDecorator({ checkboxpanelpre: ['verdi1', 'verdi3'] }),
} satisfies Meta<typeof RhfCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    name: 'checkboxpanel',
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    name: 'checkboxpanelpre',
  },
};

export const ReadOnlyMedOverstyrtMarkering: Story = {
  args: {
    isReadOnly: true,
    isEdited: true,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre',
  },
};

export const MedValidering: Story = {
  args: {
    validate: [
      checkedElements => (checkedElements.length < 1 ? 'Du må velge minst ett element' : undefined),
      checkedElements =>
        checkedElements.includes('verdi1') && checkedElements.includes('verdi2')
          ? 'Verdi 1 og 2 kan ikke velges samtidig'
          : undefined,
    ],
    label: 'Dette er en checkboks med validering',
    name: 'checkboxpanelpre',
  },
};
