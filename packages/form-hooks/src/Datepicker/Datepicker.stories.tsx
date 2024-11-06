import type { Meta, StoryObj } from '@storybook/react';

import Datepicker from './Datepicker';
import { rhfDecorator } from '../../.storybook/decorators';

export default {
  component: Datepicker,
  tags: ['autodocs'],
  decorators: rhfDecorator({ datepickerFieldPre: '2022-10-11' }),
} satisfies Meta<typeof Datepicker>;

type Story = StoryObj<typeof Datepicker>;

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
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24'),
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
    isReadOnly: true,
    isEdited: true,
  },
};
