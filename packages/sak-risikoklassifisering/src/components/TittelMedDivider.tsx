import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react/esm';
import { FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';

import styles from './tittelMedDivider.module.css';

interface OwnProps {
  imageSrc: string;
  tittel: string;
}

/**
 * TittelMedDivider
 *
 * Viser et ikon og en tittel skilt med en vertikal grå linje.
 */
const TittelMedDivider: FunctionComponent<OwnProps> = ({ imageSrc, tittel }) => {
  const intl = useIntl();
  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Image
            src={imageSrc}
            alt={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
            tooltip={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
          />
        </FlexColumn>
        <FlexColumn>
          <div className={styles.divider} />
        </FlexColumn>
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
};

export default TittelMedDivider;
