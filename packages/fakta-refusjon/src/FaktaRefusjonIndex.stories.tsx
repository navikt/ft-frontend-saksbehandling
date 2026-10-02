import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { arbeidsgiverOpplysningerPerId } from '../testdata/arbeidgiverOpplysningerPerId';
import { refusjonsandelerForTreArbeidsgivere } from '../testdata/refusjonsandeler';
import { FaktaRefusjonIndex } from './FaktaRefusjonIndex';
import type { AksjonspunktRefusjon, AksjonspunktSubmitType } from './types/aksjonspunkt';

const meta = {
  component: FaktaRefusjonIndex,
  args: {
    refusjonsandeler: refusjonsandelerForTreArbeidsgivere,
    arbeidsgiverOpplysningerPerId,
    readOnly: false,
    submitCallback: action('submit') as (data: AksjonspunktSubmitType) => Promise<void>,
    setFormData: () => undefined,
    aksjonspunkt: [
      {
        kode: 'AVKLAR_REFUSJONSKRAV',
        status: 'OPPR',
      },
    ] satisfies AksjonspunktRefusjon[],
  },
} satisfies Meta<typeof FaktaRefusjonIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
