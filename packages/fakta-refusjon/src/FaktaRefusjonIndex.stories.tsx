import type { Meta, StoryObj } from '@storybook/react-vite';

import { arbeidsgiverOpplysningerPerId } from '../testdata/arbeidgiverOpplysningerPerId';
import { refusjonsandelerForTreArbeidsgivere } from '../testdata/refusjonsandeler';
import { FaktaRefusjonIndex } from './FaktaRefusjonIndex';

const meta = {
  component: FaktaRefusjonIndex,
  args: {
    aksjonspunkt: [{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR' }],
    refusjonsandeler: refusjonsandelerForTreArbeidsgivere,
    arbeidsgiverOpplysningerPerId,
  },
} satisfies Meta<typeof FaktaRefusjonIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
