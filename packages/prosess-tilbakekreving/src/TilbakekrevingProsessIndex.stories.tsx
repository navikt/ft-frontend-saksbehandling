import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleTilbakekrevingKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';
import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';

import type { TilbakekrevingFormData } from './components/TilbakekrevingForm';
import { TilbakekrevingProsessIndex } from './TilbakekrevingProsessIndex';
import type { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import type { VilkårsvurderingAp } from './types/VilkårsvurderingAp';
import type { VilkårsvurdertPeriode } from './types/VilkårsvurdertePerioder';

import messages from '../i18n/nb_NO.json';

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
};

const meta = {
  component: TilbakekrevingProsessIndex,
  decorators: [withIntl],
  args: {
    submitCallback: action('submit') as (data: VilkårsvurderingAp) => Promise<void>,
    behandlingUuid: '1',
    kodeverkSamlingFpTilbake: alleTilbakekrevingKodeverk as unknown as KodeverkTilbakeForPanel,
    isReadOnly: false,
    setFormData: (() => undefined) as (data: TilbakekrevingFormData) => void,
    perioderForeldelse,
    vilkarvurdering: {
      vilkarsVurdertePerioder: [],
    },
    beregnBelop: () => Promise.resolve({ perioder: [{ belop: 10000 }, { belop: 12000 }] }),
    alleMerknaderFraBeslutter: {},
    relasjonsRolleType: 'MORA',
    relasjonsRolleTypeKodeverk: [
      {
        kode: 'MORA',
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
            hendelseType: 'MEDLEMSKAP',
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

const lagVurderingUtenTilbakekrevingUnder4Rettsgebyr = (fom: string, tom: string): VilkårsvurdertPeriode => ({
  fom,
  tom,
  vilkarResultat: 'FORSTO_BURDE_FORSTAATT',
  begrunnelse: 'Mottaker burde forstått at utbetalingen skyldtes en feil',
  feilutbetalingBelop: 500,
  vilkarResultatInfo: {
    begrunnelse: 'Simpel uaktsomhet',
    aktsomhet: 'SIMPEL_UAKTSOM',
    aktsomhetInfo: {
      sarligGrunner: [],
      harGrunnerTilReduksjon: false,
      andelTilbakekreves: 100,
      ileggRenter: false,
      tilbakekrevesBelop: 500,
      tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: false,
      annetBegrunnelse: '',
      sarligGrunnerBegrunnelse: '',
    },
  },
});

const lagPeriode = (
  fom: string,
  tom: string,
  foreldet: boolean,
  feilutbetaling: number,
): DetaljerteFeilutbetalingsperioder['perioder'][number] => ({
  fom,
  tom,
  foreldet,
  feilutbetaling,
  årsak: {
    hendelseType: 'MEDLEMSKAP',
  },
  redusertBeloper: [],
  ytelser: [
    {
      aktivitet: 'Arbeidstaker',
      belop: feilutbetaling,
    },
  ],
});

export const MedForeldetPeriodeOgToPerioderUnder4Rettsgebyr: Story = {
  args: {
    perioderForeldelse: {
      perioder: [
        {
          fom: '2019-01-01',
          tom: '2019-01-31',
          belop: 1000,
          foreldelseVurderingType: ForeldelseVurderingType.FORELDET,
          begrunnelse: 'Perioden er foreldet',
        },
        {
          fom: '2019-02-01',
          tom: '2019-02-28',
          belop: 500,
          foreldelseVurderingType: ForeldelseVurderingType.IKKE_FORELDET,
        },
        {
          fom: '2019-03-01',
          tom: '2019-03-31',
          belop: 500,
          foreldelseVurderingType: ForeldelseVurderingType.IKKE_FORELDET,
        },
      ],
    },
    vilkarvurderingsperioder: {
      perioder: [
        lagPeriode('2019-01-01', '2019-01-31', true, 1000),
        lagPeriode('2019-02-01', '2019-02-28', false, 500),
        lagPeriode('2019-03-01', '2019-03-31', false, 500),
      ],
      rettsgebyr: 1000,
    },
    vilkarvurdering: {
      vilkarsVurdertePerioder: [
        lagVurderingUtenTilbakekrevingUnder4Rettsgebyr('2019-02-01', '2019-02-28'),
        lagVurderingUtenTilbakekrevingUnder4Rettsgebyr('2019-03-01', '2019-03-31'),
      ],
    },
  },
};
