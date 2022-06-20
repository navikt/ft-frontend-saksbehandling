import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { AlleKodeverk, AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, KunYtelse } from '@navikt/ft-types';
import React from 'react';
import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import KunYtelsePanel from './KunYtelsePanel';

const { FASTSETT_BG_KUN_YTELSE, VURDER_BESTEBEREGNING } = FaktaOmBeregningTilfelle;

export const setFaktaPanelForKunYtelse = (
  faktaPanels,
  tilfeller,
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  alleKodeverk,
) => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    faktaPanels.push(
      <React.Fragment key="FASTSETT_BG_KUN_YTELSE">
        {/* @ts-ignore */}
        <KunYtelsePanel
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          faktaOmBeregning={faktaOmBeregning}
          alleKodeverk={alleKodeverk}
        />
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
  kunYtelse: KunYtelse,
  tilfeller: string[],
  faktaOmBeregningAndeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): KunYtelseValues => {
  if (tilfeller && tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    return KunYtelsePanel.buildInitialValues(
      kunYtelse,
      faktaOmBeregningAndeler,
      arbeidsgiverOpplysningerPerId,
      alleKodeverk,
    );
  }
  return {};
};
