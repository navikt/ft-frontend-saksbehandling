import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Beregningsgrunnlag, Aksjonspunkt,
} from '@navikt/ft-types';
import BeregningFaktaAP, {
  BeregningOverstyringAP, AvklarBeregningsaktiviteterAP,
} from '../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../typer/interface/FaktaBeregningAksjonspunktCode';
import { OverstyrBeregningsaktiviteterAP } from '../typer/interface/BeregningAktivitetAP';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanel';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
} = FaktaBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap) => ap.definisjon === aksjonspunktKode);

type OwnProps = {
  intl: IntlShape
  submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP
    | BeregningFaktaAP | BeregningOverstyringAP) => Promise<void>;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submittable: boolean;
  erOverstyrer: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag?: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Redux Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
  intl,
  readOnly,
  aksjonspunkter,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  erOverstyrer,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => (
  <div>
    { /* @ts-ignore */ }
    <AvklareAktiviteterPanel
      readOnly={readOnly || (hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) && !erOverstyrer)}
      harAndreAksjonspunkterIPanel={hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)}
      submitCallback={submitCallback}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
    <VerticalSpacer thirtyTwoPx />
    { /* @ts-ignore */ }
    <VurderFaktaBeregningPanel
      intl={intl}
      readOnly={readOnly || ((hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter) || beregningsgrunnlag.erOverstyrtInntekt) && !erOverstyrer)}
      submitCallback={submitCallback}
      submittable={submittable}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      erOverstyrer={erOverstyrer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </div>
);

export default BeregningInfoPanel;
