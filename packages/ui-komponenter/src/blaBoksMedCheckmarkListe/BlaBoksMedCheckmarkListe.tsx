import { BodyShort, ReadMore } from '@navikt/ds-react';
import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { CheckmarkIcon } from '@navikt/aksel-icons';
import styles from './blaBoksMedCheckmarkListe.module.css';

export type Saksopplysning = {
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
};

interface Props {
  saksopplysninger: Saksopplysning[];
}

export const BlaBoksMedCheckmarkListe = ({ saksopplysninger }: Props) => (
  <div className={styles.container}>
    {saksopplysninger.map((opplysning, index) => (
      <div key={`BlaBoksMedCheckmarkListe-${opplysning.textId}-${index}`} className={styles.rad}>
        {opplysning.readMoreContent && (
          <ReadMore size="small" header={<FormattedMessage id={opplysning.textId} />}>
            {opplysning.readMoreContent}
          </ReadMore>
        )}
        {!opplysning.readMoreContent && (
          <>
            <CheckmarkIcon className={styles.checkBlaIkon} height={35} width={35} />
            <BodyShort size="small">
              <FormattedMessage id={opplysning.textId} />
            </BodyShort>
          </>
        )}
      </div>
    ))}
  </div>
);
