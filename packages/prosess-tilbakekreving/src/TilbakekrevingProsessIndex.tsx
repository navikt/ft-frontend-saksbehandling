import React, {
  FunctionComponent,
} from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import {
  DetaljerteFeilutbetalingsperioder, VilkarsVurdertePerioderWrapper, FeilutbetalingPerioderWrapper, AlleKodeverkTilbakekreving, StandardProsessPanelProps,
} from '@navikt/ft-types';

import TilbakekrevingForm from './components/TilbakekrevingForm';
import VilkarsVurderingAp from './types/VilkarsVurderingAp';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  navBrukerKjonn: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>
}

const TilbakekrevingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps<VilkarsVurderingAp>> = ({
  behandling,
  perioderForeldelse,
  vilkarvurderingsperioder,
  vilkarvurdering,
  navBrukerKjonn,
  tilbakekrevingKodeverk,
  submitCallback,
  alleMerknaderFraBeslutter,
  isReadOnly,
  beregnBelop,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm
      behandlingUuid={behandling.uuid}
      perioderForeldelse={perioderForeldelse}
      perioder={vilkarvurderingsperioder.perioder}
      rettsgebyr={vilkarvurderingsperioder.rettsgebyr}
      vilkarvurdering={vilkarvurdering}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleTilbakekrevingKodeverk={tilbakekrevingKodeverk}
      beregnBelop={beregnBelop}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default TilbakekrevingProsessIndex;
