import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort } from '@navikt/ds-react';

import { prettifyDateString } from '@navikt/ft-utils';

import styles from './assessedBy.module.css';

export interface IAssessedByProps {
  ident?: string;
  date?: string;
}

/* For å få opp saksbehandlerens navn må sette saksbehandlernavn i SaksbehandlernavnContext.Provider
 */
export const AssessedBy = ({ ident, date }: IAssessedByProps) => {
  if (!ident) {
    return null;
  }
  const formattedDate = date ? `, ${prettifyDateString(date)}` : '';

  return (
    <div className={styles['assessed-by']}>
      <PersonPencilFillIcon height="1em" width="1em" />
      <BodyShort size="small">{`Vurdering av ${ident}${formattedDate}`}</BodyShort>
    </div>
  );
};
