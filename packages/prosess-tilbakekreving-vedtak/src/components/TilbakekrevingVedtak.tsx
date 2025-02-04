import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { BeregningResultatPeriode } from '../types/BeregningsresultatTilbakekreving';
import { ForeslaVedtakTilbakekrevingAp } from '../types/ForeslaVedtakTilbakekrevingAp';
import type { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelTv';
import { VedtaksbrevAvsnitt } from '../types/VedtaksbrevAvsnitt';
import { FormValues } from './brev/TilbakekrevingEditerVedtaksbrevPanel';
import { ForhandsvisData, TilbakekrevingVedtakForm } from './TilbakekrevingVedtakForm';
import { TilbakekrevingVedtakPeriodeTabell } from './TilbakekrevingVedtakPeriodeTabell';

export interface Props {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  readOnly: boolean;
  resultat: string;
  perioder: BeregningResultatPeriode[];
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  behandlingUuid: string;
  avsnittsliste: VedtaksbrevAvsnitt[];
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
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
  <>
    <Heading size="small">
      <FormattedMessage id="TilbakekrevingVedtak.Vedtak" />
    </Heading>
    <VerticalSpacer twentyPx />
    <Detail>
      <FormattedMessage id="TilbakekrevingVedtak.Resultat" />
    </Detail>
    <BodyShort size="small">
      {kodeverkSamlingFpTilbake[KodeverkType.VEDTAK_RESULTAT_TYPE].find(vrt => vrt.kode === resultat)?.navn}
    </BodyShort>
    <VerticalSpacer sixteenPx />
    <TilbakekrevingVedtakPeriodeTabell perioder={perioder} kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake} />
    <VerticalSpacer sixteenPx />
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
  </>
);
