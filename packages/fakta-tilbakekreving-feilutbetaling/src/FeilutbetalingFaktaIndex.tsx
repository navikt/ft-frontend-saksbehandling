import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { FeilutbetalingInfoPanel, FormValues } from './components/FeilutbetalingInfoPanel';
import { AvklartFaktaFeilutbetalingAp } from './types/AvklartFaktaFeilutbetalingAp';

import messages from '../i18n/nb_NO.json';
import { KodeverkFpSakForPanel } from './types/KodeverkFpSakForPanelFtf';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelFtf';
import { FeilutbetalingFakta } from './types/FeilutbetalingFakta';
import { FeilutbetalingÅrsak } from './types/FeilutbetalingÅrsak';

const intl = createIntl(messages);

export interface Props {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingÅrsak[];
  fagsakYtelseTypeKode: string;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  kodeverkSamlingFpsak: KodeverkFpSakForPanel;
  isAksjonspunktOpen: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const FeilutbetalingFaktaIndex = ({
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
}: Props & StandardProsessPanelProps<AvklartFaktaFeilutbetalingAp, FormValues>) => {
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
