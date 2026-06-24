import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfDatepicker } from './RhfDatepicker';

const meta = {
  component: RhfDatepicker,
  tags: ['autodocs'],
  decorators: rhfDecorator({ datepickerFieldPre: '2022-10-11' }),
  args: {
    control: undefined, // This will be provided by the decorator
  },
} satisfies Meta<typeof RhfDatepicker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse',
  },
};

export const MedDisabledDatoer: Story = {
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11'),
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en datepicker der verdi er valgt',
    name: 'datepickerFieldPre',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24'),
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er en datepicker som er readonly',
    name: 'datepickerFieldPre',
    readOnly: true,
    isEdited: true,
  },
};

export const MedEgneInputFormat: Story = {
  args: {
    name: 'datepickerFieldCustomInputFormat',
    label: 'Dette er en datepicker med egne inputformat',
    inputFormats: ['DD-MM-YYYY', 'DDMMYY'],
  },
};
