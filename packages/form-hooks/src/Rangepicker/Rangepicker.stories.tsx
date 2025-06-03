import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { Rangepicker } from './Rangepicker';

const meta = {
  component: Rangepicker,
  tags: ['autodocs'],
  decorators: rhfDecorator({ fomPre: '2022-10-22', tomPre: '2022-10-27' }),
} satisfies Meta<typeof Rangepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker',
  },
};

export const MedDisabledDatoer: Story = {
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker med disabled datoer',
    fromDate: new Date('2022-10-10'),
    toDate: new Date('2022-10-14'),
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en rangepicker der verdi er valgt',
    fomName: 'fomPre',
    tomName: 'tomPre',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er en rangepicker som er readonly',
    fomName: 'fomPre',
    tomName: 'tomPre',
    isReadOnly: true,
    isEdited: true,
  },
};
