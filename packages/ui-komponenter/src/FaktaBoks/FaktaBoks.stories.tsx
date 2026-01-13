import { VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { LabeledValue } from '../LabeledValue/LabeledValue';
import { FaktaBoks } from './FaktaBoks';

const meta = {
  title: 'FaktaBoks',
  component: FaktaBoks,
  args: {
    tittel: 'Sammenligningsgrunnlag § 8-30 fra A-ordningen',
    children: (
      <VStack gap="4">
        <LabeledValue label="Fødselsdato" value="20.02.2025" />
        <LabeledValue label="Begrunnelse" value="Blablabla godkjent heihei" />
      </VStack>
    ),
  },
} satisfies Meta<typeof FaktaBoks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
export const MedBeskrivelse: Story = {
  args: {
    beskrivelse: 'Inntekt og ytelser etter kap. 8, 9 og 14 de 12 siste månedene',
  },
};
