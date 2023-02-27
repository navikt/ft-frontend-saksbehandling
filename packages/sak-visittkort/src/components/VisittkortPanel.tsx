import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { PersonCard, EmptyPersonCard, Gender } from '@navikt/ft-plattform-komponenter';
import { Fagsak, FagsakPersoner } from '@navikt/ft-types';
import { RelasjonsRolleType, NavBrukerKjonn } from '@navikt/ft-kodeverk';

import VisittkortLabels from './VisittkortLabels';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';

import styles from './visittkortPanel.module.css';

const utledKjonn = (kjonn: string): Gender => {
  if (kjonn === NavBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn === NavBrukerKjonn.MANN ? Gender.male : Gender.unknown;
};

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge: boolean;
  erTilbakekreving: boolean;
}

const VisittkortPanel: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
  harVerge,
  erTilbakekreving,
}) => {
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
          renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={fagsakPerson} harVerge={harVerge} />}
        />
      </div>
    );
  }
  const soker = erMor || !fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;
  const annenPart = !erMor && fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;

  return (
    <div className={styles.container}>
      <FlexContainer>
        <FlexRow>
          {soker.aktørId && (
            <FlexColumn>
              <PersonCard
                name={soker.navn}
                fodselsnummer={soker.fødselsnummer}
                gender={utledKjonn(soker.kjønn)}
                url={lenkeTilAnnenPart}
                renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={soker} harVerge={harVerge} />}
                isActive={erMor}
              />
            </FlexColumn>
          )}
          {!soker.aktørId && (
            <FlexColumn>
              <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
            </FlexColumn>
          )}
          {annenPart && annenPart.aktørId && (
            <FlexColumn>
              <PersonCard
                name={annenPart.navn}
                fodselsnummer={annenPart.fødselsnummer}
                gender={utledKjonn(annenPart.kjønn)}
                url={lenkeTilAnnenPart}
                renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={annenPart} harVerge={false} />}
                isActive={!erMor}
              />
            </FlexColumn>
          )}
          {annenPart && !annenPart.aktørId && (
            <FlexColumn>
              <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
            </FlexColumn>
          )}
          {fagsakPersoner.familiehendelse && (
            <FlexColumn className={styles.pushRight}>
              <VisittkortBarnInfoPanel familiehendelse={fagsakPersoner.familiehendelse} />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default VisittkortPanel;
