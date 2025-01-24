import { RawIntlProvider } from 'react-intl';

import { Behandling, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';
import { FormValues } from './components/brev/TilbakekrevingEditerVedtaksbrevPanel';
import { TilbakekrevingVedtak } from './components/TilbakekrevingVedtak';
import { ForhandsvisData } from './components/TilbakekrevingVedtakForm';
import { BeregningsresultatTilbakekreving } from './types/BeregningsresultatTilbakekreving';
import { ForeslaVedtakTilbakekrevingAp } from './types/ForeslaVedtakTilbakekrevingAp';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelTv';
import { Vedtaksbrev } from './types/Vedtaksbrev';

const intl = createIntl(messages);

interface Props {
  behandling: Behandling;
  beregningsresultat: BeregningsresultatTilbakekreving;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  vedtaksbrev: Vedtaksbrev;
  fetchPreviewVedtaksbrev: (param: ForhandsvisData) => Promise<void>;
  erRevurderingTilbakekrevingKlage: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt: boolean;
}

export const VedtakTilbakekrevingProsessIndex = ({
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
}: Props & StandardProsessPanelProps<ForeslaVedtakTilbakekrevingAp, FormValues>) => (
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
