import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Beregningsgrunnlag, Vilkar, BeregningAvklaringsbehov, Aksjonspunkt,
} from '@navikt/ft-types';
import BeregningFaktaAP, {
  BeregningOverstyringAP, AvklarBeregningsaktiviteterAP,
} from '../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../typer/interface/FaktaBeregningAksjonspunktCode';
import { OverstyrBeregningsaktiviteterAP } from '../typer/interface/BeregningAktivitetAP';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanelFunksjon';
import AvklarAktiviteterFormValues from '../typer/AvklarAktiviteterFormValues';
import SubmitBeregningType from '../typer/SubmitBeregningTsType';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  AVKLAR_AKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap) => ap.definisjon === aksjonspunktKode);

const relevanteKoder = [VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  AVKLAR_AKTIVITETER];

type OwnProps = {
  intl: IntlShape
  submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP
    | BeregningFaktaAP | BeregningOverstyringAP | SubmitBeregningType[]) => Promise<void>;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar;
  submittable: boolean;
  erOverstyrer: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag?: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  setFormData: (data: any) => void;
  formData: AvklarAktiviteterFormValues;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Redux Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
  intl,
  readOnly,
  avklaringsbehov,
  aksjonspunkter,
  submittable,
  submitCallback,
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlag,
  erOverstyrer,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  setFormData,
  formData,
  vilkar,
}) => {
  const relevanteLøsbareAvklaringsbehov = avklaringsbehov.filter((ap) => relevanteKoder.some((kode) => kode === ap.definisjon) && ap.kanLoses !== false);
  const avklarAktiviteterReadOnly = readOnly || ((relevanteLøsbareAvklaringsbehov.length === 0
    || hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)) && !erOverstyrer);
  const avklarFaktaBeregningReadOnly = readOnly || ((relevanteLøsbareAvklaringsbehov.length === 0
    || hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)) && !erOverstyrer);
  return (
    <div>
      <AvklareAktiviteterPanel
        readOnly={avklarAktiviteterReadOnly}
        harAndreAvklaringsbehovIPanel={hasAvklaringsbehov(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov)}
        submitCallback={submitCallback}
        submittable={submittable}
        erOverstyrer={erOverstyrer}
        alleKodeverk={alleKodeverk}
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData}
        vilkår={vilkar}
      />
      <VerticalSpacer thirtyTwoPx />
      <VurderFaktaBeregningPanel
        intl={intl}
        readOnly={avklarFaktaBeregningReadOnly}
        submitCallback={submitCallback}
        submittable={submittable}
        aksjonspunkter={aksjonspunkter}
        alleKodeverk={alleKodeverk}
        beregningsgrunnlag={beregningsgrunnlag.at(0)}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </div>
  );
};

export default BeregningInfoPanel;
