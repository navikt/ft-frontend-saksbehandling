import React from 'react';
import { CaseworkerFilled } from '@navikt/ds-icons';
import { prettifyDateString } from '@navikt/ft-utils';
import styles from './assessedBy.less';

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
      <CaseworkerFilled height="1.5em" width="1.5em" />
      <span>{`Vurdering av ${name || ''}${date ? `, ${prettifyDateString(date)}` : ''}`}</span>
    </div>
  );
};

export default AssessedBy;
