import React, {ReactElement} from 'react';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, FaktaOmBeregning, KunYtelse} from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { KunYtelsePanel } from './KunYtelsePanel';

const { FASTSETT_BG_KUN_YTELSE, VURDER_BESTEBEREGNING } = FaktaOmBeregningTilfelle;

export const setFaktaPanelForKunYtelse = (
  faktaPanels: ReactElement[],
  tilfeller: string[],
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  faktaOmBeregning: FaktaOmBeregning,
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
  kunYtelse: KunYtelse | undefined,
  tilfeller: string[],
): FaktaBeregningTransformedValues => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE) && !!kunYtelse) {
    const kunYtelseTransformedValues = KunYtelsePanel.transformValues(values, kunYtelse);
    const faktaOmBeregningTilfeller = [FASTSETT_BG_KUN_YTELSE];
    if (kunYtelse?.fodendeKvinneMedDP) {
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
