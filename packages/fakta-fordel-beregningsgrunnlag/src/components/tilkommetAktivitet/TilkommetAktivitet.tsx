import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagTilBekreftelse,
  Vilkarperiode,
} from '@navikt/ft-types';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
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
import { getInntektsforhold } from './TilkommetAktivitetUtils';

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

const finnVilkårsperiode = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]): Vilkarperiode => {
  const periode = vilkårsperioder.find(p => p.periode.fom === bg.vilkårsperiodeFom);
  if (!periode) {
    throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${bg.vilkårsperiodeFom}`);
  }
  return periode;
};

const buildFieldInitialValues = (beregningsgrunnlag: Beregningsgrunnlag, vilkarperioder: Vilkarperiode[]) => {
  const avklaringsbehov = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const inntektsforhold = getInntektsforhold(
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder,
  );
  return {
    begrunnelse: avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '',
    bruttoInntektPrÅr: inntektsforhold?.skalRedusereUtbetaling
      ? formatCurrencyNoKr(inntektsforhold?.bruttoInntektPrÅr)
      : undefined,
    skalRedusereUtbetaling: inntektsforhold?.skalRedusereUtbetaling,
    periode: finnVilkårsperiode(beregningsgrunnlag, vilkarperioder).periode,
  };
};

const buildInitialValues = (beregningsgrunnlagListe: Beregningsgrunnlag[], vilkarperioder: Vilkarperiode[]) => ({
  [FORM_NAME]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg, vilkarperioder)),
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
      aktivitetStatus: inntektsforhold.aktivitetStatus,
      arbeidsgiverId: inntektsforhold.arbeidsgiverId,
      arbeidsforholdId: inntektsforhold.arbeidsforholdId,
      bruttoInntektPrÅr: removeSpacesFromNumber(values.bruttoInntektPrÅr),
      skalRedusereUtbetaling: values.skalRedusereUtbetaling,
    })),
  }));

  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    tilkomneInntektsforhold: transformedInntektsforhold,
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
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: VurderNyttInntektsforholdAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkarperiode[];
  setTilkommetAktivitetFormIsDirty: (isDirty: boolean) => void;
}

const TilkommetAktivitet = ({
  aktivtBeregningsgrunnlagIndeks,
  formData,
  setFormData,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  submittable,
  vilkarperioder,
  arbeidsgiverOpplysningerPerId,
  setTilkommetAktivitetFormIsDirty,
}: TilkommetAktivitetProps) => {
  const formMethods = useForm<TilkommetAktivitetFormValues>({
    defaultValues: formData?.VURDER_TILKOMMET_AKTIVITET_FORM
      ? formData
      : buildInitialValues(beregningsgrunnlagListe, vilkarperioder),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors, isDirty },
    trigger,
    control,
  } = formMethods;

  useEffect(() => {
    setTilkommetAktivitetFormIsDirty(isDirty);
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

  const gjeldendeBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];
  const ap = findAvklaringsbehov(gjeldendeBeregningsgrunnlag.avklaringsbehov);
  const erAksjonspunktÅpent = ap ? isAksjonspunktOpen(ap.status) : false;

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
              beregningsgrunnlag={gjeldendeBeregningsgrunnlag}
              formName={FORM_NAME}
              index={index}
              readOnly={readOnly}
              submittable={submittable}
              erAksjonspunktÅpent={erAksjonspunktÅpent}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};
export default TilkommetAktivitet;
