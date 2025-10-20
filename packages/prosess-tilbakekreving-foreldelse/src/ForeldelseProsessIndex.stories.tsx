import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { AksjonspunktStatus, ForeldelseVurderingType } from '@navikt/ft-kodeverk';

import { ForeldelseAksjonspunktCodes } from './ForeldelseAksjonspunktCodes';
import { ForeldelseProsessIndex } from './ForeldelseProsessIndex';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import { RelasjonsRolleType } from './types/RelasjonsRolleType';
import type { VurderForeldelseAp } from './types/VurderForeldelseAp';

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

const kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel = {
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
};

const meta = {
  component: ForeldelseProsessIndex,
  args: {
    submitCallback: action('submit') as (data: VurderForeldelseAp) => Promise<void>,
    behandlingUuid: '1',
    kodeverkSamlingFpTilbake,
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
