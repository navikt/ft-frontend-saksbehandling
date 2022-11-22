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
  FordelBeregningsgrunnlagPeriode,
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
import FaktaFordelBeregningAksjonspunktCode from '../../types/interface/FaktaFordelBeregningAksjonspunktCode';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAksjonspunktCode;

const hasAvklaringsbehov = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

const findAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov => {
  const ak = avklaringsbehov.find(ap => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  if (!ak) {
    throw Error(`Fant ikke forventet avklaringsbehov ${FORDEL_BEREGNINGSGRUNNLAG}`);
  }
  return ak;
};

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelse';

const finnFordelPerioder = (bg: Beregningsgrunnlag): FordelBeregningsgrunnlagPeriode[] =>
  bg.faktaOmFordeling?.fordelBeregningsgrunnlag?.fordelBeregningsgrunnlagPerioder || [];

export const transformFieldValuesFordelBeregning = (
  values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<FordelBeregningsgrunnlagPerioderTransformedValues> => {
  if (!hasAvklaringsbehov(FORDEL_BEREGNINGSGRUNNLAG, beregningsgrunnlag.avklaringsbehov)) {
    throw Error('har ikke aksjonspunkt for fordeling når transform values ble kalt');
  }
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  return {
    begrunnelse: values.begrunnelse,
    periode: values.periode,
    ...FastsettFordeltBeregningsgrunnlag.transformValues(values, finnFordelPerioder(beregningsgrunnlag), bgPerioder),
  };
};

export const buildFieldInitialValuesFordelBeregning = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkårsperiode: Vilkarperiode,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): FordelBeregningsgrunnlagMedAksjonspunktValues => {
  const fordelBGPerioder = finnFordelPerioder(beregningsgrunnlag);
  return {
    periode: vilkårsperiode.periode,
    ...FaktaBegrunnelseTextField.buildInitialValues(
      findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov),
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
  behandlingType: string;
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
  behandlingType,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const relevantAp = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status);
  const formMethods = formHooks.useFormContext<FordelBeregningsgrunnlagFormValues>();
  const begrunnelse = formMethods.watch(`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`);
  return (
    <>
      <FordelingHelpText
        isAksjonspunktClosed={isAksjonspunktClosed}
        alleKodeverk={alleKodeverk}
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
