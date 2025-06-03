import { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktStatus, BehandlingStatus, ForeldelseVurderingType, RelasjonsRolleType } from '@navikt/ft-kodeverk';
import { Behandling } from '@navikt/ft-types';

import { ForeldelseAksjonspunktCodes } from './ForeldelseAksjonspunktCodes';
import { ForeldelseProsessIndex } from './ForeldelseProsessIndex';
import { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import { VurderForeldelseAp } from './types/VurderForeldelseAp';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

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
  ForeldelseVurderingType: [
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
} as KodeverkTilbakeForPanel;

const meta = {
  component: ForeldelseProsessIndex,
  args: {
    submitCallback: action('button-click') as (data: VurderForeldelseAp) => Promise<void>,
    behandling: {
      uuid: '1',
      versjon: 1,
      status: BehandlingStatus.BEHANDLING_UTREDES,
    } as Behandling,
    kodeverkSamlingFpTilbake: kodeverkSamling,
    isReadOnly: false,
    setFormData: () => undefined,
    perioderForeldelse,
    relasjonsRolleType: RelasjonsRolleType.MOR,
    beregnBelop: () => Promise.resolve({ perioder: [{ belop: 10000 }, { belop: 12000 }] }),
    alleMerknaderFraBeslutter: {},
    relasjonsRolleTypeKodeverk: [
      {
        kode: RelasjonsRolleType.MOR,
        kodeverk: 'RELASJONSROLLE_TYPE',
        navn: 'Mor',
      },
    ],
  },
} satisfies Meta<typeof ForeldelseProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
  },
};

export const UtenAksjonspunkt: Story = {
  args: {
    aksjonspunkter: [],
  },
};
