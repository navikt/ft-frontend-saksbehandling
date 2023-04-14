import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { Aksjonspunkt, Behandling, FeilutbetalingPerioderWrapper, StandardProsessPanelProps } from '@navikt/ft-types';

import ForeldelseForm from './components/ForeldelseForm';
import messages from '../i18n/nb_NO.json';
import VurderForeldelseAp from './types/VurderForeldelseAp';
import ForeldelsesresultatActivity from './types/foreldelsesresultatActivitytsType';
import KodeverkFpTilbakeForPanel from './types/kodeverkFpTilbakeForPanel';

const intl = createIntl(messages);

interface OwnProps {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  navBrukerKjonn: string;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkter: Aksjonspunkt[];
}

const ForeldelseProsessIndex: FunctionComponent<
  OwnProps & StandardProsessPanelProps<VurderForeldelseAp, ForeldelsesresultatActivity[]>
> = ({
  perioderForeldelse,
  navBrukerKjonn,
  beregnBelop,
  behandling,
  aksjonspunkter,
  isReadOnly,
  kodeverkSamlingFpTilbake,
  submitCallback,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ForeldelseForm
      behandlingUuid={behandling.uuid}
      perioderForeldelse={perioderForeldelse}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      aksjonspunkt={aksjonspunkter[0]}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
      beregnBelop={beregnBelop}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default ForeldelseProsessIndex;
