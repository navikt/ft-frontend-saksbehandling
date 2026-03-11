import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleKodeverk, alleTilbakekrevingKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { BehandlingArsakType, BehandlingResultatType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { feilutbetalingÅrsak } from '../testdata/feilutbetalingÅrsak';
import { FeilutbetalingFaktaIndex } from './FeilutbetalingFaktaIndex';
import type { AvklartFaktaFeilutbetalingAp } from './types/AvklartFaktaFeilutbetalingAp';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  component: FeilutbetalingFaktaIndex,
  args: {
    submitCallback: action('submit') as (data: AvklartFaktaFeilutbetalingAp) => Promise<void>,
    isReadOnly: false,
    setFormData: () => undefined,
    feilutbetalingAarsak: feilutbetalingÅrsak,
    kodeverkSamlingFpsak: alleKodeverk as KodeverkForPanel,
    kodeverkSamlingFpTilbake: alleTilbakekrevingKodeverk as KodeverkTilbakeForPanel,
    fagsakYtelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    alleMerknaderFraBeslutter: {},
    isAksjonspunktOpen: true,
  },
} satisfies Meta<typeof FeilutbetalingFaktaIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TrePerioder: Story = {
  args: {
    feilutbetalingFakta: {
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
          videreBehandling: 'TILBAKEKR_INNTREKK',
        },
        datoForRevurderingsvedtak: '2019-01-01',
      },
    },
  },
};

export const EnPeriodeUtfylt: Story = {
  args: {
    feilutbetalingFakta: {
      behandlingFakta: {
        aktuellFeilUtbetaltBeløp: 110171,
        datoForRevurderingsvedtak: '2025-07-03',
        totalPeriodeFom: '2025-01-13',
        totalPeriodeTom: '2025-06-30',
        perioder: [
          {
            fom: '2025-01-13',
            tom: '2025-06-30',
            belop: 110171,
            feilutbetalingÅrsakDto: {
              hendelseType: 'OPPTJENING_TYPE',
              hendelseUndertype: 'IKKE_INNTEKT',
            },
          },
        ],
        tilbakekrevingValg: {
          videreBehandling: 'TILBAKEKR_IGNORER',
        },
        begrunnelse: 'Dette er en begrunnelse',
      },
    },
  },
};
