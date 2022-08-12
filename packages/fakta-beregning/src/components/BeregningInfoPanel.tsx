import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkar,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, useState } from 'react';
import AvklarAktiviteterFormValues from '../typer/AvklarAktiviteterFormValues';
import { OverstyrBeregningsaktiviteterAP } from '../typer/interface/BeregningAktivitetAP';
import BeregningFaktaAP, {
  AvklarBeregningsaktiviteterAP,
  BeregningOverstyringAP,
} from '../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../typer/interface/FaktaBeregningAksjonspunktCode';
import SubmitBeregningType from '../typer/SubmitBeregningTsType';
import VurderFaktaBeregningFormValues from '../typer/VurderFaktaBeregningFormValues';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanelFunksjon';
import { formNameAvklarAktiviteter, formNameVurderFaktaBeregning } from './BeregningFormUtils';
import { hasAvklaringsbehov } from './felles/avklaringsbehovUtil';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  AVKLAR_AKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const relevanteKoder = [
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  AVKLAR_AKTIVITETER,
];

type OwnProps = {
  submitCallback: (
    aksjonspunktData:
      | AvklarBeregningsaktiviteterAP
      | OverstyrBeregningsaktiviteterAP
      | BeregningFaktaAP[]
      | BeregningOverstyringAP[]
      | SubmitBeregningType[],
  ) => Promise<void>;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  vilkar: Vilkar;
  submittable: boolean;
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag?: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  setFormData: (data: any) => void;
  formData: AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Redux Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  avklaringsbehov,
  submittable,
  submitCallback,
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlag,
  erOverstyrer,
  skalKunneOverstyreAktiviteter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  setFormData,
  formData,
  vilkar,
}) => {
  const relevanteLøsbareAvklaringsbehov = avklaringsbehov.filter(
    ap => relevanteKoder.some(kode => kode === ap.definisjon) && ap.kanLoses !== false,
  );
  const avklarAktiviteterReadOnly =
    readOnly ||
    ((relevanteLøsbareAvklaringsbehov.length === 0 ||
      hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)) &&
      !erOverstyrer);
  const avklarFaktaBeregningReadOnly =
    readOnly ||
    ((relevanteLøsbareAvklaringsbehov.length === 0 ||
      hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)) &&
      !erOverstyrer);
  const [avklarAktiviteterErEndret, setAvklarAktiviteterErEndret] = useState<boolean>(false);

  return (
    <div>
      <AvklareAktiviteterPanel
        readOnly={avklarAktiviteterReadOnly}
        harAndreAvklaringsbehovIPanel={hasAvklaringsbehov(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov)}
        submitCallback={submitCallback}
        submittable={submittable}
        erOverstyrer={erOverstyrer && skalKunneOverstyreAktiviteter}
        alleKodeverk={alleKodeverk}
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData && formNameAvklarAktiviteter in formData ? formData : undefined}
        vilkår={vilkar}
        setAvklarAktiviteterErEndret={setAvklarAktiviteterErEndret}
      />
      <VerticalSpacer thirtyTwoPx />
      {/* @ts-ignore */}
      <VurderFaktaBeregningPanel
        readOnly={avklarFaktaBeregningReadOnly}
        submitCallback={submitCallback}
        submittable={submittable}
        alleKodeverk={alleKodeverk}
        beregningsgrunnlag={beregningsgrunnlag}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        setFormData={setFormData}
        formData={formData && formNameVurderFaktaBeregning in formData ? formData : undefined}
        vilkar={vilkar}
        avklarAktiviteterErEndret={avklarAktiviteterErEndret}
      />
    </div>
  );
};

export default BeregningInfoPanel;
