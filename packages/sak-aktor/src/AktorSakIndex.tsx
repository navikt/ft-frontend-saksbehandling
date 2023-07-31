import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { Aktor, KodeverkMedNavn } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import AktoerGrid from './components/AktoerGrid';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OwnProps {
  valgtAktorId: string;
  aktorInfo?: Aktor;
  fagsakStatuser: KodeverkMedNavn[];
  fagsakYtelseTyper: KodeverkMedNavn[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

const AktorSakIndex: FunctionComponent<OwnProps> = ({
  valgtAktorId,
  aktorInfo,
  fagsakStatuser,
  fagsakYtelseTyper,
  renderSomLenke,
}) => (
  <RawIntlProvider value={intl}>
    {aktorInfo && (
      <AktoerGrid
        aktorInfo={aktorInfo}
        fagsakStatuser={fagsakStatuser}
        fagsakYtelseTyper={fagsakYtelseTyper}
        renderSomLenke={renderSomLenke}
      />
    )}
    {!aktorInfo && (
      <BodyShort size="small">
        <FormattedMessage id="AktorSakIndex.UgyldigAktorId" values={{ id: valgtAktorId }} />
      </BodyShort>
    )}
  </RawIntlProvider>
);

export default AktorSakIndex;
