import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { Behandling, BeregningsresultatTilbakekreving, StandardProsessPanelProps, Vedtaksbrev } from '@navikt/ft-types';

import { FormValues } from './components/brev/TilbakekrevingEditerVedtaksbrevPanel';
import TilbakekrevingVedtak from './components/TilbakekrevingVedtak';
import ForeslaVedtakTilbakekrevingAp from './types/ForeslaVedtakTilbakekrevingAp';
import messages from '../i18n/nb_NO.json';
import { ForhandsvisData } from './components/TilbakekrevingVedtakForm';
import KodeverkFpTilbakeForPanel from './types/kodeverkFpTilbakeForPanel';

const intl = createIntl(messages);

export interface OwnProps {
  behandling: Behandling;
  beregningsresultat: BeregningsresultatTilbakekreving;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  vedtaksbrev: Vedtaksbrev;
  fetchPreviewVedtaksbrev: (param: ForhandsvisData) => Promise<void>;
  erRevurderingTilbakekrevingKlage: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt: boolean;
}

const VedtakTilbakekrevingProsessIndex: FunctionComponent<
  OwnProps & StandardProsessPanelProps<ForeslaVedtakTilbakekrevingAp, FormValues>
> = ({
  behandling,
  beregningsresultat,
  isReadOnly,
  submitCallback,
  kodeverkSamlingFpTilbake,
  formData,
  setFormData,
  vedtaksbrev,
  fetchPreviewVedtaksbrev,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
}) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingVedtak
      behandlingUuid={behandling.uuid}
      perioder={beregningsresultat.beregningResultatPerioder}
      resultat={beregningsresultat.vedtakResultatType}
      avsnittsliste={vedtaksbrev.avsnittsliste}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
      fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
      erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
      erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default VedtakTilbakekrevingProsessIndex;
