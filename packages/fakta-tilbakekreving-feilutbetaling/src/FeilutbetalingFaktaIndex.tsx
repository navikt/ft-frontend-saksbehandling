import React, { FunctionComponent, useMemo } from 'react';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  FeilutbetalingFakta,
  FeilutbetalingAarsak,
  AlleKodeverkTilbakekreving,
  StandardFaktaPanelProps,
} from '@navikt/ft-types';

import FeilutbetalingInfoPanel from './components/FeilutbetalingInfoPanel';
import FaktaTilbakekrevingFeilutbetalingAp from './FaktaTilbakekrevingFeilutbetalingAp';
import AvklartFaktaFeilutbetalingAp from './types/AvklartFaktaFeilutbetalingAp';

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  fagsakYtelseTypeKode: string;
  fpTilbakeKodeverk: AlleKodeverkTilbakekreving;
}

const FeilutbetalingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps<AvklartFaktaFeilutbetalingAp>> = ({
  feilutbetalingFakta,
  feilutbetalingAarsak,
  fagsakYtelseTypeKode,
  aksjonspunkter,
  readOnly,
  fpTilbakeKodeverk,
  alleKodeverk,
  submitCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}) => {
  const aksjonspunkterForFeilutbetalingFakta = useMemo(() => (
    aksjonspunkter.filter((ap) => FaktaTilbakekrevingFeilutbetalingAp.AVKLAR_FAKTA_FOR_FEILUTBETALING === ap.definisjon)),
  [aksjonspunkter]);

  return (
    <FeilutbetalingInfoPanel
      feilutbetalingFakta={feilutbetalingFakta}
      feilutbetalingAarsak={feilutbetalingAarsak.find((a) => a.ytelseType === fagsakYtelseTypeKode)}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={fpTilbakeKodeverk}
      fpsakKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={aksjonspunkterForFeilutbetalingFakta.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses)}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default FeilutbetalingFaktaIndex;
