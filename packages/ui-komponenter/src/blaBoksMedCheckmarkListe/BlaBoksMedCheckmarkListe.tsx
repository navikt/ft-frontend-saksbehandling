import { BodyShort } from '@navikt/ds-react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from '../Image';
import styles from './blaBoksMedCheckmarkListe.module.css';
import checkBlaIkonUrl from './check_blue.svg';

interface OwnProps {
  textIds: string[];
}

const BlaBoksMedCheckmarkListe = ({ textIds }: OwnProps) => (
  <div className={styles.container}>
    {textIds.map(id => (
      <div key={id} className={styles.rad}>
        <Image src={checkBlaIkonUrl} className={styles.checkBlaIkon} />
        <BodyShort size="small">
          <FormattedMessage id={id} />
        </BodyShort>
      </div>
    ))}
  </div>
);

export default BlaBoksMedCheckmarkListe;
