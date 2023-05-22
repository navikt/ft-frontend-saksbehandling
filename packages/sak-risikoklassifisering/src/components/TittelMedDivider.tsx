import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './tittelMedDivider.module.css';

interface OwnProps {
  ikon: ReactElement;
  tittel: string;
}

/**
 * TittelMedDivider
 *
 * Viser et ikon og en tittel skilt med en vertikal grå linje.
 */
const TittelMedDivider: FunctionComponent<OwnProps> = ({ ikon, tittel }) => (
  <FlexContainer>
    <FlexRow>
      <FlexColumn>{ikon}</FlexColumn>
      <FlexColumn>
        <div className={styles.tekst}>
          <BodyShort size="small">
            <FormattedMessage id={tittel} />
          </BodyShort>
        </div>
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export default TittelMedDivider;
