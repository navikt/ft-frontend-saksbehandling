import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { Aktor, AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import AktoerGrid from './components/AktoerGrid';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  valgtAktorId: string;
  aktorInfo?: Aktor;
  alleKodeverk: AlleKodeverk;
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

const AktorSakIndex: FunctionComponent<OwnProps> = ({ valgtAktorId, aktorInfo, alleKodeverk, renderSomLenke }) => (
  <RawIntlProvider value={intl}>
    {aktorInfo && <AktoerGrid aktorInfo={aktorInfo} alleKodeverk={alleKodeverk} renderSomLenke={renderSomLenke} />}
    {!aktorInfo && (
      <BodyShort size="small">
        <FormattedMessage id="AktorSakIndex.UgyldigAktorId" values={{ id: valgtAktorId }} />
      </BodyShort>
    )}
  </RawIntlProvider>
);

export default AktorSakIndex;
