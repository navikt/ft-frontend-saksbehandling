import { BodyShort, ReadMore } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { CheckmarkIcon } from '@navikt/aksel-icons';
import styles from './blaBoksMedCheckmarkListe.module.css';

export type Saksopplysning = {
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
};

interface OwnProps {
  saksopplysninger: Saksopplysning[];
}

const BlaBoksMedCheckmarkListe = ({ saksopplysninger }: OwnProps) => (
  <div className={styles.container}>
    {saksopplysninger.map(opplysning => (
      <div key={opplysning.textId} className={styles.rad}>
        {!opplysning.readMoreContent && <CheckmarkIcon className={styles.checkBlaIkon} height={35} width={35} />}
        <BodyShort size="small">
          {opplysning.readMoreContent && (
            <ReadMore size="small" header={<FormattedMessage id={opplysning.textId} />}>
              {opplysning.readMoreContent}
            </ReadMore>
          )}
          {!opplysning.readMoreContent && <FormattedMessage id={opplysning.textId} />}
        </BodyShort>
      </div>
    ))}
  </div>
);

export default BlaBoksMedCheckmarkListe;
