import { RawIntlProvider } from 'react-intl';

import type { StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { FeilutbetalingInfoPanel, type FormValues } from './components/FeilutbetalingInfoPanel';
import type { AvklartFaktaFeilutbetalingAp } from './types/AvklartFaktaFeilutbetalingAp';
import type { FeilutbetalingÅrsak } from './types/FeilutbetalingÅrsak';
import type { FeilutbetalingFakta } from './types/FeilutbetalingFakta';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingÅrsak[];
  fagsakYtelseTypeKode: string;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  kodeverkSamlingFpsak: KodeverkForPanel;
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
