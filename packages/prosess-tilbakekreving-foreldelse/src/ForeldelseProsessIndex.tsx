import { RawIntlProvider } from 'react-intl';

import { RelasjonsRolleType } from '@navikt/ft-kodeverk';
import type { Aksjonspunkt, Behandling, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { ForeldelseForm } from './components/ForeldelseForm';
import { type BeregnBeløpParams, type BeregnBeløpResultat } from './components/splittePerioder/PeriodeController';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { ForeldelsesresultatActivity } from './types/ForeldelsesresultatActivity';
import type { KodeverkMedNavn } from './types/kodeverkMedNavn';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import type { VurderForeldelseAp } from './types/VurderForeldelseAp';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface Props {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  beregnBelop: (params: BeregnBeløpParams) => Promise<BeregnBeløpResultat>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkter: Aksjonspunkt[];
  relasjonsRolleType: RelasjonsRolleType;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn<RelasjonsRolleType>[];
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
