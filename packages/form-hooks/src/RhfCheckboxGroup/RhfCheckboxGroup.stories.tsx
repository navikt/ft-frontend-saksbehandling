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
    control: undefined, // This will be provided by the decorator
  },
  render: args => (
    <RhfCheckboxGroup {...args}>
      <Checkbox value="verdi1">Verdi 1</Checkbox>
      <Checkbox value="verdi2">Verdi 2</Checkbox>
      <Checkbox value="verdi3">Verdi 3</Checkbox>
    </RhfCheckboxGroup>
  ),
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
