import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleTilbakekrevingKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';
import { BehandlingStatus, ForeldelseVurderingType, RelasjonsRolleType } from '@navikt/ft-kodeverk';
import { Behandling, FeilutbetalingPerioderWrapper } from '@navikt/ft-types';

import { TilbakekrevingProsessIndex } from './TilbakekrevingProsessIndex';
import { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelTb';

import messages from '../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const withIntl = getIntlDecorator(messages);

const perioderForeldelse = {
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
} as FeilutbetalingPerioderWrapper;

const defaultVilkarvurderingsperioder = {
  perioder: [
    {
      fom: '2019-01-01',
      tom: '2019-04-01',
      foreldet: false,
      feilutbetaling: 10,
      årsak: {
        hendelseType: 'MEDLEMSKAP',
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
} as DetaljerteFeilutbetalingsperioder;
const vilkarvurdering = {
  vilkarsVurdertePerioder: [],
};

const kodeverkSamling = alleTilbakekrevingKodeverk as KodeverkFpTilbakeForPanel;

const meta = {
  title: 'prosess-tilbakekreving',
  component: TilbakekrevingProsessIndex,
  decorators: [withIntl],
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    behandling: {
      uuid: '1',
      versjon: 1,
      status: BehandlingStatus.BEHANDLING_UTREDES,
    } as Behandling,
    kodeverkSamlingFpTilbake: kodeverkSamling,
    isReadOnly: false,
    setFormData: () => undefined,
    perioderForeldelse,
    vilkarvurdering,
    beregnBelop: (params?: any) => Promise.resolve(params),
    alleMerknaderFraBeslutter: {},
    relasjonsRolleType: RelasjonsRolleType.MOR,
    relasjonsRolleTypeKodeverk: [
      {
        kode: 'MORA',
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
            hendelseType: {
              kode: 'MEDLEM',
              kodeverk: '',
              navn: '§22 Medlemskap',
            },
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
    } as DetaljerteFeilutbetalingsperioder,
  },
};
