import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { lagBG } from '../testdata/beregningsgrunnlag';
import { BeregningProsessIndex } from './BeregningProsessIndex';
import type { KodeverkForPanel } from './types/KodeverkForPanel';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId = {
  999999998: {
    identifikator: '999999998',
    navn: 'Gardslien transport og Gardiner AS',
    erPrivatPerson: false,
  },
};

const meta = {
  component: BeregningProsessIndex,
  args: {
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
    arbeidsgiverOpplysningerPerId: arbeidsgiverOpplysninger,
    beregningsgrunnlagsvilkår: null,
  },
} satisfies Meta<typeof BeregningProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisningAvFaktaUtenAksjonspunkt: Story = {
  args: {
    beregningsgrunnlagListe: [
      lagBG({ skjaeringstidspunktBeregning: '2023-02-01' }),
      lagBG({ skjaeringstidspunktBeregning: '2024-02-01' }),
    ],
  },
};
