import React from 'react';

import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import { KodeverkFpSakForPanel } from '../../typer/KodeverkForPanelForFb';
import { getFaktaOmBeregning, getFaktaOmBeregningTilfellerKoder } from './BgFaktaUtils';
import { FastsettBgKunYtelse } from './kunYtelse/FastsettBgKunYtelse';
import { VurderOgFastsettATFL } from './vurderOgFastsettATFL/VurderOgFastsettATFL';

interface Props {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkFpSakForPanel;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
}

/**
 * FaktaForArbeidstakerFLOgSNPanel
 *
 * Container komponent.. Inneholder paneler for felles faktaavklaring for aksjonspunktet Vurder fakta for arbeidstaker, frilans og selvstendig næringsdrivende
 */
export const FaktaForATFLOgSNPanel = ({
  readOnly,
  isAksjonspunktClosed,
  beregningsgrunnlag,
  kodeverkSamling,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
  renderTextFieldAndSubmitButton,
  vilkarsperiodeSkalVurderesIBehandlingen,
}: Props) => {
  const { avklaringsbehov } = beregningsgrunnlag;
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const faktaOmBeregning = getFaktaOmBeregning(beregningsgrunnlag);

  return (
    <div>
      <FastsettBgKunYtelse
        tilfeller={tilfeller}
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        faktaOmBeregning={faktaOmBeregning}
        kodeverkSamling={kodeverkSamling}
        renderTextFieldAndSubmitButton={renderTextFieldAndSubmitButton}
      />
      <VurderOgFastsettATFL
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        tilfeller={tilfeller}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        avklaringsbehov={avklaringsbehov}
        updateOverstyring={updateOverstyring}
        renderTextFieldAndSubmitButton={renderTextFieldAndSubmitButton}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        vilkarsperiodeSkalVurderesIBehandlingen={vilkarsperiodeSkalVurderesIBehandlingen}
      />
    </div>
  );
};
