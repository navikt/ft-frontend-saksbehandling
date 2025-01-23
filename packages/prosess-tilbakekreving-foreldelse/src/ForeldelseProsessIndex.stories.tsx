import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  ForeldelseVurderingType,
  AksjonspunktStatus,
  TilbakekrevingKodeverkType,
  BehandlingStatus,
  RelasjonsRolleType,
} from '@navikt/ft-kodeverk';
import { Behandling, Aksjonspunkt, FeilutbetalingPerioderWrapper } from '@navikt/ft-types';
import { ForeldelseProsessIndex } from './ForeldelseProsessIndex';
import { ForeldelseAksjonspunktCodes } from './ForeldelseAksjonspunktCodes';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanel';

const perioderForeldelse = {
  perioder: [
    {
      fom: '2019-01-01',
      tom: '2019-01-31',
      belop: 1000,
      begrunnelse: 'Foreldet',
      foreldelseVurderingType: ForeldelseVurderingType.FORELDET,
      foreldelsesfrist: '2020-04-01',
    },
    {
      fom: '2019-03-01',
      tom: '2019-03-31',
      belop: 3000,
      foreldelseVurderingType: ForeldelseVurderingType.UDEFINERT,
    },
    {
      fom: '2019-02-01',
      tom: '2019-02-28',
      belop: 3000,
      begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
      foreldelseVurderingType: ForeldelseVurderingType.TILLEGGSFRIST,
      foreldelsesfrist: '2020-04-01',
      oppdagelsesDato: '2019-11-01',
    },
    {
      fom: '2019-04-01',
      tom: '2019-04-30',
      belop: 4000,
      foreldelseVurderingType: ForeldelseVurderingType.UDEFINERT,
    },
  ],
} as FeilutbetalingPerioderWrapper;

const kodeverkSamling = {
  [TilbakekrevingKodeverkType.FORELDELSE_VURDERING]: [
    {
      kode: ForeldelseVurderingType.FORELDET,
      navn: 'Foreldet',
      kodeverk: 'FORELDELSE_VURDERING',
    },
    {
      kode: ForeldelseVurderingType.TILLEGGSFRIST,
      navn: 'Ikke foreldet, med tilleggsfrist',
      kodeverk: 'FORELDELSE_VURDERING',
    },
    {
      kode: ForeldelseVurderingType.IKKE_FORELDET,
      navn: 'Ikke foreldet',
      kodeverk: 'FORELDELSE_VURDERING',
    },
  ],
} as KodeverkFpTilbakeForPanel;

export default {
  title: 'prosess-foreldelse',
  component: ForeldelseProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  aksjonspunkter?: Aksjonspunkt[];
}> = ({ submitCallback, aksjonspunkter = [] }) => (
  <ForeldelseProsessIndex
    behandling={
      {
        uuid: '1',
        versjon: 1,
        status: BehandlingStatus.BEHANDLING_UTREDES,
      } as Behandling
    }
    kodeverkSamlingFpTilbake={kodeverkSamling}
    submitCallback={submitCallback}
    isReadOnly={false}
    setFormData={() => undefined}
    perioderForeldelse={perioderForeldelse}
    aksjonspunkter={aksjonspunkter}
    relasjonsRolleType={RelasjonsRolleType.MOR}
    beregnBelop={(params?: any) => Promise.resolve(params)}
    alleMerknaderFraBeslutter={{}}
    relasjonsRolleTypeKodeverk={[
      {
        kode: 'MORA',
        kodeverk: 'RELASJONSROLLE_TYPE',
        navn: 'Mor',
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
};

export const UtenAksjonspunkt = Template.bind({});
UtenAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
