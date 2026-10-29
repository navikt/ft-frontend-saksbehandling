import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerOgFrilansFP } from '../../../testdata/arbeidstakerOgFrilansFP';
import { selvstendigNæringsdrivendeFPNyoppstartet } from '../../../testdata/selvstendigNæringsdrivendeFPNyoppstartet';
import { selvstendigNæringsdrivendeFPVarigEndring } from '../../../testdata/selvstendigNæringsdrivendeFPVarigEndring';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { NæringFraSøknad } from './NæringFraSøknad';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: NæringFraSøknad,
  decorators: [withIntl],
  args: {
    arbeidsgiverOpplysningerPerId,
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
    beregningsgrunnlag: selvstendigNæringsdrivendeFPVarigEndring.beregningsgrunnlagListe[0],
  },
} satisfies Meta<typeof NæringFraSøknad>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VarigEndring: Story = {};

export const Nyoppstartet: Story = {
  args: {
    beregningsgrunnlag: selvstendigNæringsdrivendeFPNyoppstartet.beregningsgrunnlagListe[0],
  },
};

const grunnlagMedRegnskapsførerOgOpphørsdato = {
  ...selvstendigNæringsdrivendeFPNyoppstartet.beregningsgrunnlagListe[0],
  beregningsgrunnlagPeriode:
    selvstendigNæringsdrivendeFPNyoppstartet.beregningsgrunnlagListe[0].beregningsgrunnlagPeriode.map(periode => ({
      ...periode,
      beregningsgrunnlagPrStatusOgAndel: periode.beregningsgrunnlagPrStatusOgAndel?.map(andel => ({
        ...andel,
        næringer: andel.næringer?.map(næring => ({
          ...næring,
          regnskapsførerNavn: 'Kari Regnskapsfører',
          regnskapsførerTlf: '12345678',
          opphørsdato: '2025-12-31',
        })),
      })),
    })),
};

export const MedRegnskapsførerOgOpphørsdato: Story = {
  args: {
    beregningsgrunnlag: grunnlagMedRegnskapsførerOgOpphørsdato,
  },
};

export const UtenNæringsandel: Story = {
  args: {
    beregningsgrunnlag: arbeidstakerOgFrilansFP.beregningsgrunnlagListe[0],
  },
};
