import { Form } from '@navikt/ft-form-hooks';
import { BeregningAvklaringsbehov, Beregningsgrunnlag, BeregningsgrunnlagTilBekreftelse } from '@navikt/ft-types';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  TilkommetAktivitetFieldValues,
  TilkommetAktivitetFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import VurderNyttInntektsforholdAP, {
  VurderNyttInntektsforholTransformedValues,
} from '../../types/interface/VurderNyttInntektsforholdAP';
import styles from './tilkommetAktivitet.less';
import TilkommetAktivitetField from './TilkommetAktivitetField';

const { VURDER_NYTT_INNTKTSFRHLD } = FaktaFordelBeregningAvklaringsbehovCode;
export const FORM_NAME = 'VURDER_TILKOMMET_AKTIVITET_FORM';

const findAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov => {
  const ak = avklaringsbehov.find(ap => ap.definisjon === VURDER_NYTT_INNTKTSFRHLD);
  if (!ak) {
    throw Error(`Fant ikke forventet avklaringsbehov ${VURDER_NYTT_INNTKTSFRHLD}`);
  }
  return ak;
};

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

const buildFieldInitialValues = (beregningsgrunnlag: Beregningsgrunnlag) => {
  const avklaringsbehov = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  return {
    begrunnelse: avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '',
    bruttoInntektPrÅr: undefined,
    skalRedusereUtbetaling: undefined,
  };
};

const buildInitialValues = (beregningsgrunnlagListe: Beregningsgrunnlag[]) => ({
  [FORM_NAME]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg)),
});

export const transformFieldValues = (
  values: TilkommetAktivitetFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderNyttInntektsforholTransformedValues> => {
  const vurderInntektsforholdPerioder =
    bg.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder || [];
  const transformedInntektsforhold = vurderInntektsforholdPerioder.flatMap(inntektsforholdPeriode => ({
    fom: inntektsforholdPeriode.fom,
    tom: inntektsforholdPeriode.tom,
    andeler: inntektsforholdPeriode.inntektsforholdListe.map(inntektsforhold => ({
      arbeidsgiverId: inntektsforhold.arbeidsgiverId,
      arbeidsforholdId: inntektsforhold.arbeidsforholdId,

      bruttoInntektPrÅr: values.bruttoInntektPrÅr,
      skalRedusereUtbetaling: values.skalRedusereUtbetaling,
    })),
  }));

  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    tilkomneInntektsforholdPerioder: transformedInntektsforhold,
  };
};

const transformValues = (
  values: TilkommetAktivitetFormValues,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
): VurderNyttInntektsforholdAP => {
  const fields = values[FORM_NAME];
  const grunnlag = fields.map(field =>
    transformFieldValues(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)),
  );
  const begrunnelse = grunnlag.map(gr => gr.begrunnelse).reduce((b1, b2) => (b1 !== null ? `${b1} ${b2}` : b2));
  return {
    begrunnelse,
    grunnlag,
    kode: VURDER_NYTT_INNTKTSFRHLD,
  };
};

interface TilkommetAktivitetProps {
  aktivtBeregningsgrunnlagIndeks: number;
  formData?: TilkommetAktivitetFormValues;
  setFormData: (data: TilkommetAktivitetFormValues) => void;
  // arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: VurderNyttInntektsforholdAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  // vilkarperioder: Vilkarperiode[];
}

const TilkommetAktivitet = ({
  aktivtBeregningsgrunnlagIndeks,
  formData,
  setFormData,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  submittable,
}: TilkommetAktivitetProps) => {
  const formMethods = useForm<TilkommetAktivitetFormValues>({
    defaultValues: formData || buildInitialValues(beregningsgrunnlagListe),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors },
    trigger,
    control,
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

  const gjeldendeBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];

  return (
    <div className={styles.tilkommetAktivitet}>
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
            <TilkommetAktivitetField
              gjeldendeBeregningsgrunnlag={gjeldendeBeregningsgrunnlag}
              formName={FORM_NAME}
              index={index}
              readOnly={readOnly}
              submittable={submittable}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};
export default TilkommetAktivitet;
