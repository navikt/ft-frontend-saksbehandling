import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Aktor } from '@navikt/ft-types';
import { NavBrukerKjonn, FagsakStatus, RelasjonsRolleType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { alleKodeverk } from '@navikt/ft-storybook-utils';

import AktorSakIndex from './AktorSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-sak-visittkort/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

const fagsak = {
  saksnummer: '35425245',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  status: FagsakStatus.UNDER_BEHANDLING,
  barnFodt: '2020-01-01',
  opprettet: '2020-01-01',
  endret: '2020-01-01',
  antallBarn: 1,
  kanRevurderingOpprettes: false,
  skalBehandlesAvInfotrygd: false,
  dekningsgrad: 100,
};

export default {
  title: 'sak/sak-aktor',
  component: AktorSakIndex,
};

const Template: Story<{
  aktorInfo?: Aktor;
}> = ({ aktorInfo }) => (
  <AktorSakIndex
    valgtAktorId="123"
    aktorInfo={aktorInfo}
    kodeverkSamling={alleKodeverk}
    renderSomLenke={(className, fagsakKomponent) => (
      <button type="button" className={className}>
        {fagsakKomponent}
      </button>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  aktorInfo: {
    fagsaker: [
      fagsak,
      {
        ...fagsak,
        saksnummer: '123',
      },
    ],
    person: {
      navn: 'Espen Utvikler',
      kjønn: NavBrukerKjonn.MANN,
      fødselsdato: '1979-01-01',
      fødselsnummer: '123456233',
      aktørId: '2323',
    },
  },
};

export const UgyldigAktørId = Template.bind({});
