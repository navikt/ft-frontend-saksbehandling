import { RawIntlProvider } from 'react-intl';

import type { StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { type FormValues } from './components/brev/TilbakekrevingEditerVedtaksbrevPanel';
import { TilbakekrevingVedtak } from './components/TilbakekrevingVedtak';
import { type ForhandsvisData } from './components/TilbakekrevingVedtakForm';
import { type BeregningsresultatTilbakekreving } from './types/BeregningsresultatTilbakekreving';
import { type ForeslaVedtakTilbakekrevingAp } from './types/ForeslaVedtakTilbakekrevingAp';
import { type KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import { type Vedtaksbrev } from './types/Vedtaksbrev';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlingUuid: string;
  beregningsresultat: BeregningsresultatTilbakekreving;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  vedtaksbrev: Vedtaksbrev;
  fetchPreviewVedtaksbrev: (param: ForhandsvisData) => Promise<void>;
  erRevurderingTilbakekrevingKlage: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt: boolean;
}

export const VedtakTilbakekrevingProsessIndex = ({
  behandlingUuid,
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
      behandlingUuid={behandlingUuid}
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
