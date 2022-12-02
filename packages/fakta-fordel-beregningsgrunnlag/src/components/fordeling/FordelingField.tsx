import React, { FunctionComponent } from 'react';
import { formHooks } from '@navikt/ft-form-hooks';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';

import BeregningsgrunnlagTilBekreftelse from '@navikt/ft-types/src/BeregningsgrunnlagTilBekreftelse';
import { FordelBeregningsgrunnlagPerioderTransformedValues } from '../../types/interface/FordelBeregningsgrunnlagAP';
import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag from './FastsettFordeltBeregningsgrunnlag';
import {
  FordelBeregningsgrunnlagFormValues,
  FordelBeregningsgrunnlagMedAksjonspunktValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

const hasAvklaringsbehov = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

const findAvklaringsbehovMedBegrunnelse = (
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov.find(ap => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelse';

export const transformFieldValuesFordelBeregning = (
  values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<FordelBeregningsgrunnlagPerioderTransformedValues> => {
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const fordelBGPerioder =
    beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  if (hasAvklaringsbehov(FORDEL_BEREGNINGSGRUNNLAG, beregningsgrunnlag.avklaringsbehov)) {
    return {
      begrunnelse: values.begrunnelse,
      periode: values.periode,
      ...FastsettFordeltBeregningsgrunnlag.transformValues(values, fordelBGPerioder, bgPerioder),
    };
  }
  return null;
};

export const buildFieldInitialValuesFordelBeregning = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkårsperiode: Vilkarperiode,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): FordelBeregningsgrunnlagMedAksjonspunktValues => {
  const fordelBGPerioder =
    beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  return {
    periode: vilkårsperiode.periode,
    ...FaktaBegrunnelseTextField.buildInitialValues(
      findAvklaringsbehovMedBegrunnelse(beregningsgrunnlag.avklaringsbehov),
      BEGRUNNELSE_FORDELING_NAME,
    ),
    ...FastsettFordeltBeregningsgrunnlag.buildInitialValues(
      fordelBGPerioder,
      beregningsgrunnlag,
      getKodeverknavnFn(alleKodeverk),
      arbeidsgiverOpplysningerPerId,
    ),
  } as FordelBeregningsgrunnlagMedAksjonspunktValues;
};

interface PureOwnProps {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
}

/**
 * FordelingField
 *
 * Container komponent
 */
const FordelingField: FunctionComponent<PureOwnProps> = ({
  readOnly,
  submittable,
  beregningsgrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const relevantAp = beregningsgrunnlag.avklaringsbehov.find(ap => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status);
  const formMethods = formHooks.useFormContext<FordelBeregningsgrunnlagFormValues>();
  const begrunnelse = formMethods.watch(`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`);
  return (
    <>
      <FordelingHelpText isAksjonspunktClosed={isAksjonspunktClosed} beregningsgrunnlag={beregningsgrunnlag} />
      <VerticalSpacer twentyPx />
      <FastsettFordeltBeregningsgrunnlag
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        fieldIndex={fieldIndex}
      />
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextField
        name={`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`}
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasBegrunnelse={!!begrunnelse}
      />
      <VerticalSpacer twentyPx />
      <SubmitButton
        isSubmittable={submittable}
        isReadOnly={readOnly}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </>
  );
};

export default FordelingField;
