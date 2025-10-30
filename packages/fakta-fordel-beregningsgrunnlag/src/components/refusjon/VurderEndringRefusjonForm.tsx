import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagTilBekreftelse,
} from '@navikt/ft-types';
import { ErrorBoundary } from '@navikt/ft-ui-komponenter';

import type {
  VurderRefusjonFieldValues,
  VurderRefusjonFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import type {
  VurderRefusjonBeregningsgrunnlagAP,
  VurderRefusjonTransformedValues,
} from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import type { Vilkårperiode } from '../../types/Vilkår';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';
import { VurderEndringRefusjonField } from './VurderEndringRefusjonField';
import { VurderEndringRefusjonRad } from './VurderEndringRefusjonRad';
import { VurderRefusjonKravForSentRad } from './VurderRefusjonKravForSentRad.tsx';

const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const finnAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov ? avklaringsbehov.find(ap => ap.definisjon === VURDER_REFUSJON_BERGRUNN) : undefined;

const buildFieldInitialValues = (bg: Beregningsgrunnlag, vilkårsperiode: Vilkårperiode): VurderRefusjonFieldValues => {
  const refusjonAP = finnAvklaringsbehov(bg.avklaringsbehov);
  let initialValues = {
    beregningsgrunnlagStp: bg.skjaeringstidspunktBeregning,
    periode: vilkårsperiode.periode,
    begrunnelse: refusjonAP?.begrunnelse,
  } as unknown as VurderRefusjonFieldValues;

  const andeler = bg.refusjonTilVurdering?.andeler ?? [];
  for (const andel of andeler) {
    initialValues = {
      ...initialValues,
      refusjon: { ...VurderEndringRefusjonRad.buildInitialValues(andel) },
    };
  }

  const refusjonskravListe = bg.refusjonTilVurdering?.refusjonskravForSentListe ?? [];
  for (const krav of refusjonskravListe) {
    initialValues = {
      ...initialValues,
      refusjonskrav: { ...VurderRefusjonKravForSentRad.buildInitialValues(krav) },
    };
  }

  return initialValues;
};

const transformFieldValues = (
  values: VurderRefusjonFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderRefusjonTransformedValues> => {
  const andeler = bg.refusjonTilVurdering?.andeler ?? [];
  const transformedAndeler = andeler.map(andel =>
    VurderEndringRefusjonRad.transformValues(values.refusjon, andel, bg.skjaeringstidspunktBeregning),
  );

  const refusjonskravForSentListe = bg.refusjonTilVurdering?.refusjonskravForSentListe ?? [];
  const transformedRefusjonskrav = refusjonskravForSentListe.map(krav =>
    VurderRefusjonKravForSentRad.transformValues(values.refusjonskrav, krav),
  );

  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    fastsatteAndeler: transformedAndeler,
    refusjonskravForSentListe: transformedRefusjonskrav,
  };
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkårperioder: Vilkårperiode[],
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

const harAvklaringsbehovVurderRefusjon = (
  beregningsgrunnlagStp: string,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
): boolean => {
  return beregninsgrunnlagListe
    .filter(bg => bg.skjaeringstidspunktBeregning === beregningsgrunnlagStp)
    .some(bg => bg.avklaringsbehov.some(ab => ab.definisjon === 'VURDER_REFUSJONSKRAV'));
};

const transformValues = (
  values: VurderRefusjonFormValues,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
  vilkårsperioder: Vilkårperiode[],
): VurderRefusjonBeregningsgrunnlagAP => {
  const fields = values[FORM_NAME];
  const grunnlag = fields
    .filter(f => vurderesIBehandlingen(vilkårsperioder, f.periode.fom))
    .filter(f => harAvklaringsbehovVurderRefusjon(f.beregningsgrunnlagStp, beregninsgrunnlagListe))
    .map(field => transformFieldValues(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)));
  const begrunnelse = grunnlag.map(gr => gr.begrunnelse).reduce((b1, b2) => (b1 !== null ? `${b1} ${b2}` : b2));
  return {
    begrunnelse,
    grunnlag,
    kode: VURDER_REFUSJON_BERGRUNN,
  };
};

interface Props {
  aktivtBeregningsgrunnlagIndeks: number;
  submitCallback: (aksjonspunktData: VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkårperiode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: VurderRefusjonFormValues;
  setFormData: (data: VurderRefusjonFormValues) => void;
  setRefusjonFormIsDirty: (isDirty: boolean) => void;
}

export const VurderEndringRefusjonForm = ({
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
}: Props) => {
  const formMethods = useForm<VurderRefusjonFormValues>({
    defaultValues: formData?.VURDER_REFUSJON_BERGRUNN_FORM
      ? formData
      : buildInitialValues(beregningsgrunnlagListe, vilkarperioder),
  });
  const [formSubmittes, setFormSubmittes] = useState<boolean>(false);

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
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => {
          if (Object.keys(errors).length === 0) {
            setFormSubmittes(true);
            submitCallback(transformValues(values, beregningsgrunnlagListe, vilkarperioder));
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
                formSubmittes={formSubmittes}
              />
            </div>
          );
        })}
      </RhfForm>
    </ErrorBoundary>
  );
};
