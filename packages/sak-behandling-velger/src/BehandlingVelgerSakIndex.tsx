import React, { FunctionComponent, ReactElement } from 'react';
import { RawIntlProvider } from 'react-intl';
import { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import BehandlingerListe from './components/BehandlingerListe';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  behandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

const BehandlingVelgerSakIndex: FunctionComponent<OwnProps> = ({
  behandlinger,
  behandlingUuid,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  renderRadSomLenke,
  getKodeverkMedNavn,
}) => (
  <RawIntlProvider value={intl}>
    <BehandlingerListe
      behandlinger={behandlinger}
      renderRadSomLenke={renderRadSomLenke}
      behandlingUuid={behandlingUuid}
      skalViseAlleBehandlinger={skalViseAlleBehandlinger}
      toggleVisAlleBehandlinger={toggleVisAlleBehandlinger}
      getKodeverkMedNavn={getKodeverkMedNavn}
    />
  </RawIntlProvider>
);

export default BehandlingVelgerSakIndex;
