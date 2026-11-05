import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfSelect } from './RhfSelect';

const meta = {
  component: RhfSelect,
  tags: ['autodocs'],
  decorators: [rhfDecorator],
  args: {
    label: 'Label',
    name: 'field',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    isEdited: false,
    disabled: false,
    hideLabel: false,
    align: undefined,
  },
} satisfies Meta<typeof RhfSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er en dropdown',
    selectValues: [
      <option value="value1" key="1">
        Test 1
      </option>,
      <option value="value2" key="2">
        Test 2
      </option>,
    ],
  },
};

export const MedVerdi: Story = {
  parameters: { defaultValues: { field: 'value3' } },
  args: {
    description: 'Dette er en dropdown der verdi er valgt',
    selectValues: [
      <option value="value3" key="1">
        Test 3
      </option>,
      <option value="value4" key="2">
        Test 4
      </option>,
    ],
  },
};

export const ReadOnly: Story = {
  parameters: MedVerdi.parameters,
  args: {
    description: 'Dette er en dropdown som er readonly',
    readOnly: true,
    selectValues: [
      <option value="value3" key="1">
        Test 3
      </option>,
      <option value="value4" key="2">
        Test 4
      </option>,
    ],
  },
};

export const Høyrestilt: Story = {
  parameters: MedVerdi.parameters,
  args: {
    ...MedVerdi.args,
    align: 'right',
  },
};

export const Deaktivert: Story = {
  parameters: MedVerdi.parameters,
  args: {
    ...MedVerdi.args,
    description: 'Dette er en dropdown som er deaktivert',
    disabled: true,
  },
};

export const MedValidering: Story = {
  args: {
    ...Default.args,
    validate: [value => (value ? undefined : 'Velg en verdi')],
  },
};
