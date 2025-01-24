import { RawIntlProvider } from 'react-intl';

import {
  Behandling,
  FeilutbetalingPerioderWrapper,
  KodeverkMedNavn,
  StandardProsessPanelProps,
} from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { TilbakekrevingForm } from './components/TilbakekrevingForm';
import { CustomVilkarsVurdertePeriode } from './components/TilbakekrevingPeriodeForm';
import { VilkårsvurderingAp } from './types/VilkårsvurderingAp';

import messages from '../i18n/nb_NO.json';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelTb';
import { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import { VilkårsvurdertePerioderWrapper } from './types/VilkårsvurdertePerioder';

const intl = createIntl(messages);

export interface Props {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkårsvurdertePerioderWrapper;
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  relasjonsRolleType: string;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn[];
}

export const TilbakekrevingProsessIndex = ({
  behandling,
  perioderForeldelse,
  vilkarvurderingsperioder,
  vilkarvurdering,
  beregnBelop,
  kodeverkSamlingFpTilbake,
  submitCallback,
  alleMerknaderFraBeslutter,
  isReadOnly,
  formData,
  setFormData,
  relasjonsRolleType,
  relasjonsRolleTypeKodeverk,
}: Props & StandardProsessPanelProps<VilkårsvurderingAp, CustomVilkarsVurdertePeriode[]>) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm
      behandlingUuid={behandling.uuid}
      perioderForeldelse={perioderForeldelse}
      perioder={vilkarvurderingsperioder.perioder}
      rettsgebyr={vilkarvurderingsperioder.rettsgebyr}
      vilkarvurdering={vilkarvurdering}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
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
