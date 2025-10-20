import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleKodeverk, alleTilbakekrevingKodeverk } from '@navikt/ft-frontend-storybook-utils';
import {
  BehandlingArsakType,
  BehandlingResultatType,
  FagsakYtelseType,
  HendelseUnderType,
  TilbakekrevingVidereBehandling,
} from '@navikt/ft-kodeverk';

import { FeilutbetalingFaktaIndex } from './FeilutbetalingFaktaIndex';
import type { AvklartFaktaFeilutbetalingAp } from './types/AvklartFaktaFeilutbetalingAp';
import type { FeilutbetalingÅrsak } from './types/FeilutbetalingÅrsak';
import type { FeilutbetalingFakta } from './types/FeilutbetalingFakta';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const feilutbetalingFakta: FeilutbetalingFakta = {
  behandlingFakta: {
    perioder: [
      {
        fom: '2018-01-01',
        tom: '2018-01-31',
        belop: 1000,
      },
      {
        fom: '2018-02-01',
        tom: '2018-02-28',
        belop: 5000,
      },
      {
        fom: '2018-03-01',
        tom: '2018-03-15',
        belop: 100,
      },
    ],
    totalPeriodeFom: '2019-01-01',
    totalPeriodeTom: '2019-01-02',
    aktuellFeilUtbetaltBeløp: 10000,
    tidligereVarseltBeløp: 5000,
    behandlingÅrsaker: [
      {
        behandlingArsakType: BehandlingArsakType.FEIL_I_LOVANDVENDELSE,
      },
    ],
    behandlingsresultat: {
      type: BehandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: ['FORELDREPENGER_OPPHØRER', 'ENDRING_I_BEREGNING'],
    },
    tilbakekrevingValg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK,
    },
    datoForRevurderingsvedtak: '2019-01-01',
  },
};

const feilutbetalingAarsak: FeilutbetalingÅrsak[] = [
  {
    ytelseType: FagsakYtelseType.FORELDREPENGER,
    hendelseTyper: [
      {
        hendelseType: 'MEDLEMSKAP',
        hendelseUndertyper: [],
      },
      {
        hendelseType: 'OKONOMI_FEIL',
        hendelseUndertyper: [HendelseUnderType.OKONOMI_FEIL_TREKK],
      },
      {
        hendelseType: 'BEREGNING_TYPE',
        hendelseUndertyper: [HendelseUnderType.IKKE_BOSATT],
      },
    ],
  },
];

const fpTilbakekrevingAlleKodeverk = alleTilbakekrevingKodeverk as KodeverkTilbakeForPanel;
const fpSakAlleKodeverk = alleKodeverk as KodeverkForPanel;

const meta = {
  component: FeilutbetalingFaktaIndex,
  args: {
    submitCallback: action('submit') as (data: AvklartFaktaFeilutbetalingAp) => Promise<void>,
    isReadOnly: false,
    setFormData: () => undefined,
    feilutbetalingFakta,
    feilutbetalingAarsak,
    kodeverkSamlingFpsak: fpSakAlleKodeverk,
    kodeverkSamlingFpTilbake: fpTilbakekrevingAlleKodeverk,
    fagsakYtelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    alleMerknaderFraBeslutter: {},
    isAksjonspunktOpen: true,
  },
} satisfies Meta<typeof FeilutbetalingFaktaIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
