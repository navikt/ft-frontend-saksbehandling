import React, { FunctionComponent, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkarperiode } from '@navikt/ft-types';

import FordelBeregningsgrunnlagAP from '../../types/interface/FordelBeregningsgrunnlagAP';
import { FordelBeregningsgrunnlagFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from '../../types/interface/FaktaFordelBeregningAksjonspunktCode';
import FordelingField, {
  buildFieldInitialValuesFordelBeregning,
  transformFieldValuesFordelBeregning,
} from './FordelingField';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAksjonspunktCode;

export const FORM_NAME = 'FORDEL_BEREGNING_FORM';

const finnBeregningsgrunnlag = (
  vilkårsperiodeFom: string,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
): Beregningsgrunnlag => beregninsgrunnlagListe.find(bg => bg.vilkårsperiodeFom === vilkårsperiodeFom);

function finnVilkårsperiode(vilkårsperioder: Vilkarperiode[], vilkårsperiodeFom: string) {
  return vilkårsperioder.find(p => p.periode.fom === vilkårsperiodeFom);
}

function vurderesIBehandlingen(vilkårsperioder: Vilkarperiode[], vilkårsperiodeFom: string) {
  return finnVilkårsperiode(vilkårsperioder, vilkårsperiodeFom).vurderesIBehandlingen;
}

const transformValues = (
  values: FordelBeregningsgrunnlagFormValues,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
  vilkårsperioder: Vilkarperiode[],
): FordelBeregningsgrunnlagAP => {
  const fields = values[FORM_NAME];
  const grunnlag = fields
    .filter(f => vurderesIBehandlingen(vilkårsperioder, f.periode.fom))
    .map(field =>
      transformFieldValuesFordelBeregning(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)),
    );
  const begrunnelse = grunnlag.map(gr => gr.begrunnelse).reduce((b1, b2) => (b1 !== null ? `${b1} ${b2}` : b2));
  return {
    begrunnelse,
    grunnlag,
    kode: FORDEL_BEREGNINGSGRUNNLAG,
  };
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkårsperioder: Vilkarperiode[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): FordelBeregningsgrunnlagFormValues => ({
  [FORM_NAME]: beregningsgrunnlagListe.map(bg =>
    buildFieldInitialValuesFordelBeregning(
      bg,
      vilkårsperioder.find(p => p.periode.fom === bg.vilkårsperiodeFom),
      arbeidsgiverOpplysningerPerId,
      alleKodeverk,
    ),
  ),
});

interface PureOwnProps {
  aktivtBeregningsgrunnlagIndeks: number;
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkårsperioder: Vilkarperiode[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagFormValues;
  setFormData: (data: FordelBeregningsgrunnlagFormValues) => void;
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Formen for "avklar fakta om fordeling" panel.
 */
const FordelingForm: FunctionComponent<PureOwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  readOnly,
  submittable,
  submitCallback,
  beregningsgrunnlagListe,
  vilkårsperioder,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const formMethods = useForm<FordelBeregningsgrunnlagFormValues>({
    defaultValues:
      formData ||
      buildInitialValues(beregningsgrunnlagListe, vilkårsperioder, arbeidsgiverOpplysningerPerId, alleKodeverk),
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
          submitCallback(transformValues(values, beregningsgrunnlagListe, vilkårsperioder));
        }
      }}
      setDataOnUnmount={setFormData}
    >
      {fields.map((field, index) => (
        <div key={field.id} style={{ display: index === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none' }}>
          <FordelingField
            submittable={submittable}
            readOnly={
              readOnly || !vurderesIBehandlingen(vilkårsperioder, beregningsgrunnlagListe[index].vilkårsperiodeFom)
            }
            beregningsgrunnlag={beregningsgrunnlagListe[index]}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            alleKodeverk={alleKodeverk}
            fieldIndex={index}
          />
        </div>
      ))}
    </Form>
  );
};

export default FordelingForm;
