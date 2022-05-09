import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import {
  Behandling,
  AlleKodeverkTilbakekreving,
  Aksjonspunkt,
  FeilutbetalingPerioderWrapper,
  DetaljerteFeilutbetalingsperioder,
} from '@navikt/ft-types';
import { AksjonspunktStatus, NavBrukerKjonn, ForeldelseVurderingType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { alleTilbakekrevingKodeverk } from '@navikt/ft-storybook-utils';
import TilbakekrevingProsessIndex from './TilbakekrevingProsessIndex';

import messages from '../i18n/nb_NO.json';
import TilbakekrevingAksjonspunktCodes from './TilbakekrevingAksjonspunktCodes';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-tidslinje/dist/style.css';

const intl = createIntl(messages);

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

const alleKodeverk = alleTilbakekrevingKodeverk as AlleKodeverkTilbakekreving;

export default {
  title: 'prosess/prosess-tilbakekreving',
  component: TilbakekrevingProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  aksjonspunkter?: Aksjonspunkt[];
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
}> = ({ submitCallback, aksjonspunkter = [], vilkarvurderingsperioder }) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingProsessIndex
      behandling={
        {
          uuid: '1',
          versjon: 1,
          status: BehandlingStatus.BEHANDLING_UTREDES,
        } as Behandling
      }
      tilbakekrevingKodeverk={alleKodeverk}
      isReadOnly={false}
      setFormData={() => undefined}
      submitCallback={submitCallback}
      perioderForeldelse={perioderForeldelse}
      aksjonspunkter={aksjonspunkter}
      navBrukerKjonn={NavBrukerKjonn.KVINNE}
      vilkarvurderingsperioder={vilkarvurderingsperioder}
      vilkarvurdering={vilkarvurdering}
      beregnBelop={(params?: any) => Promise.resolve(params)}
      alleKodeverk={{} as any}
      alleMerknaderFraBeslutter={{}}
      status=""
      readOnlySubmitButton={false}
      vilkar={[]}
      isAksjonspunktOpen
    />
  </RawIntlProvider>
);

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    },
  ],
  vilkarvurderingsperioder: defaultVilkarvurderingsperioder,
};

export const MedToPerioder = Template.bind({});
MedToPerioder.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    },
  ],
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
};
