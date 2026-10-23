import { type ReactNode } from 'react';
import { FormattedMessage, type MessageDescriptor } from 'react-intl';

import { CheckmarkIcon } from '@navikt/aksel-icons';
import { BodyShort, ReadMore } from '@navikt/ds-react';

import styles from './blaBoksMedCheckmarkListe.module.css';

type Saksopplysning = {
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
};

interface Props {
  saksopplysninger: Saksopplysning[];
}

// textId tilhører konsumentens IntlProvider, ikke meldingene i denne pakken.
const tilMessageId = (textId: string) => textId as MessageDescriptor['id'];

export const BlaBoksMedCheckmarkListe = ({ saksopplysninger }: Props) => (
  <div className={styles.container}>
    {saksopplysninger.map((opplysning, index) => (
      <div key={`BlaBoksMedCheckmarkListe-${opplysning.textId}-${index}`} className={styles.rad}>
        {opplysning.readMoreContent && (
          <ReadMore size="small" header={<FormattedMessage id={tilMessageId(opplysning.textId)} />}>
            {opplysning.readMoreContent}
          </ReadMore>
        )}
        {!opplysning.readMoreContent && (
          <>
            <CheckmarkIcon className={styles.checkBlaIkon} height={35} width={35} />
            <BodyShort size="small">
              <FormattedMessage id={tilMessageId(opplysning.textId)} />
            </BodyShort>
          </>
        )}
      </div>
    ))}
  </div>
);
