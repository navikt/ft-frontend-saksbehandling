import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FordelBeregningsgrunnlagPeriode,
  Vilkarperiode,
  BeregningsgrunnlagTilBekreftelse,
} from '@navikt/ft-types';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';

import { useFormContext } from 'react-hook-form';
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
import KodeverkForPanel from '../../types/kodeverkForPanel';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

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
    ...FastsettFordeltBeregningsgrunnlag.transformValues(
      values,
      finnFordelPerioder(beregningsgrunnlag),
      bgPerioder,
      beregningsgrunnlag.forlengelseperioder,
    ),
  };
};

export const buildFieldInitialValuesFordelBeregning = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkårsperiode: Vilkarperiode,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): FordelBeregningsgrunnlagMedAksjonspunktValues => {
  const fordelBGPerioder = finnFordelPerioder(beregningsgrunnlag);
  return {
    beregningsgrunnlagStp: beregningsgrunnlag.skjaeringstidspunktBeregning,
    periode: vilkårsperiode.periode,
    ...FaktaBegrunnelseTextField.buildInitialValues(
      findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov),
      BEGRUNNELSE_FORDELING_NAME,
    ),
    ...FastsettFordeltBeregningsgrunnlag.buildInitialValues(
      fordelBGPerioder,
      beregningsgrunnlag,
      kodeverkSamling,
      arbeidsgiverOpplysningerPerId,
    ),
  } as FordelBeregningsgrunnlagMedAksjonspunktValues;
};

interface PureOwnProps {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
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
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const avklaringsbehovFordelBeregningsgrunnlag = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const isAksjonspunktClosed = !isAksjonspunktOpen(avklaringsbehovFordelBeregningsgrunnlag.status);
  const formMethods = useFormContext<FordelBeregningsgrunnlagFormValues>();
  const begrunnelse = formMethods.watch(`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`);
  return (
    <>
      <FordelingHelpText isAksjonspunktClosed={isAksjonspunktClosed} beregningsgrunnlag={beregningsgrunnlag} />
      <VerticalSpacer twentyPx />
      <FastsettFordeltBeregningsgrunnlag
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
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
      <AssessedBy
        ident={avklaringsbehovFordelBeregningsgrunnlag.vurdertAv}
        date={avklaringsbehovFordelBeregningsgrunnlag.vurdertTidspunkt}
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
