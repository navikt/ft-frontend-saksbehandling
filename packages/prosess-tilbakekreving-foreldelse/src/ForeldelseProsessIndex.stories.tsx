import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  NavBrukerKjonn, ForeldelseVurderingType, AksjonspunktStatus, TilbakekrevingKodeverkType, BehandlingStatus,
} from '@navikt/ft-kodeverk';
import {
  AlleKodeverkTilbakekreving, Behandling, Aksjonspunkt, FeilutbetalingPerioderWrapper,
} from '@navikt/ft-types';
import ForeldelseProsessIndex from './ForeldelseProsessIndex';
import ForeldelseAksjonspunktCodes from './ForeldelseAksjonspunktCodes';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-tidslinje/dist/style.css';

const perioderForeldelse = {
  perioder: [{
    fom: '2019-01-01',
    tom: '2019-01-31',
    belop: 1000,
    begrunnelse: 'Foreldet',
    foreldelseVurderingType: ForeldelseVurderingType.FORELDET,
    foreldelsesfrist: '2020-04-01',
  }, {
    fom: '2019-03-01',
    tom: '2019-03-31',
    belop: 3000,
    foreldelseVurderingType: ForeldelseVurderingType.UDEFINERT,
  }, {
    fom: '2019-02-01',
    tom: '2019-02-28',
    belop: 3000,
    begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
    foreldelseVurderingType: ForeldelseVurderingType.TILLEGGSFRIST,
    foreldelsesfrist: '2020-04-01',
    oppdagelsesDato: '2019-11-01',
  }, {
    fom: '2019-04-01',
    tom: '2019-04-30',
    belop: 4000,
    foreldelseVurderingType: ForeldelseVurderingType.UDEFINERT,
  }],
} as FeilutbetalingPerioderWrapper;

const alleKodeverk = {
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
} as AlleKodeverkTilbakekreving;

export default {
  title: 'prosess/prosess-foreldelse',
  component: ForeldelseProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  aksjonspunkter?: Aksjonspunkt[];
}> = ({
  submitCallback,
  aksjonspunkter = [],
}) => (
  <ForeldelseProsessIndex
    behandling={{
      uuid: '1',
      versjon: 1,
      status: BehandlingStatus.BEHANDLING_UTREDES,
    } as Behandling}
    tilbakekrevingKodeverk={alleKodeverk}
    submitCallback={submitCallback}
    isReadOnly={false}
    setFormData={() => undefined}
    perioderForeldelse={perioderForeldelse}
    aksjonspunkter={aksjonspunkter}
    navBrukerKjonn={NavBrukerKjonn.KVINNE}
    beregnBelop={() => Promise.resolve()}
    alleKodeverk={{} as any}
    alleMerknaderFraBeslutter={{}}
    status=""
    readOnlySubmitButton={false}
    vilkar={[]}
    isAksjonspunktOpen
  />
);

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
};

export const UtenAksjonspunkt = Template.bind({});
UtenAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
