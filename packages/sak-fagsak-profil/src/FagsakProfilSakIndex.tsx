import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import FagsakProfile from './components/FagsakProfile';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekster: string[];
}

const FagsakProfilSakIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  dekningsgrad,
  fagsakMarkeringTekster,
}) => (
  <RawIntlProvider value={intl}>
    <FagsakProfile
      saksnummer={saksnummer}
      fagsakYtelseType={fagsakYtelseType}
      fagsakStatus={fagsakStatus}
      dekningsgrad={dekningsgrad}
      fagsakMarkeringTekster={fagsakMarkeringTekster}
    />
  </RawIntlProvider>
);

export default FagsakProfilSakIndex;
