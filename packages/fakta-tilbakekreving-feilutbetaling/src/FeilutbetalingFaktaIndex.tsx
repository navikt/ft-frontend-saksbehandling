import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import {
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  FeilutbetalingAarsak,
  FeilutbetalingFakta,
  StandardProsessPanelProps,
} from '@navikt/ft-types';

import FeilutbetalingInfoPanel, { FormValues } from './components/FeilutbetalingInfoPanel';
import AvklartFaktaFeilutbetalingAp from './types/AvklartFaktaFeilutbetalingAp';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  fagsakYtelseTypeKode: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  isAksjonspunktOpen: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

const FeilutbetalingFaktaIndex: FunctionComponent<
  OwnProps & StandardProsessPanelProps<AvklartFaktaFeilutbetalingAp, FormValues>
> = ({
  feilutbetalingFakta,
  feilutbetalingAarsak,
  fagsakYtelseTypeKode,
  isAksjonspunktOpen,
  isReadOnly,
  alleKodeverk,
  tilbakekrevingKodeverk,
  alleMerknaderFraBeslutter,
  submitCallback,
  formData,
  setFormData,
}) => {
  const fAarsak = feilutbetalingAarsak.find(a => a.ytelseType === fagsakYtelseTypeKode);
  if (!fAarsak) {
    throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${fagsakYtelseTypeKode}`);
  }

  return (
    <RawIntlProvider value={intl}>
      <FeilutbetalingInfoPanel
        feilutbetalingFakta={feilutbetalingFakta}
        feilutbetalingAarsak={fAarsak}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={tilbakekrevingKodeverk}
        fpsakKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        hasOpenAksjonspunkter={isAksjonspunktOpen}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};

export default FeilutbetalingFaktaIndex;
