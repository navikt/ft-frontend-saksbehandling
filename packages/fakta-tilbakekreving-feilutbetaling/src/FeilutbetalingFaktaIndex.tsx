import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { FeilutbetalingAarsak, FeilutbetalingFakta, StandardProsessPanelProps } from '@navikt/ft-types';

import FeilutbetalingInfoPanel, { FormValues } from './components/FeilutbetalingInfoPanel';
import AvklartFaktaFeilutbetalingAp from './types/AvklartFaktaFeilutbetalingAp';

import messages from '../i18n/nb_NO.json';
import KodeverkFpSakForPanel from './types/kodeverkFpSakForPanel';
import KodeverkFpTilbakeForPanel from './types/kodeverkFpTilbakeForPanel';

const intl = createIntl(messages);

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  fagsakYtelseTypeKode: string;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  kodeverkSamlingFpsak: KodeverkFpSakForPanel;
  isAksjonspunktOpen: boolean;
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
  kodeverkSamlingFpsak,
  kodeverkSamlingFpTilbake,
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
        kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
        kodeverkSamlingFpsak={kodeverkSamlingFpsak}
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
