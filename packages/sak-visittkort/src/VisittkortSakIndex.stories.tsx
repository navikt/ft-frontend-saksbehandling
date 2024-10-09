import React from 'react';
import { StoryFn } from '@storybook/react';

import {
  NavBrukerKjonn,
  FagsakStatus,
  PersonstatusType,
  FagsakYtelseType,
  RelasjonsRolleType,
  FamilieHendelseType,
} from '@navikt/ft-kodeverk';
import { Fagsak, FagsakPersoner } from '@navikt/ft-types';
import VisittkortSakIndex from './VisittkortSakIndex';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

export default {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
};

const defaultFagsak = {
  saksnummer: '123456',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  status: FagsakStatus.LOPENDE,
  dekningsgrad: 100,
};

const fagsakPerson = {
  navn: 'Espen Utvikler',
  fødselsdato: '1979-01-01',
  fødselsnummer: '1234567',
  kjønn: NavBrukerKjonn.MANN,
  aktørId: '234',
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonAnnenPart = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '6565656',
  kjønn: NavBrukerKjonn.KVINNE,
  personstatusType: PersonstatusType.BOSATT,
  aktørId: 'test',
};

const fagsakPersonAnnenPartUkjent = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '6565656',
  kjønn: NavBrukerKjonn.KVINNE,
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonerUtenAnnenPart = {
  bruker: fagsakPerson,
};

const fagsakPersonerMedAnnenPart = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPart,
};

const fagsakPersonerMedAnnenPartUkjent = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPartUkjent,
};

const Template: StoryFn<{
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
}> = ({ fagsak, fagsakPersoner, lenkeTilAnnenPart }) => (
  <VisittkortSakIndex fagsak={fagsak} fagsakPersoner={fagsakPersoner} lenkeTilAnnenPart={lenkeTilAnnenPart} />
);

export const IkkeHarAnnenPart = Template.bind({});
IkkeHarAnnenPart.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerUtenAnnenPart,
};

export const PersonopplysningerForBeggeParter = Template.bind({});
PersonopplysningerForBeggeParter.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPart,
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const ForAnnenPartDerAktørIdErUkjent = Template.bind({});
ForAnnenPartDerAktørIdErUkjent.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPartUkjent,
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const MedDødfødtBarn = Template.bind({});
MedDødfødtBarn.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: fagsakPerson,
    familiehendelse: {
      hendelseType: FamilieHendelseType.FODSEL,
      dødfødsel: true,
      antallBarn: 1,
    },
  },
};
