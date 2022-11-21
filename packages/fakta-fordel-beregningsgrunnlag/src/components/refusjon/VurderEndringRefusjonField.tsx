import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { formHooks } from '@navikt/ft-form-hooks';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  RefusjonTilVurderingAndel,
  Vilkarperiode,
} from '@navikt/ft-types';
import BeregningsgrunnlagTilBekreftelse from '@navikt/ft-types/src/BeregningsgrunnlagTilBekreftelse';
import { Heading } from '@navikt/ds-react';
import TidligereUtbetalinger from './TidligereUtbetalinger';
import VurderEndringRefusjonRad from './VurderEndringRefusjonRad';
import { VurderRefusjonFieldValues, VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from '../../types/interface/FaktaFordelBeregningAksjonspunktCode';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { VurderRefusjonTransformedValues } from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import SubmitButton from '../felles/SubmitButton';

const BEGRUNNELSE_FIELD = 'VURDER_REFUSJON_BERGRUNN_BEGRUNNELSE';
const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAksjonspunktCode;

const finnAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov ? avklaringsbehov.find(ap => ap.definisjon === VURDER_REFUSJON_BERGRUNN) : undefined;

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

export const buildFieldInitialValues = (
  bg: Beregningsgrunnlag,
  vilkårsperiode: Vilkarperiode,
): VurderRefusjonFieldValues => {
  const { andeler } = bg.refusjonTilVurdering;
  const refusjonAP = finnAvklaringsbehov(bg.avklaringsbehov);
  let initialValues = {
    periode: vilkårsperiode.periode,
    [BEGRUNNELSE_FIELD]: refusjonAP && refusjonAP.begrunnelse ? refusjonAP.begrunnelse : '',
  } as VurderRefusjonFieldValues;
  andeler.forEach(andel => {
    initialValues = {
      ...initialValues,
      ...VurderEndringRefusjonRad.buildInitialValues(andel),
    };
  });
  return initialValues;
};

export const transformFieldValues = (
  values: VurderRefusjonFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderRefusjonTransformedValues> => {
  const { andeler } = bg.refusjonTilVurdering;
  const transformedAndeler = andeler.map(andel =>
    VurderEndringRefusjonRad.transformValues(values, andel, bg.skjaeringstidspunktBeregning),
  );
  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    fastsatteAndeler: transformedAndeler,
  };
};

type OwnProps = {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkårperiodeFieldIndex: number;
};

const VurderEndringRefusjonField: FunctionComponent<OwnProps> = ({
  submittable,
  readOnly,
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  vilkårperiodeFieldIndex,
}) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  const ap = finnAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const erAksjonspunktÅpent = ap ? isAksjonspunktOpen(ap.status) : false;
  const formMethods = formHooks.useFormContext<VurderRefusjonFormValues>();
  const begrunnelse = formMethods.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.begrunnelse`);
  return (
    <>
      <AksjonspunktHelpTextTemp
        isAksjonspunktOpen={isAksjonspunktOpen(finnAvklaringsbehov(beregningsgrunnlag.avklaringsbehov).status)}
      >
        {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Heading size="small">
        <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" />
      </Heading>
      <VerticalSpacer sixteenPx />
      <TidligereUtbetalinger
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {andeler.map(andel => (
        <VurderEndringRefusjonRad
          refusjonAndel={andel}
          readOnly={readOnly}
          erAksjonspunktÅpent={erAksjonspunktÅpent}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={lagRadNøkkel(andel)}
          skjæringstidspunkt={beregningsgrunnlag.skjaeringstidspunktBeregning}
          formName={FORM_NAME}
          vilkårperiodeFieldIndex={vilkårperiodeFieldIndex}
        />
      ))}
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextField
        name={`${FORM_NAME}.${vilkårperiodeFieldIndex}.begrunnelse`}
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
      <VerticalSpacer sixteenPx />
    </>
  );
};

export default VurderEndringRefusjonField;
