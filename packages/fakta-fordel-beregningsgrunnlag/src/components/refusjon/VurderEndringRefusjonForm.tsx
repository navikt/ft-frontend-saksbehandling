import React, { FunctionComponent, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagMedId,
  Vilkarperiode,
} from '@navikt/ft-types';
import { ErrorBoundary } from '@navikt/ft-ui-komponenter';

import VurderRefusjonAksjonspunktSubmitType from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';

import VurderEndringRefusjonField, {
  buildFieldInitialValues,
  transformFieldValues,
} from './VurderEndringRefusjonField';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';

export const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const buildInitialValues = (
  beregningsgrunnlagListe: BeregningsgrunnlagMedId[],
  vilkårperioder: Vilkarperiode[],
): VurderRefusjonFormValues => ({
  [FORM_NAME]: beregningsgrunnlagListe.map(bg =>
    buildFieldInitialValues(bg, finnVilkårsperiode(vilkårperioder, bg.vilkårsperiodeFom)),
  ),
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
  vilkårsperioder: Vilkarperiode[],
): VurderRefusjonAksjonspunktSubmitType => {
  const fields = values[FORM_NAME];
  const grunnlag = fields
    .filter(f => vurderesIBehandlingen(vilkårsperioder, f.periode.fom))
    .map(field => transformFieldValues(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)));
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
  beregningsgrunnlagListe: BeregningsgrunnlagMedId[];
  vilkarperioder: Vilkarperiode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: VurderRefusjonFormValues;
  setFormData: (data: VurderRefusjonFormValues) => void;
  setRefusjonFormIsDirty: (isDirty: boolean) => void;
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
  setRefusjonFormIsDirty,
}) => {
  const formMethods = useForm<VurderRefusjonFormValues>({
    defaultValues: formData?.VURDER_REFUSJON_BERGRUNN_FORM
      ? formData
      : buildInitialValues(beregningsgrunnlagListe, vilkarperioder),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors, isDirty },
    control,
    trigger,
  } = formMethods;

  useEffect(() => {
    setRefusjonFormIsDirty(isDirty);
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
    <ErrorBoundary errorMessage="Noe gikk galt ved visning av refusjon">
      <Form
        formMethods={formMethods}
        onSubmit={values => {
          if (Object.keys(errors).length === 0) {
            submitCallback(transformValues(values, beregningsgrunnlagListe, vilkarperioder));
          }
        }}
        setDataOnUnmount={setFormData}
      >
        {fields.map(field => {
          const beregningsgrunnlagIndeks = beregningsgrunnlagListe.findIndex(
            bg => bg.beregningsgrunnlagId === field.beregningsgrunnlagId,
          );
          return (
            <div
              key={field.id}
              style={{
                display: beregningsgrunnlagIndeks === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none',
              }}
            >
              <VurderEndringRefusjonField
                submittable={submittable}
                readOnly={
                  readOnly ||
                  !vurderesIBehandlingen(
                    vilkarperioder,
                    beregningsgrunnlagListe[beregningsgrunnlagIndeks].vilkårsperiodeFom,
                  )
                }
                beregningsgrunnlag={beregningsgrunnlagListe[beregningsgrunnlagIndeks]}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vilkårperiodeFieldIndex={beregningsgrunnlagIndeks}
              />
            </div>
          );
        })}
      </Form>
    </ErrorBoundary>
  );
};

export default VurderEndringRefusjonForm;
