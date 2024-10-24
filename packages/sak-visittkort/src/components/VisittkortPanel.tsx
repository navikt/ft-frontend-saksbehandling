import React from 'react';
import { useIntl } from 'react-intl';
import { PersonCard, EmptyPersonCard, Gender } from '@navikt/ft-plattform-komponenter';
import { Fagsak, FagsakPersoner } from '@navikt/ft-types';
import { RelasjonsRolleType, NavBrukerKjonn } from '@navikt/ft-kodeverk';

import { HStack, Spacer } from '@navikt/ds-react';
import VisittkortLabels from './VisittkortLabels';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';

import styles from './visittkortPanel.module.css';

const utledKjonn = (kjonn: string): Gender => {
  if (kjonn === NavBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn === NavBrukerKjonn.MANN ? Gender.male : Gender.unknown;
};

export interface Props {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge: boolean;
  erTilbakekreving: boolean;
}

const VisittkortPanel = ({ fagsak, fagsakPersoner, lenkeTilAnnenPart, harVerge, erTilbakekreving }: Props) => {
  const intl = useIntl();

  const fagsakPerson = fagsakPersoner.bruker;
  const erMor = fagsak.relasjonsRolleType === RelasjonsRolleType.MOR;
  if (erTilbakekreving && harVerge) {
    return (
      <div className={styles.container}>
        <PersonCard
          name={fagsakPerson.navn}
          fodselsnummer={fagsakPerson.fødselsnummer}
          gender={fagsakPerson.kjønn === NavBrukerKjonn.KVINNE ? Gender.female : Gender.male}
          renderLabelContent={() => <VisittkortLabels fagsakPerson={fagsakPerson} harVerge={harVerge} />}
        />
      </div>
    );
  }
  const soker = erMor || !fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;
  const annenPart = !erMor && fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;

  return (
    <div className={styles.container}>
      <HStack wrap={false} align="center">
        {soker.aktørId && (
          <PersonCard
            name={soker.navn}
            fodselsnummer={soker.fødselsnummer}
            gender={utledKjonn(soker.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => <VisittkortLabels fagsakPerson={soker} harVerge={harVerge} />}
            isActive={erMor}
          />
        )}
        {!soker.aktørId && <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />}
        {annenPart && annenPart.aktørId && (
          <PersonCard
            name={annenPart.navn}
            fodselsnummer={annenPart.fødselsnummer}
            gender={utledKjonn(annenPart.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => <VisittkortLabels fagsakPerson={annenPart} harVerge={false} />}
            isActive={!erMor}
          />
        )}
        {annenPart && !annenPart.aktørId && (
          <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
        )}
        {fagsakPersoner.familiehendelse && (
          <>
            <Spacer />
            <VisittkortBarnInfoPanel familiehendelse={fagsakPersoner.familiehendelse} />
          </>
        )}
      </HStack>
    </div>
  );
};

export default VisittkortPanel;
