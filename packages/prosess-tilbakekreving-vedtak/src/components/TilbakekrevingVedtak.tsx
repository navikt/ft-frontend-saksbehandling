import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';

import { VedtakResultatType } from '@navikt/ft-kodeverk';

import type { BeregningResultatPeriode } from '../types/BeregningsresultatTilbakekreving';
import type { ForeslaVedtakTilbakekrevingAp } from '../types/ForeslaVedtakTilbakekrevingAp';
import type { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import type { VedtaksbrevAvsnitt } from '../types/VedtaksbrevAvsnitt';
import { type FormValues } from './brev/TilbakekrevingEditerVedtaksbrevPanel';
import { type ForhandsvisData, TilbakekrevingVedtakForm } from './TilbakekrevingVedtakForm';
import { TilbakekrevingVedtakPeriodeTabell } from './TilbakekrevingVedtakPeriodeTabell';

interface Props {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  readOnly: boolean;
  resultat: VedtakResultatType;
  perioder: BeregningResultatPeriode[];
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  behandlingUuid: string;
  avsnittsliste: VedtaksbrevAvsnitt[];
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<void>;
  erRevurderingTilbakekrevingKlage?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

export const TilbakekrevingVedtak = ({
  submitCallback,
  readOnly,
  resultat,
  perioder,
  kodeverkSamlingFpTilbake,
  behandlingUuid,
  avsnittsliste,
  fetchPreviewVedtaksbrev,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
  formData,
  setFormData,
}: Props) => (
  <VStack gap="space-24" maxWidth="1200px">
    <Heading size="small" level="2">
      <FormattedMessage id="TilbakekrevingVedtak.Vedtak" />
    </Heading>
    <div>
      <Label>
        <FormattedMessage id="TilbakekrevingVedtak.Resultat" />
      </Label>
      <BodyShort>{kodeverkSamlingFpTilbake['VedtakResultatType'].find(vrt => vrt.kode === resultat)?.navn}</BodyShort>
    </div>
    <TilbakekrevingVedtakPeriodeTabell perioder={perioder} kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake} />
    <TilbakekrevingVedtakForm
      submitCallback={submitCallback}
      readOnly={readOnly}
      behandlingUuid={behandlingUuid}
      avsnittsliste={avsnittsliste}
      fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
      erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
      erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      formData={formData}
      setFormData={setFormData}
    />
  </VStack>
);
