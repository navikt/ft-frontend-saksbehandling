import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import { ArbeidstakerMedAvvikAp5038 } from '../../prosess-beregningsgrunnlag/src/BeregningsgrunnlagProsessIndex.stories';
import {
  arbeidsgiverOpplysningerPerId,
  arbeistakerFPEttArbeidsforhold,
} from '../testdata/arbeistakerFPEttArbeidsforhold';
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
    beregningsgrunnlagListe: [arbeistakerFPEttArbeidsforhold],
  },
};

export const ToGrunnlagHvorEnHarÅpentAP: Story = {
  args: {
    beregningsgrunnlagListe: [
      { ...arbeistakerFPEttArbeidsforhold, skjaeringstidspunktBeregning: '2025-11-01' },
      { ...arbeistakerFPEttArbeidsforhold, avklaringsbehov: [] },
    ],
  },
};

export const ArbeidstakerMedAvvik: Story = {
  args: {
    beregningsgrunnlagListe: ArbeidstakerMedAvvikAp5038.args?.beregningsgrunnlagListe,
    arbeidsgiverOpplysningerPerId: ArbeidstakerMedAvvikAp5038.args?.arbeidsgiverOpplysningerPerId,
  },
};
