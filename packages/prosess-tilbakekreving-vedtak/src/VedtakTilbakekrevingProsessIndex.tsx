import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import {
  AlleKodeverkTilbakekreving,
  Behandling,
  BeregningsresultatTilbakekreving,
  StandardProsessPanelProps,
  Vedtaksbrev,
} from '@navikt/ft-types';

import { FormValues } from './components/brev/TilbakekrevingEditerVedtaksbrevPanel';
import TilbakekrevingVedtak from './components/TilbakekrevingVedtak';
import ForeslaVedtakTilbakekrevingAp from './types/ForeslaVedtakTilbakekrevingAp';
import messages from '../i18n/nb_NO.json';
import { ForhandsvisData } from './components/TilbakekrevingVedtakForm';

const intl = createIntl(messages);

interface OwnProps {
  behandling: Behandling;
  beregningsresultat: BeregningsresultatTilbakekreving;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
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
  tilbakekrevingKodeverk,
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
      alleKodeverk={tilbakekrevingKodeverk}
      fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
      erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
      erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default VedtakTilbakekrevingProsessIndex;
