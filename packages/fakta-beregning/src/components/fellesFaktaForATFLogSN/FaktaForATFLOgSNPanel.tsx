import React, { ReactElement } from 'react';

import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { getFaktaOmBeregning, getFaktaOmBeregningTilfellerKoder } from './BgFaktaUtils';
import { setFaktaPanelForKunYtelse } from './kunYtelse/FastsettBgKunYtelse';
import { VurderOgFastsettATFL } from './vurderOgFastsettATFL/VurderOgFastsettATFL';

const getFaktaPanels = ({
  readOnly,
  isAksjonspunktClosed,
  beregningsgrunnlag,
  kodeverkSamling,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
  renderTextFieldAndSubmitButton,
  vilkarsperiodeSkalVurderesIBehandlingen,
}: {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
}) => {
  const { avklaringsbehov } = beregningsgrunnlag;
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const faktaOmBeregning = getFaktaOmBeregning(beregningsgrunnlag);
  const faktaPanels: ReactElement[] = [];

  setFaktaPanelForKunYtelse(
    faktaPanels,
    tilfeller,
    readOnly,
    isAksjonspunktClosed,
    faktaOmBeregning,
    kodeverkSamling,
    renderTextFieldAndSubmitButton,
  );
  faktaPanels.push(
    <React.Fragment key="VurderOgFastsettATFL">
      {/* @ts-expect-error */}
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
    </React.Fragment>,
  );
  return faktaPanels;
};

type Props = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
};

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
}: Props) => (
  <div>
    {getFaktaPanels({
      readOnly,
      isAksjonspunktClosed,
      beregningsgrunnlag,
      kodeverkSamling,
      erOverstyrer,
      arbeidsgiverOpplysningerPerId,
      updateOverstyring,
      renderTextFieldAndSubmitButton,
      vilkarsperiodeSkalVurderesIBehandlingen,
    }).map(panelOrSpacer => panelOrSpacer)}
  </div>
);
