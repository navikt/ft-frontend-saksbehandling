 
import React, { useContext } from 'react';
import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { prettifyDateString } from '@navikt/ft-utils';
import styles from './assessedBy.module.css';
import { BodyShort } from '@navikt/ds-react';
import SaksbehandlernavnContext from '../saksbehandlernavn-context/SaksbehandlernavnContext';

export interface IAssessedByProps {
  ident?: string;
  date?: string;
}

/* For å få opp saksbehandlerens navn må sette saksbehandlernavn i SaksbehandlernavnContext.Provider
 */

const AssessedBy = ({ ident, date }: IAssessedByProps) => {
  const saksbehandlernavn = useContext(SaksbehandlernavnContext);
  if (!ident) {
    return null;
  }
  const name = saksbehandlernavn[ident] || ident;
  const formattedDate = date ? `, ${prettifyDateString(date)}` : '';

  return (
    <div className={styles['assessed-by']}>
      <PersonPencilFillIcon height="1em" width="1em" />
      <BodyShort size="small">{`Vurdering av ${name}${formattedDate}`}</BodyShort>
    </div>
  );
};

export default AssessedBy;
