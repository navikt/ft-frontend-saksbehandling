import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, KunYtelse } from '@navikt/ft-types';
import React from 'react';
import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { KunYtelsePanel } from './KunYtelsePanel';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';

const { FASTSETT_BG_KUN_YTELSE, VURDER_BESTEBEREGNING } = FaktaOmBeregningTilfelle;

export const setFaktaPanelForKunYtelse = (
  faktaPanels,
  tilfeller,
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  kodeverkSamling: KodeverkForPanel,
  renderTextFieldAndSubmitButton: () => React.ReactNode,
) => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    faktaPanels.push(
      <React.Fragment key="FASTSETT_BG_KUN_YTELSE">
        {/* @ts-ignore TODO Denne bør fiksast */}
        <KunYtelsePanel
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          faktaOmBeregning={faktaOmBeregning}
          kodeverkSamling={kodeverkSamling}
        />
        {renderTextFieldAndSubmitButton()}
      </React.Fragment>,
    );
  }
};

export const transformValuesForKunYtelse = (
  values: FaktaOmBeregningAksjonspunktValues,
  kunYtelse: KunYtelse,
  tilfeller: string[],
): FaktaBeregningTransformedValues => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    const kunYtelseTransformedValues = KunYtelsePanel.transformValues(values, kunYtelse);
    const faktaOmBeregningTilfeller = [FASTSETT_BG_KUN_YTELSE];
    if (kunYtelse.fodendeKvinneMedDP) {
      faktaOmBeregningTilfeller.push(VURDER_BESTEBEREGNING);
    }
    return {
      faktaOmBeregningTilfeller,
      ...kunYtelseTransformedValues,
    };
  }
  return {};
};

export const buildInitialValuesKunYtelse = (
  kunYtelse: KunYtelse | undefined,
  tilfeller: string[],
  faktaOmBeregningAndeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): KunYtelseValues => {
  if (tilfeller && tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    return KunYtelsePanel.buildInitialValues(
      kunYtelse,
      faktaOmBeregningAndeler,
      arbeidsgiverOpplysningerPerId,
      kodeverkSamling,
    );
  }
  return {};
};
