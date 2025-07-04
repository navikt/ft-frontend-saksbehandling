import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleTilbakekrevingKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';
import { BehandlingStatus, ForeldelseVurderingType, HendelseType, RelasjonsRolleType } from '@navikt/ft-kodeverk';
import type { Behandling } from '@navikt/ft-types';

import { TilbakekrevingProsessIndex } from './TilbakekrevingProsessIndex';
import type { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import type { VilkårsvurderingAp } from './types/VilkårsvurderingAp';

import messages from '../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const withIntl = getIntlDecorator(messages);

const perioderForeldelse: FeilutbetalingPerioderWrapper = {
  perioder: [
    {
      fom: '2019-01-01',
      tom: '2019-02-02',
      belop: 1000,
      foreldelseVurderingType: ForeldelseVurderingType.IKKE_FORELDET,
    },
    {
      fom: '2019-02-03',
      tom: '2019-04-02',
      belop: 3000,
      foreldelseVurderingType: ForeldelseVurderingType.FORELDET,
    },
  ],
};

const defaultVilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder = {
  perioder: [
    {
      fom: '2019-01-01',
      tom: '2019-04-01',
      foreldet: false,
      feilutbetaling: 10,
      årsak: {
        hendelseType: HendelseType.MEDLEMSKAP,
      },
      redusertBeloper: [],
      ytelser: [
        {
          aktivitet: 'Arbeidstaker',
          belop: 1050,
        },
      ],
    },
  ],
  rettsgebyr: 1000,
};

const meta = {
  component: TilbakekrevingProsessIndex,
  decorators: [withIntl],
  args: {
    submitCallback: action('button-click') as (data: VilkårsvurderingAp) => Promise<void>,
    behandling: {
      uuid: '1',
      versjon: 1,
      status: BehandlingStatus.BEHANDLING_UTREDES,
    } as Behandling,
    kodeverkSamlingFpTilbake: alleTilbakekrevingKodeverk as unknown as KodeverkTilbakeForPanel,
    isReadOnly: false,
    setFormData: () => undefined,
    perioderForeldelse,
    vilkarvurdering: {
      vilkarsVurdertePerioder: [],
    },
    beregnBelop: () => Promise.resolve({ perioder: [{ belop: 10000 }, { belop: 12000 }] }),
    alleMerknaderFraBeslutter: {},
    relasjonsRolleType: RelasjonsRolleType.MOR,
    relasjonsRolleTypeKodeverk: [
      {
        kode: RelasjonsRolleType.MOR,
        kodeverk: 'RELASJONSROLLE_TYPE',
        navn: 'Mor',
      },
    ],
  },
} satisfies Meta<typeof TilbakekrevingProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder,
  },
};

export const MedToPerioder: Story = {
  args: {
    vilkarvurderingsperioder: {
      perioder: [
        defaultVilkarvurderingsperioder.perioder[0],
        {
          fom: '2019-04-01',
          tom: '2019-10-01',
          foreldet: false,
          feilutbetaling: 100,
          årsak: {
            hendelseType: HendelseType.MEDLEMSKAP,
          },
          redusertBeloper: [],
          ytelser: [
            {
              aktivitet: 'Arbeidstaker',
              belop: 2050,
            },
          ],
        },
      ],
      rettsgebyr: 1000,
    },
  },
};
