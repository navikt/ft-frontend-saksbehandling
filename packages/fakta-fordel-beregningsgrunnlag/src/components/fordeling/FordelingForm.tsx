import React, { FunctionComponent, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkarperiode } from '@navikt/ft-types';

import FordelBeregningsgrunnlagAP from '../../types/interface/FordelBeregningsgrunnlagAP';
import { FordelBeregningsgrunnlagFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import FordelingField, {
  buildFieldInitialValuesFordelBeregning,
  transformFieldValuesFordelBeregning,
} from './FordelingField';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';
import KodeverkForPanel from '../../types/kodeverkForPanel';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

export const FORM_NAME = 'FORDEL_BEREGNING_FORM';

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
  kodeverkSamling: KodeverkForPanel,
): FordelBeregningsgrunnlagFormValues => ({
  [FORM_NAME]: beregningsgrunnlagListe
    .filter(bg =>
      bg.avklaringsbehov.some(v => v.definisjon === FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG),
    )
    .map(bg =>
      buildFieldInitialValuesFordelBeregning(
        bg,
        finnVilkårsperiode(vilkårsperioder, bg.vilkårsperiodeFom),
        arbeidsgiverOpplysningerPerId,
        kodeverkSamling,
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
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagFormValues;
  setFormData: (data: FordelBeregningsgrunnlagFormValues) => void;
  setFordelingFormIsDirty: (isDirty: boolean) => void;
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Formen for å fordele beregningsgrunnlag.
 */
const FordelingForm: FunctionComponent<PureOwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  readOnly,
  submittable,
  submitCallback,
  beregningsgrunnlagListe,
  vilkårsperioder,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  setFordelingFormIsDirty,
}) => {
  const formMethods = useForm<FordelBeregningsgrunnlagFormValues>({
    defaultValues: formData?.FORDEL_BEREGNING_FORM
      ? formData
      : buildInitialValues(beregningsgrunnlagListe, vilkårsperioder, arbeidsgiverOpplysningerPerId, kodeverkSamling),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors, isDirty },
    control,
    trigger,
  } = formMethods;

  useEffect(() => {
    setFordelingFormIsDirty(isDirty);
  }, [isDirty]);

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
            kodeverkSamling={kodeverkSamling}
            fieldIndex={index}
          />
        </div>
      ))}
    </Form>
  );
};

export default FordelingForm;
