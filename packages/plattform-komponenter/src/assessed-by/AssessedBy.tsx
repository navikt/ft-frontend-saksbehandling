import React from 'react';
import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { prettifyDateString } from '@navikt/ft-utils';
import styles from './assessedBy.module.css';

interface IAssessedByProps {
  name?: string;
  date?: string;
}

const AssessedBy = ({ name, date }: IAssessedByProps) => {
  if (!name) {
    return null;
  }
  return (
    <div className={styles['assessed-by']}>
      <PersonPencilFillIcon height="1.5em" width="1.5em" />
      <span>{`Vurdering av ${name || ''}${date ? `, ${prettifyDateString(date)}` : ''}`}</span>
    </div>
  );
};

export default AssessedBy;
