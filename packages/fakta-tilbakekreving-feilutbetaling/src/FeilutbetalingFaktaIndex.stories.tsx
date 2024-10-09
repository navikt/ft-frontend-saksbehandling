import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  BehandlingResultatType,
  BehandlingArsakType,
  KonsekvensForYtelsen,
  TilbakekrevingVidereBehandling,
  FagsakYtelseType,
} from '@navikt/ft-kodeverk';
import { alleTilbakekrevingKodeverk, alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { FeilutbetalingFakta, FeilutbetalingAarsak } from '@navikt/ft-types';

import FeilutbetalingFaktaIndex from './FeilutbetalingFaktaIndex';
import AvklartFaktaFeilutbetalingAp from './types/AvklartFaktaFeilutbetalingAp';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import KodeverkFpTilbakeForPanel from './types/kodeverkFpTilbakeForPanel';
import KodeverkFpSakForPanel from './types/kodeverkFpSakForPanel';

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
] as FeilutbetalingAarsak[];

const fpTilbakekrevingAlleKodeverk = alleTilbakekrevingKodeverk as KodeverkFpTilbakeForPanel;
const fpSakAlleKodeverk = alleKodeverk as KodeverkFpSakForPanel;

export default {
  title: 'fakta-feilutbetaling',
  component: FeilutbetalingFaktaIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>;
}> = ({ submitCallback }) => (
  <FeilutbetalingFaktaIndex
    submitCallback={submitCallback}
    isReadOnly={false}
    setFormData={() => undefined}
    feilutbetalingFakta={feilutbetalingFakta as FeilutbetalingFakta}
    feilutbetalingAarsak={feilutbetalingAarsak}
    kodeverkSamlingFpsak={fpSakAlleKodeverk}
    kodeverkSamlingFpTilbake={fpTilbakekrevingAlleKodeverk}
    fagsakYtelseTypeKode={FagsakYtelseType.FORELDREPENGER}
    alleMerknaderFraBeslutter={{}}
    isAksjonspunktOpen
  />
);

export const AksjonspunktForFeilutbetaling = Template.bind({});
AksjonspunktForFeilutbetaling.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
