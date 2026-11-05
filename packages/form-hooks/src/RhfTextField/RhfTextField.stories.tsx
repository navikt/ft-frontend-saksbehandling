import { type Meta, type StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfTextField } from './RhfTextField';

const meta = {
  component: RhfTextField,
  tags: ['autodocs'],
  decorators: [rhfDecorator],
  args: {
    name: 'field',
    label: 'Label',
    control: undefined, // This will be provided by the decorator
    readOnly: false,
    isEdited: false,
    disabled: false,
    hideLabel: false,
    align: undefined,
  },
} satisfies Meta<typeof RhfTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er et inputfelt',
  },
};

export const MedVerdi: Story = {
  parameters: { defaultValues: { field: 'Hei hei' } },
  args: {
    description: 'Dette er et inputfelt der verdi er valgt',
  },
};

export const ReadOnly: Story = {
  parameters: MedVerdi.parameters,
  args: {
    description: 'Dette er et inputfelt som er readonly',
    readOnly: true,
  },
};

export const Høyrestilt: Story = {
  parameters: MedVerdi.parameters,
  args: {
    ...MedVerdi.args,
    align: 'right',
  },
};
