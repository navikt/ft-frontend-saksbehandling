import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { ErrorBoundary } from '@navikt/ft-ui-komponenter';

import { FordelBeregningsgrunnlagFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { FordelBeregningsgrunnlagAP } from '../../types/interface/FordelBeregningsgrunnlagAP';
import { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { Vilkårperiode } from '../../types/Vilkår';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';
import {
  buildFieldInitialValuesFordelBeregning,
  FordelingField,
  transformFieldValuesFordelBeregning,
} from './FordelingField';

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
  vilkårsperioder: Vilkårperiode[],
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

function fordelPredicate(bg: Beregningsgrunnlag) {
  return bg.avklaringsbehov.some(
    v => v.definisjon === FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG,
  );
}

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkårsperioder: Vilkårperiode[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): FordelBeregningsgrunnlagFormValues => ({
  [FORM_NAME]: beregningsgrunnlagListe
    .filter(fordelPredicate)
    .map(bg =>
      buildFieldInitialValuesFordelBeregning(
        bg,
        finnVilkårsperiode(vilkårsperioder, bg.vilkårsperiodeFom),
        arbeidsgiverOpplysningerPerId,
        kodeverkSamling,
      ),
    ),
});

interface Props {
  aktivtBeregningsgrunnlagIndeks: number;
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkårsperioder: Vilkårperiode[];
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
export const FordelingForm = ({
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
}: Props) => {
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
    <ErrorBoundary errorMessage="Noe gikk galt ved visning av fordeling">
      <Form
        formMethods={formMethods}
        onSubmit={values => {
          if (Object.keys(errors).length === 0) {
            submitCallback(transformValues(values, beregningsgrunnlagListe, vilkårsperioder));
          }
        }}
        setDataOnUnmount={setFormData}
      >
        {fields.map(field => {
          const beregningsgrunnlagIndeks = beregningsgrunnlagListe.findIndex(
            bg => bg.skjaeringstidspunktBeregning === field.beregningsgrunnlagStp,
          );
          return (
            <div
              key={field.id}
              style={{ display: beregningsgrunnlagIndeks === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none' }}
            >
              <FordelingField
                submittable={submittable}
                readOnly={
                  readOnly ||
                  !vurderesIBehandlingen(
                    vilkårsperioder,
                    beregningsgrunnlagListe[beregningsgrunnlagIndeks].vilkårsperiodeFom,
                  )
                }
                beregningsgrunnlag={beregningsgrunnlagListe[beregningsgrunnlagIndeks]}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                kodeverkSamling={kodeverkSamling}
                fieldIndex={beregningsgrunnlagListe
                  .filter(fordelPredicate)
                  .findIndex(bg => bg.skjaeringstidspunktBeregning === field.beregningsgrunnlagStp)}
              />
            </div>
          );
        })}
      </Form>
    </ErrorBoundary>
  );
};
