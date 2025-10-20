import { RawIntlProvider } from 'react-intl';

import type { Aksjonspunkt, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { ForeldelseForm } from './components/ForeldelseForm';
import { type BeregnBeløpParams, type BeregnBeløpResultat } from './components/splittePerioder/PeriodeController';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { ForeldelsesresultatActivity } from './types/ForeldelsesresultatActivity';
import type { KodeverkMedNavn } from './types/kodeverkMedNavn';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import type { RelasjonsRolleType } from './types/RelasjonsRolleType';
import type { VurderForeldelseAp } from './types/VurderForeldelseAp';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlingUuid: string;
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
  behandlingUuid,
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
      behandlingUuid={behandlingUuid}
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
