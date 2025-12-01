import { useContext } from 'react';

import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort } from '@navikt/ds-react';

import { prettifyDateString } from '@navikt/ft-utils';

import { SaksbehandlernavnContext } from './SaksbehandlernavnContext';

import styles from './assessedBy.module.css';

interface IAssessedByProps {
  date?: string;
  ident?: string;
}

/* For å få opp saksbehandlerens navn må sette saksbehandlernavn i SaksbehandlernavnContext.Provider
 */
export const AssessedBy = ({ ident, date }: IAssessedByProps) => {
  const saksbehandlernavn = useContext(SaksbehandlernavnContext);
  if (!ident) {
    return null;
  }
  const name = saksbehandlernavn[ident] ?? ident;
  const formattedDate = date ? `, ${prettifyDateString(date)}` : '';

  return (
    <div className={styles['assessed-by']}>
      <PersonPencilFillIcon height="1em" width="1em" />
      <BodyShort size="small">{`Vurdering av ${name}${formattedDate}`}</BodyShort>
    </div>
  );
};
