import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfDatepicker } from './RhfDatepicker';

const meta = {
  component: RhfDatepicker,
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
  },
} satisfies Meta<typeof RhfDatepicker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Dette er en nærmere beskrivelse',
  },
};

export const MedDisabledDatoer: Story = {
  args: {
    description: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11'),
  },
};

export const MedVerdi: Story = {
  parameters: {
    defaultValues: { field: '2022-10-11' },
  },
  args: {
    description: 'Dette er en datepicker der verdi er valgt',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24'),
  },
};

export const ReadOnly: Story = {
  parameters: {
    defaultValues: { field: '2022-10-11' },
  },
  args: {
    description: 'Dette er en datepicker som er readonly',
    readOnly: true,
    isEdited: true,
  },
};
export const MedUgyldigDato: Story = {
  parameters: {
    defaultValues: { field: '31092026' },
  },
  args: {
    description: 'Dette er en datepicker med ugyldig dato',
  },
};

export const MedValidering: Story = {
  args: {
    description: 'Dette er et datefelt med validering og egne inputformat',
    validate: [value => (value && dayjs(value, ISO_DATE_FORMAT, true).isValid() ? undefined : 'Ugyldig dato')],
    inputFormats: ['DD-MM-YYYY', 'DDMMYY'],
  },
};
