import { BodyShort } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { LabeledValue } from './LabeledValue';

const meta = {
  title: 'LabeledValue',
  component: LabeledValue,
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof LabeledValue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VertikalMedTekstverdi: Story = {
  args: {
    label: 'Dette er en label',
    value: 'Dette er en tekstverdi',
    fieldType: 'text',
    horizontal: false,
  },
};

export const VertikalMedKomponent: Story = {
  args: {
    label: 'Dette er et dikt',
    value: (
      <div>
        <BodyShort>Liten?</BodyShort>
        <BodyShort>Jeg?</BodyShort>
        <BodyShort>Langtifra.</BodyShort>
        <BodyShort>Jeg er akkurat stor nok.</BodyShort>
        <BodyShort>Fyller meg selv helt</BodyShort>
        <BodyShort>på langs og på tvers</BodyShort>
        <BodyShort>fra øverst til nederst.</BodyShort>
        <BodyShort>Er du større enn deg selv</BodyShort>
        <BodyShort>kanskje?</BodyShort>
      </div>
    ),
    fieldType: 'component',
    horizontal: false,
  },
};

export const HorisontalMedTekstverdi: Story = {
  args: {
    label: 'Dette er en label:',
    value: 'Dette er en tekstverdi',
    fieldType: 'text',
    horizontal: true,
  },
};

export const HorisontalMedKomponent: Story = {
  args: {
    label: 'Opptjeningsperiode:',
    value: (
      <>
        <BodyShort>01.01.1996 - 19.05.1996</BodyShort>
        <BodyShort>4 måneder og 18 dager</BodyShort>
      </>
    ),
    fieldType: 'component',
    horizontal: true,
  },
};
