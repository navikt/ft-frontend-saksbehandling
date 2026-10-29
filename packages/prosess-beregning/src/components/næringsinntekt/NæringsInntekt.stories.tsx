import type { Meta, StoryObj } from '@storybook/react-vite';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { arbeidstakerOgFrilansFP } from '../../../testdata/arbeidstakerOgFrilansFP';
import { selvstendigNæringsdrivendeFP } from '../../../testdata/selvstendigNæringsdrivendeFP';
import { NæringsInntekt } from './NæringsInntekt';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const grunnlagForBA = {
  ...selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0],
  beregningsgrunnlagPeriode: selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0].beregningsgrunnlagPeriode.map(
    periode => ({
      ...periode,
      beregningsgrunnlagPrStatusOgAndel: periode.beregningsgrunnlagPrStatusOgAndel?.map(andel =>
        andel.aktivitetStatus === 'SN' ? { ...andel, aktivitetStatus: 'BA' as const } : andel,
      ),
    }),
  ),
};

const grunnlagMedNullPgiSnitt = {
  ...selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0],
  beregningsgrunnlagPeriode: selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0].beregningsgrunnlagPeriode.map(
    periode => ({
      ...periode,
      beregningsgrunnlagPrStatusOgAndel: periode.beregningsgrunnlagPrStatusOgAndel?.map(andel =>
        andel.aktivitetStatus === 'SN' ? { ...andel, pgiSnitt: 0 } : andel,
      ),
    }),
  ),
};

const meta = {
  component: NæringsInntekt,
  decorators: [withIntl],
  args: {
    beregningsgrunnlag: selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0],
    inntektsgrunnlag: selvstendigNæringsdrivendeFP.beregningsgrunnlagListe[0].inntektsgrunnlag,
  },
} satisfies Meta<typeof NæringsInntekt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelvstendigNæringsdrivende: Story = {};

export const BrukerMedBådeLønnOgNæring: Story = {
  args: {
    beregningsgrunnlag: grunnlagForBA,
    inntektsgrunnlag: grunnlagForBA.inntektsgrunnlag,
  },
};

export const UtenNæringsandel: Story = {
  args: {
    beregningsgrunnlag: arbeidstakerOgFrilansFP.beregningsgrunnlagListe[0],
    inntektsgrunnlag: arbeidstakerOgFrilansFP.beregningsgrunnlagListe[0].inntektsgrunnlag,
  },
};

export const UtenDetaljertPgiGrunnlag: Story = {
  args: {
    inntektsgrunnlag: undefined,
  },
};

export const UtenPgiSnitt: Story = {
  args: {
    beregningsgrunnlag: grunnlagMedNullPgiSnitt,
    inntektsgrunnlag: grunnlagMedNullPgiSnitt.inntektsgrunnlag,
  },
};
