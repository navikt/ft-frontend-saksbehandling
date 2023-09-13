import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, HStack } from '@navikt/ds-react';

import styles from './tittelMedDivider.module.css';

export interface OwnProps {
  ikon: ReactElement;
  tittel: string;
}

/**
 * TittelMedDivider
 *
 * Viser et ikon og en tittel skilt med en vertikal grå linje.
 */
const TittelMedDivider: FunctionComponent<OwnProps> = ({ ikon, tittel }) => (
  <HStack gap="4">
    {ikon}
    <div className={styles.tekst}>
      <BodyShort size="small">
        <FormattedMessage id={tittel} />
      </BodyShort>
    </div>
  </HStack>
);

export default TittelMedDivider;
