import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, Detail } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { BeregningResultatPeriode, VedtaksbrevAvsnitt } from '@navikt/ft-types';

import { FormValues } from './brev/TilbakekrevingEditerVedtaksbrevPanel';
import TilbakekrevingVedtakPeriodeTabell from './TilbakekrevingVedtakPeriodeTabell';
import TilbakekrevingVedtakForm, { ForhandsvisData } from './TilbakekrevingVedtakForm';
import ForeslaVedtakTilbakekrevingAp from '../types/ForeslaVedtakTilbakekrevingAp';
import KodeverkFpTilbakeForPanel from '../types/kodeverkFpTilbakeForPanel';

export interface OwnProps {
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

const TilbakekrevingVedtak: FunctionComponent<OwnProps> = ({
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
}) => (
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

export default TilbakekrevingVedtak;
