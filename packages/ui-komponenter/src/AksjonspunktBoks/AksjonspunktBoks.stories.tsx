import { TextField, VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { AksjonspunktBoks } from './AksjonspunktBoks';

const meta = {
  title: 'AksjonspunktBoks',
  component: AksjonspunktBoks,
  args: {
    tittel: 'Dette er en tittel på aksjonspunktboksen',
    children: (
      <VStack gap="4">
        <TextField label="Fødselsdato" htmlSize={20} />
        <TextField label="Begrunnelse" htmlSize={50} />
      </VStack>
    ),
  },
} satisfies Meta<typeof AksjonspunktBoks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpprettetAksjonspunkt: Story = {
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR',
    },
  },
};

export const OpprettetAksjonspunktMedBeskrivelse: Story = {
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR',
    },
    beskrivelse: 'Dette er en beskrivelse av aksjonspunktet',
  },
};

export const UtførtAksjonspunkt: Story = {
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'UTFO',
    },
  },
};

export const ReturnertAksjonspunkt: Story = {
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR',
    },
  },
};

export const UtenAksjonspunkt: Story = {
  args: {
    aksjonspunkt: undefined,
  },
};
