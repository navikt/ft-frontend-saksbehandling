import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { InjectedFormProps, Validator, reduxForm } from 'redux-form';

import { getKodeverknavnFn } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen, AksjonspunktCode, hasAksjonspunkt } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Aksjonspunkt, Beregningsgrunnlag,
} from '@navikt/ft-types';
import { FordelBeregningsgrunnlagAP } from '@navikt/ft-types-aksjonspunkter';

import FaktaBegrunnelseTextField from '../legacy/FaktaBegrunnelseTextField';
import FaktaSubmitButton from '../legacy/FaktaSubmitButton';
import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag, { FastsettFordeltBeregningsgrunnlagImpl } from './fordeling/FastsettFordeltBeregningsgrunnlag';
import FordelBeregningsgrunnlagMedAksjonspunktValues from '../types/FordelingTsType';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = AksjonspunktCode;

const FORM_NAME_FORDEL_BEREGNING = 'fordelBeregningsgrunnlagForm';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => aksjonspunkter
  .find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelseFordeling';

interface PureOwnProps {
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  submitEnabled: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  aksjonspunkter: Aksjonspunkt[];
  intl: IntlShape;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  hasBegrunnelse: boolean;
  isAksjonspunktClosed: boolean;
  initialValues?: FordelBeregningsgrunnlagMedAksjonspunktValues;
  validate?: Validator;
  onSubmit: (values: FordelBeregningsgrunnlagMedAksjonspunktValues) => void;
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelingFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  readOnly,
  submittable,
  isAksjonspunktClosed,
  hasBegrunnelse,
  submitEnabled,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    { /* @ts-ignore */ }
    <FordelingHelpText
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
    <VerticalSpacer twentyPx />
    { /* @ts-ignore */ }
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
      name={BEGRUNNELSE_FORDELING_NAME}
      isSubmittable={submittable}
      isReadOnly={readOnly}
      hasBegrunnelse={hasBegrunnelse}
    />
    <VerticalSpacer twentyPx />
    { /* @ts-ignore */ }
    <FaktaSubmitButton
      formName={formProps.form}
      isSubmittable={submittable && submitEnabled}
      isReadOnly={readOnly}
      hasOpenAksjonspunkter={!isAksjonspunktClosed}
    />
  </form>
);

export const transformValuesFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag: Beregningsgrunnlag,
    aksjonspunkter: Aksjonspunkt[]) => (values: FordelBeregningsgrunnlagMedAksjonspunktValues): FordelBeregningsgrunnlagAP => {
    const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      // eslint-disable-next-line react/destructuring-assignment
      const begrunnelse = values[BEGRUNNELSE_FORDELING_NAME];
      return {
        kode: FORDEL_BEREGNINGSGRUNNLAG,
        begrunnelse: begrunnelse as string,
        ...FastsettFordeltBeregningsgrunnlagImpl.transformValues(values, fordelBGPerioder, bgPerioder),
      };
    }
    return null;
  },
);

export const buildInitialValuesFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag: Beregningsgrunnlag,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    alleKodeverk: AlleKodeverk,
    aksjonspunkter: Aksjonspunkt[]): null | FordelBeregningsgrunnlagMedAksjonspunktValues => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (!hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return null;
    }
    return ({
      ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FORDELING_NAME),
      ...FastsettFordeltBeregningsgrunnlagImpl.buildInitialValues(fordelBGPerioder,
        beregningsgrunnlag,
        getKodeverknavnFn(alleKodeverk),
        arbeidsgiverOpplysningerPerId),
    });
  },
);

export const getValidationFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk,
    (ownProps: PureOwnProps) => ownProps.intl,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag: Beregningsgrunnlag,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    alleKodeverk: AlleKodeverk,
    intl: IntlShape,
    aksjonspunkter: Aksjonspunkt[]) => (values: FordelBeregningsgrunnlagMedAksjonspunktValues) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return {
        ...FastsettFordeltBeregningsgrunnlagImpl.validate(intl, values, fordelBGPerioder,
          beregningsgrunnlag, getKodeverknavnFn(alleKodeverk), arbeidsgiverOpplysningerPerId),
      };
    }
    return null;
  },
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, transformValuesFordelBeregning],
(submitCallback,
  transformValuesFordelBeregningFn) => (values: FordelBeregningsgrunnlagMedAksjonspunktValues) => submitCallback(transformValuesFordelBeregningFn(values)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => {
  const relevantAp = ownProps.aksjonspunkter.find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status);
  const initialValues = buildInitialValuesFordelBeregning(ownProps);
  const hasBegrunnelse = initialValues && !!initialValues[BEGRUNNELSE_FORDELING_NAME];
  return {
    isAksjonspunktClosed,
    hasBegrunnelse,
    initialValues,
    validate: getValidationFordelBeregning(ownProps),
    onSubmit: lagSubmitFn(ownProps),
  };
};

const FordelingForm = connect(mapStateToProps)(reduxForm({
  form: FORM_NAME_FORDEL_BEREGNING,
  destroyOnUnmount: false,
})(FordelingFormImpl));

export default FordelingForm;
