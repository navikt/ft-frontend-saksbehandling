import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt, RefusjonTilVurderingAndel, Beregningsgrunnlag, ArbeidsgiverOpplysningerPerId,
} from '@navikt/ft-types';

import VurderRefusjonBeregningsgrunnlagAP from '../../types/VurderRefusjonBeregningsgrunnlagAP';
import TidligereUtbetalinger from './TidligereUtbetalinger';
import VurderEndringRefusjonRad from './VurderEndringRefusjonRad';
import { VurderRefusjonValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from '../../FaktaFordelBeregningAksjonspunktCode';
import FaktaSubmitButton from '../felles/FaktaSubmitButton';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';

const BEGRUNNELSE_FIELD = 'VURDER_REFUSJON_BERGRUNN_BEGRUNNELSE';
const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const {
  VURDER_REFUSJON_BERGRUNN,
} = FaktaFordelBeregningAksjonspunktCode;

const finnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]) : Aksjonspunkt | undefined => (aksjonspunkter
  ? aksjonspunkter.find((ap) => ap.definisjon === VURDER_REFUSJON_BERGRUNN) : undefined);

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

const buildInitialValues = (bg: Beregningsgrunnlag, aksjonspunkter: Aksjonspunkt[]): VurderRefusjonValues => {
  const { andeler } = bg.refusjonTilVurdering;
  let initialValues = {};
  andeler.forEach((andel) => {
    initialValues = {
      ...initialValues,
      ...VurderEndringRefusjonRad.buildInitialValues(andel),
    };
  });
  const refusjonAP = finnAksjonspunkt(aksjonspunkter);
  initialValues[BEGRUNNELSE_FIELD] = refusjonAP && refusjonAP.begrunnelse ? refusjonAP.begrunnelse : '';
  return initialValues;
};

const transformValues = (values: VurderRefusjonValues, bg: Beregningsgrunnlag): VurderRefusjonBeregningsgrunnlagAP => {
  const { andeler } = bg.refusjonTilVurdering;
  const transformedAndeler = andeler.map((andel) => VurderEndringRefusjonRad.transformValues(values, andel, bg.skjaeringstidspunktBeregning));
  return {
    begrunnelse: values.begrunnelse,
    kode: VURDER_REFUSJON_BERGRUNN,
    fastsatteAndeler: transformedAndeler,
  };
};

type OwnProps = {
    submitCallback: (aksjonspunktData: VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
    readOnly: boolean;
    submittable: boolean;
    beregningsgrunnlag?: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    formData?: VurderRefusjonValues;
    setFormData: (data: VurderRefusjonValues) => void,
};

export const VurderEndringRefusjonForm: FunctionComponent<OwnProps> = ({
  submittable,
  readOnly,
  beregningsgrunnlag,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  setFormData,
  formData,
  submitCallback,
}) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  const ap = finnAksjonspunkt(aksjonspunkter);
  const erAksjonspunktÅpent = ap ? isAksjonspunktOpen(ap.status) : false;
  const formMethods = useForm<VurderRefusjonValues>({
    defaultValues: formData || buildInitialValues(beregningsgrunnlag, aksjonspunkter),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={erAksjonspunktÅpent}>
        {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values, beregningsgrunnlag))}
        setDataOnUnmount={setFormData}
      >
        <Undertittel><FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" /></Undertittel>
        <VerticalSpacer sixteenPx />
        <TidligereUtbetalinger beregningsgrunnlag={beregningsgrunnlag} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
        { andeler.map((andel) => (
          <VurderEndringRefusjonRad
            refusjonAndel={andel}
            readOnly={readOnly}
            erAksjonspunktÅpent={erAksjonspunktÅpent}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            key={lagRadNøkkel(andel)}
            skjæringstidspunkt={beregningsgrunnlag.skjaeringstidspunktBeregning}
            formName={FORM_NAME}
          />
        ))}
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
        <VerticalSpacer sixteenPx />
      </Form>
    </>
  );
};

export default VurderEndringRefusjonForm;
