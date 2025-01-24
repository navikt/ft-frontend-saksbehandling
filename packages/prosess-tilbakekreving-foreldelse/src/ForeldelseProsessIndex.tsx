import { RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt,
  Behandling,
  FeilutbetalingPerioderWrapper,
  KodeverkMedNavn,
  StandardProsessPanelProps,
} from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';
import { ForeldelseForm } from './components/ForeldelseForm';
import { VurderForeldelseAp } from './types/VurderForeldelseAp';
import { ForeldelsesresultatActivity } from './types/ForeldelsesresultatActivity';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelTf';

const intl = createIntl(messages);

export interface Props {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkter: Aksjonspunkt[];
  relasjonsRolleType: string;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn[];
}

export const ForeldelseProsessIndex = ({
  perioderForeldelse,
  relasjonsRolleType,
  beregnBelop,
  behandling,
  aksjonspunkter,
  isReadOnly,
  kodeverkSamlingFpTilbake,
  submitCallback,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
  relasjonsRolleTypeKodeverk,
}: Props & StandardProsessPanelProps<VurderForeldelseAp, ForeldelsesresultatActivity[]>) => (
  <RawIntlProvider value={intl}>
    <ForeldelseForm
      behandlingUuid={behandling.uuid}
      perioderForeldelse={perioderForeldelse}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      aksjonspunkt={aksjonspunkter[0]}
      relasjonsRolleType={relasjonsRolleType}
      relasjonsRolleTypeKodeverk={relasjonsRolleTypeKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
      beregnBelop={beregnBelop}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);
