import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import { arbeidsgiverOpplysningerPerId } from '../testdata/arbeidsgivere';
import { arbeidstakerFPEttArbeidsforhold } from '../testdata/arbeidstakerFPEttArbeidsforhold';
import { arbeidstakerFPFlereArbeidsforhold } from '../testdata/arbeidstakerFPFlereArbeidsforhold';
import { selvstendigNæringsdrivendeFP } from '../testdata/selvstendigNæringsdrivendeFP';
import { BeregningProsessIndex } from './BeregningProsessIndex';
import type { BeregningAksjonspunktSubmitType } from './legacyAP/types/BeregningsgrunnlagAP';
import type { KodeverkForPanel } from './types/KodeverkForPanel';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  component: BeregningProsessIndex,
  args: {
    isReadOnly: false,
    submitCallback: action('submit') as (data: BeregningAksjonspunktSubmitType[]) => Promise<void>,
    isSubmittable: true,
    setFormData: () => undefined,
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
    arbeidsgiverOpplysningerPerId,
  },
} satisfies Meta<typeof BeregningProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CaseArbeidstakerMedEttArbeidsforholdFP: Story = {
  name: 'Case - Arbeidstaker med ett arbeidsforhold (FP)',
  args: {
    ...arbeidstakerFPEttArbeidsforhold,
  },
};

export const ToGrunnlagHvorEnHarÅpentAP: Story = {
  args: {
    beregningsgrunnlagListe: [
      { ...arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagListe[0] },
      {
        ...arbeidstakerFPFlereArbeidsforhold.beregningsgrunnlagListe[0],
        avklaringsbehov: [],
      },
    ],
    beregningsgrunnlagsvilkår: {
      ...arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagsvilkår,
      perioder: [
        ...arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagsvilkår.perioder,
        ...arbeidstakerFPFlereArbeidsforhold.beregningsgrunnlagsvilkår.perioder,
      ],
    },
  },
};

export const ArbeidstakerMedFlereArbeidsforhold: Story = {
  args: {
    ...arbeidstakerFPFlereArbeidsforhold,
  },
};

export const SelvstendigNæringsdrivendeFP: Story = {
  args: {
    ...selvstendigNæringsdrivendeFP,
  },
};
