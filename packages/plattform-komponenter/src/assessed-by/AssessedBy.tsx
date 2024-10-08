/* eslint-disable max-len */
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

  return (
    <div className={styles['assessed-by']}>
      <PersonPencilFillIcon height="1em" width="1em" />
      <BodyShort size="small">{`Vurdering av ${saksbehandlernavn[ident] ? saksbehandlernavn[ident] : ident}${date ? `, ${prettifyDateString(date)}` : ''}`}</BodyShort>
    </div>
  );
};

export default AssessedBy;
