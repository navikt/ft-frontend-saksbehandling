import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Beregningsgrunnlag, Aksjonspunkt,
} from '@navikt/ft-types';

import FordelBeregningsgrunnlagAP from '../../types/FordelBeregningsgrunnlagAP';
import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag from './FastsettFordeltBeregningsgrunnlag';
import { FordelBeregningsgrunnlagMedAksjonspunktValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from '../../FaktaFordelBeregningAksjonspunktCode';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import FaktaSubmitButton from '../felles/FaktaSubmitButton';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = FaktaFordelBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap) => ap.definisjon === aksjonspunktKode);

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => aksjonspunkter
  .find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelse';

export const transformValuesFordelBeregning = (beregningsgrunnlag: Beregningsgrunnlag,
  aksjonspunkter: Aksjonspunkt[], values: FordelBeregningsgrunnlagMedAksjonspunktValues): FordelBeregningsgrunnlagAP => {
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
    return {
      kode: FORDEL_BEREGNINGSGRUNNLAG,
      begrunnelse: values.begrunnelse,
      ...FastsettFordeltBeregningsgrunnlag.transformValues(values, fordelBGPerioder, bgPerioder),
    };
  }
  return null;
};

const buildInitialValuesFordelBeregning = (beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
  aksjonspunkter: Aksjonspunkt[]): null | FordelBeregningsgrunnlagMedAksjonspunktValues => {
  const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  if (!hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
    return null;
  }
  return ({
    ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FORDELING_NAME),
    ...FastsettFordeltBeregningsgrunnlag.buildInitialValues(fordelBGPerioder,
      beregningsgrunnlag,
      getKodeverknavnFn(alleKodeverk),
      arbeidsgiverOpplysningerPerId),
  });
};

interface PureOwnProps {
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  aksjonspunkter: Aksjonspunkt[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagMedAksjonspunktValues;
  setFormData: (data: FordelBeregningsgrunnlagMedAksjonspunktValues) => void,
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelingForm: FunctionComponent<PureOwnProps> = ({
  readOnly,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const formMethods = useForm<FordelBeregningsgrunnlagMedAksjonspunktValues>({
    defaultValues: formData || buildInitialValuesFordelBeregning(beregningsgrunnlag, arbeidsgiverOpplysningerPerId, alleKodeverk, aksjonspunkter),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  const relevantAp = aksjonspunkter.find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status);
  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values) => submitCallback(transformValuesFordelBeregning(beregningsgrunnlag, aksjonspunkter, values))}
      setDataOnUnmount={setFormData}
    >
      <FordelingHelpText
        isAksjonspunktClosed={isAksjonspunktClosed}
        alleKodeverk={alleKodeverk}
        aksjonspunkter={aksjonspunkter}
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <VerticalSpacer twentyPx />
      <FastsettFordeltBeregningsgrunnlag
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        behandlingType={behandlingType}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextField
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasBegrunnelse={!!begrunnelse}
      />
      <VerticalSpacer twentyPx />
      <FaktaSubmitButton
        isSubmittable={submittable}
        isReadOnly={readOnly}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

export default FordelingForm;
