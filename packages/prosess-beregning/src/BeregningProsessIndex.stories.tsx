import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import { arbeidsgiverOpplysningerPerId } from '../testdata/arbeidsgivere';
import { arbeidstakerFPEttArbeidsforhold } from '../testdata/arbeidstakerFPEttArbeidsforhold';
import { arbeidstakerFPFlereArbeidsforhold } from '../testdata/arbeidstakerFPFlereArbeidsforhold';
import { BeregningProsessIndex } from './BeregningProsessIndex';
import type { KodeverkForPanel } from './types/KodeverkForPanel';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  component: BeregningProsessIndex,
  args: {
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
    arbeidsgiverOpplysningerPerId,
    beregningsgrunnlagsvilkår: null,
  },
} satisfies Meta<typeof BeregningProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CaseArbeidstakerMedEttArbeidsforholdFP: Story = {
  name: 'Case - Arbeidstaker med ett arbeidsforhold (FP)',
  args: {
    beregningsgrunnlagListe: [arbeidstakerFPEttArbeidsforhold],
  },
};

export const ToGrunnlagHvorEnHarÅpentAP: Story = {
  args: {
    beregningsgrunnlagListe: [
      { ...arbeidstakerFPEttArbeidsforhold, skjaeringstidspunktBeregning: '2025-11-01' },
      { ...arbeidstakerFPFlereArbeidsforhold, avklaringsbehov: [] },
    ],
  },
};

export const ArbeidstakerMedFlereArbeidsforhold: Story = {
  args: {
    beregningsgrunnlagListe: [arbeidstakerFPFlereArbeidsforhold],
  },
};
