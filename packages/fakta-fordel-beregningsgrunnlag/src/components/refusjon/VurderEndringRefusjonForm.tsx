import React, { FunctionComponent, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkarperiode } from '@navikt/ft-types';

import VurderRefusjonAksjonspunktSubmitType from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';

import VurderEndringRefusjonField, {
  buildFieldInitialValues,
  transformFieldValues,
} from './VurderEndringRefusjonField';

export const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const finnVilkårsperiode = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]): Vilkarperiode => {
  const periode = vilkårsperioder.find(p => p.periode.fom === bg.vilkårsperiodeFom);
  if (!periode) {
    throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${bg.vilkårsperiodeFom}`);
  }
  return periode;
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkårperioder: Vilkarperiode[],
): VurderRefusjonFormValues => ({
  [FORM_NAME]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg, finnVilkårsperiode(bg, vilkårperioder))),
});

const finnBeregningsgrunnlag = (
  vilkårsperiodeFom: string,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
): Beregningsgrunnlag => {
  const matchetndeBG = beregninsgrunnlagListe.find(bg => bg.vilkårsperiodeFom === vilkårsperiodeFom);
  if (!matchetndeBG) {
    throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${vilkårsperiodeFom}`);
  }
  return matchetndeBG;
};

const transformValues = (
  values: VurderRefusjonFormValues,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
): VurderRefusjonAksjonspunktSubmitType => {
  const fields = values[FORM_NAME];
  const grunnlag = fields.map(field =>
    transformFieldValues(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)),
  );
  const begrunnelse = grunnlag.map(gr => gr.begrunnelse).reduce((b1, b2) => (b1 !== null ? `${b1} ${b2}` : b2));
  return {
    begrunnelse,
    grunnlag,
    kode: VURDER_REFUSJON_BERGRUNN,
  };
};

type OwnProps = {
  aktivtBeregningsgrunnlagIndeks: number;
  submitCallback: (aksjonspunktData: VurderRefusjonAksjonspunktSubmitType) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkarperiode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: VurderRefusjonFormValues;
  setFormData: (data: VurderRefusjonFormValues) => void;
};

const VurderEndringRefusjonForm: FunctionComponent<OwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  submittable,
  readOnly,
  beregningsgrunnlagListe,
  vilkarperioder,
  arbeidsgiverOpplysningerPerId,
  setFormData,
  formData,
  submitCallback,
}) => {
  const formMethods = useForm<VurderRefusjonFormValues>({
    defaultValues: formData?.VURDER_REFUSJON_BERGRUNN_FORM
      ? formData
      : buildInitialValues(beregningsgrunnlagListe, vilkarperioder),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors },
    control,
    trigger,
  } = formMethods;

  useEffect(() => {
    if (isSubmitted && dirtyFields[FORM_NAME]?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const { fields } = useFieldArray({
    name: FORM_NAME,
    control,
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={values => {
        if (Object.keys(errors).length === 0) {
          submitCallback(transformValues(values, beregningsgrunnlagListe));
        }
      }}
      setDataOnUnmount={setFormData}
    >
      {fields.map((field, index) => (
        <div key={field.id} style={{ display: index === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none' }}>
          <VurderEndringRefusjonField
            submittable={submittable}
            readOnly={readOnly}
            beregningsgrunnlag={beregningsgrunnlagListe[index]}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            vilkårperiodeFieldIndex={index}
          />
        </div>
      ))}
    </Form>
  );
};

export default VurderEndringRefusjonForm;
