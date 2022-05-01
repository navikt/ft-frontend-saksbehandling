import React, { FunctionComponent } from 'react';

import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Aksjonspunkt, Beregningsgrunnlag,
} from '@navikt/ft-types';

import FordelBeregningsgrunnlagAP from '../types/interface/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP from '../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import VurderEndringRefusjonForm from './refusjon/VurderEndringRefusjonForm';
import FordelingForm from './fordeling/FordelingForm';
import {
  FordelBeregningsgrunnlagMedAksjonspunktValues,
  VurderRefusjonValues,
} from '../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from '../types/interface/FaktaFordelBeregningAksjonspunktCode';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
  VURDER_REFUSJON_BERGRUNN,
} = FaktaFordelBeregningAksjonspunktCode;

const harFordelInfo = (bg: Beregningsgrunnlag): boolean => (bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.fordelBeregningsgrunnlag : false);

const harRefusjonInfo = (bg: Beregningsgrunnlag): boolean => !!(bg && bg.refusjonTilVurdering);

const getAksjonspunkt = (aksjonspunkter: Aksjonspunkt[],
  def: string): Aksjonspunkt | undefined => (aksjonspunkter && def ? aksjonspunkter.find((ap) => ap.definisjon === def) : undefined);

interface OwnProps {
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagMedAksjonspunktValues | VurderRefusjonValues;
  setFormData: (data: FordelBeregningsgrunnlagMedAksjonspunktValues | VurderRefusjonValues) => void,
}

/**
 * FordelBeregningsgrunnlagPanel
 *
 * Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelBeregningsgrunnlagPanel:FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  submitCallback,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const fordelAP = getAksjonspunkt(aksjonspunkter, FORDEL_BEREGNINGSGRUNNLAG);
  const refusjonAP = getAksjonspunkt(aksjonspunkter, VURDER_REFUSJON_BERGRUNN);
  const skalViseFordeling = fordelAP && harFordelInfo(beregningsgrunnlag);
  const skalViseRefusjon = refusjonAP && harRefusjonInfo(beregningsgrunnlag);
  return (
    <>
      {skalViseRefusjon && (
        <VurderEndringRefusjonForm
          submittable={submittable}
          readOnly={readOnly}
          submitCallback={submitCallback}
          beregningsgrunnlag={beregningsgrunnlag}
          aksjonspunkter={aksjonspunkter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData as VurderRefusjonValues}
          setFormData={setFormData}
        />
      )}
      {skalViseFordeling && (
      <FordelingForm
        submittable={submittable}
        readOnly={readOnly}
        submitCallback={submitCallback}
        alleKodeverk={alleKodeverk}
        beregningsgrunnlag={beregningsgrunnlag}
        behandlingType={behandlingType}
        aksjonspunkter={aksjonspunkter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        formData={formData as FordelBeregningsgrunnlagMedAksjonspunktValues}
        setFormData={setFormData}
      />
      )}
    </>
  );
};

export default FordelBeregningsgrunnlagPanel;
