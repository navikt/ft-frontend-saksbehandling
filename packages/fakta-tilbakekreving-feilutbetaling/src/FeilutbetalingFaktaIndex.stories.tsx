import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk, alleTilbakekrevingKodeverk } from '@navikt/ft-frontend-storybook-utils';
import {
  BehandlingArsakType,
  BehandlingResultatType,
  FagsakYtelseType,
  KonsekvensForYtelsen,
  TilbakekrevingVidereBehandling,
} from '@navikt/ft-kodeverk';

import { FeilutbetalingFaktaIndex } from './FeilutbetalingFaktaIndex';
import { AvklartFaktaFeilutbetalingAp } from './types/AvklartFaktaFeilutbetalingAp';
import { FeilutbetalingÅrsak } from './types/FeilutbetalingÅrsak';
import { FeilutbetalingFakta } from './types/FeilutbetalingFakta';
import { KodeverkFpSakForPanel } from './types/KodeverkFpSakForPanelFtf';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelFtf';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const feilutbetalingFakta = {
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
      konsekvenserForYtelsen: [KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER, KonsekvensForYtelsen.ENDRING_I_BEREGNING],
    },
    tilbakekrevingValg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK,
    },
    datoForRevurderingsvedtak: '2019-01-01',
  },
};

const feilutbetalingAarsak = [
  {
    ytelseType: FagsakYtelseType.FORELDREPENGER,
    hendelseTyper: [
      {
        hendelseType: 'MEDLEMSKAP',
        hendelseUndertyper: [],
      },
      {
        hendelseType: 'OKONOMI_FEIL',
        hendelseUndertyper: ['OKONOMI_FEIL_TREKK'],
      },
      {
        hendelseType: 'BEREGNING_TYPE',
        hendelseUndertyper: ['IKKE_BOSATT'],
      },
    ],
  },
] as FeilutbetalingÅrsak[];

const fpTilbakekrevingAlleKodeverk = alleTilbakekrevingKodeverk as KodeverkFpTilbakeForPanel;
const fpSakAlleKodeverk = alleKodeverk as KodeverkFpSakForPanel;

const meta = {
  title: 'fakta-feilutbetaling',
  component: FeilutbetalingFaktaIndex,
  args: {
    submitCallback: action('button-click') as (data: AvklartFaktaFeilutbetalingAp) => Promise<any>,
    isReadOnly: false,
    setFormData: () => undefined,
    feilutbetalingFakta: feilutbetalingFakta as FeilutbetalingFakta,
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
