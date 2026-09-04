import { RawIntlProvider } from 'react-intl';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import type { AktivitetStatus, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import { AktivitetStatusTags } from './AktivitetStatusTags';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const meta = {
  component: AktivitetStatusTags,
  decorators: [
    Story => (
      <RawIntlProvider value={intl}>
        <Story />
      </RawIntlProvider>
    ),
  ],
  args: {
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
  },
} satisfies Meta<typeof AktivitetStatusTags>;

export default meta;

type Story = StoryObj<typeof AktivitetStatusTags>;

const alleAktivitetStatuser: AktivitetStatus[] = [
  'MIDL_INAKTIV',
  'AAP',
  'AT',
  'DP',
  'SP_AV_DP',
  'PSB_AV_DP',
  'FL',
  'MS',
  'SN',
  'AT_FL',
  'AT_SN',
  'FL_SN',
  'AT_FL_SN',
  'BA',
  'IKKE_YRKESAKTIV',
  'KUN_YTELSE',
  'TY',
  'VENTELØNN_VARTPENGER',
];

const lagPeriode = (
  andeler: { aktivitetStatus: AktivitetStatus; erTilkommetAndel?: boolean }[],
): BeregningsgrunnlagPeriodeProp => ({
  beregningsgrunnlagPeriodeFom: '2025-01-01',
  beregningsgrunnlagPeriodeTom: TIDENES_ENDE,
  beregningsgrunnlagPrStatusOgAndel: andeler.map((andel, index) => ({ andelsnr: index, ...andel })),
});

export const AlleStatuser: Story = {
  args: {
    beregningsgrunnlagPeriode: [lagPeriode(alleAktivitetStatuser.map(aktivitetStatus => ({ aktivitetStatus })))],
  },
};

export const MedTilkommenAndel: Story = {
  args: {
    beregningsgrunnlagPeriode: [
      lagPeriode([{ aktivitetStatus: 'AT' }, { aktivitetStatus: 'FL', erTilkommetAndel: true }]),
    ],
  },
};

export const MedDuplikater: Story = {
  args: {
    beregningsgrunnlagPeriode: [
      lagPeriode([{ aktivitetStatus: 'AT' }, { aktivitetStatus: 'AT' }]),
      lagPeriode([{ aktivitetStatus: 'AT' }]),
    ],
  },
};
