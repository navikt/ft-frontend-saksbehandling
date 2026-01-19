import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import type { AktivitetStatus, BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { AktivitetStatusTags } from './AktivitetStatusTags';

const meta = {
  component: AktivitetStatusTags,
  args: {
    kodeverkSamling: alleKodeverk,
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

export const AlleStatuser: Story = {
  args: {
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPrStatusOgAndel: alleAktivitetStatuser.map(
          aktivitetStatus => ({ aktivitetStatus }) as BeregningsgrunnlagAndel,
        ),
      },
    ],
  },
};
