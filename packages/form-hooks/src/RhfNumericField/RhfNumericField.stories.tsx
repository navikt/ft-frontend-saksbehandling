import type { Meta, StoryObj } from '@storybook/react-vite';

import { hasValidDecimal, hasValidOrgNumber, hasValidPosOrNegInteger, required } from '@navikt/ft-form-validators';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfNumericField } from './RhfNumericField';

const meta = {
  component: RhfNumericField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ verdi: 45.1 }),
  args: {
    control: undefined, // This will be provided by the decorator
  },
} satisfies Meta<typeof RhfNumericField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er et numberfelt',
    name: 'tomtfelt',
  },
};

export const Høyrestilt: Story = {
  args: {
    label: 'Høyrestilt tall',
    name: 'verdi',
    align: 'right',
    htmlSize: 10,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er et numberfelt som er readonly',
    name: 'verdi',
    readOnly: true,
  },
};

export const Deaktivert: Story = {
  args: {
    label: 'Deaktivert tallfelt',
    name: 'verdi',
    disabled: true,
  },
};

export const OrganisasjonsnummerMedValidering: Story = {
  args: {
    label: 'Organisasjonsnummer',
    description: 'Må være et gyldig organisasjonsnummer på 9 karakterer som er positivt',
    name: 'tomtfelt',
    validate: [required, hasValidOrgNumber],
  },
};

export const BeløpMedHeltallValidering: Story = {
  args: {
    label: 'Beløp',
    description: 'Må være positivt eller negativt heltall',
    name: 'tomtfelt',
    validate: [required, hasValidPosOrNegInteger],
  },
};

export const BeløpMedDesimalValidering: Story = {
  args: {
    label: 'Beløp',
    description: 'Må være positivt med maksimalt to desimaler',
    name: 'tomtfelt',
    validate: [required, hasValidDecimal],
  },
};
