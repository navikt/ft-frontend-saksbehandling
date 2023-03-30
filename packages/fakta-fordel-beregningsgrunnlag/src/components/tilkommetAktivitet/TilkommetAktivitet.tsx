import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagTilBekreftelse,
  Vilkarperiode,
  Inntektsforhold,
  VurderInntektsforholdPeriode,
} from '@navikt/ft-types';
import React, { FC, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import {
  TilkommetAktivitetFieldValues,
  TilkommetAktivitetFormValues,
  TilkommetAktivitetValues,
  TilkommetInntektsforholdFieldValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import VurderNyttInntektsforholdAP, {
  VurderNyttInntektsforholTransformedValues,
} from '../../types/interface/VurderNyttInntektsforholdAP';
import { erVurdertTidligere, slaaSammenPerioder, splittSammenslåttePerioder } from './TilkommetAktivitetUtils';
import TilkommetAktivitetPanel from './TilkommetAktivitetPanel';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';

import styles from './tilkommetAktivitet.module.css';

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

function finnPerioderTilVurdering(beregningsgrunnlag: Beregningsgrunnlag): VurderInntektsforholdPeriode[] {
  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  if (!vurderInntektsforholdPerioder) {
    throw Error('vurderInntektsforholdPerioder skal være definert');
  }

  const sammenslåttPerioder = slaaSammenPerioder(vurderInntektsforholdPerioder, false, beregningsgrunnlag.forlengelseperioder);
  return sammenslåttPerioder.filter(p => !erVurdertTidligere(p, beregningsgrunnlag));
}

const buildInitalValuesInntektsforhold = (inntektsforhold: Inntektsforhold): TilkommetInntektsforholdFieldValues => ({
  aktivitetStatus: inntektsforhold.aktivitetStatus,
  arbeidsgiverIdent: inntektsforhold.arbeidsgiverId,
  arbeidsforholdId: inntektsforhold.arbeidsforholdId,
  bruttoInntektPrÅr: formatCurrencyNoKr(inntektsforhold.bruttoInntektPrÅr),
  skalRedusereUtbetaling: inntektsforhold.skalRedusereUtbetaling,
});

const buildInitialValuesPeriode = (periode: VurderInntektsforholdPeriode): TilkommetAktivitetValues => ({
  fom: periode.fom,
  tom: periode.tom,
  inntektsforhold: periode.inntektsforholdListe.map(andel => buildInitalValuesInntektsforhold(andel)),
});

const buildFieldInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFieldValues => {
  const avklaringsbehov = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const perioderTilVurdering = finnPerioderTilVurdering(beregningsgrunnlag);

  return {
    begrunnelse: avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '',
    periode: finnVilkårsperiode(vilkarperioder, beregningsgrunnlag.vilkårsperiodeFom).periode,
    perioder: perioderTilVurdering.map(periode => buildInitialValuesPeriode(periode)),
  };
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFormValues => ({
  [`${FORM_NAME}`]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg, vilkarperioder)),
});

export const transformFieldValues = (
  values: TilkommetAktivitetFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderNyttInntektsforholTransformedValues> => {
  const perioderFields = values.perioder;
  const foreløpigTransformertePerioder = perioderFields.map(periodeField => {
    const andelFields = periodeField.inntektsforhold;
    const transformerteInntektsforhold = andelFields.map(andelField => {
      const skalUtbetalingReduseres = !!andelField.skalRedusereUtbetaling;
      const bruttoInntektPrÅr = skalUtbetalingReduseres
        ? removeSpacesFromNumber(andelField.bruttoInntektPrÅr)
        : undefined;
      return {
        aktivitetStatus: andelField.aktivitetStatus,
        arbeidsgiverId: andelField.arbeidsgiverIdent,
        arbeidsforholdId: andelField.arbeidsforholdId,
        skalRedusereUtbetaling: skalUtbetalingReduseres,
        bruttoInntektPrÅr,
      };
    });
    return {
      fom: periodeField.fom,
      tom: periodeField.tom,
      tilkomneInntektsforhold: transformerteInntektsforhold,
    };
  });
  // Transformerte perioder er basert på periodene man finner i fields,
  // som igjen er basert på sammenslåtte perioder (slått sammen så saksbehandler skal slippe unødig mange utfylliger)
  // Backend forventer å motta alle perioder, så vi splitter de opp igjen før innsending
  const perioderFørSammenslåing =
    bg.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder || [];
  const allePerioder = splittSammenslåttePerioder(foreløpigTransformertePerioder, perioderFørSammenslåing);
  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    tilkomneInntektsforhold: allePerioder,
  };
};

const transformValues = (
  values: TilkommetAktivitetFormValues,
  beregninsgrunnlagListe: Beregningsgrunnlag[],
  vilkarperioder: Vilkarperiode[],
): VurderNyttInntektsforholdAP => {
  const fields = values[FORM_NAME];
  const grunnlag = fields
    .filter(f => vurderesIBehandlingen(vilkarperioder, f.periode.fom))
    .map(field => transformFieldValues(field, finnBeregningsgrunnlag(field.periode.fom, beregninsgrunnlagListe)));
  const begrunnelse = grunnlag.map(gr => gr.begrunnelse).reduce((b1, b2) => (b1 !== null ? `${b1} ${b2}` : b2));
  return {
    begrunnelse,
    grunnlag,
    kode: VURDER_NYTT_INNTKTSFRHLD,
  };
};

type TilkommetAktivitetProps = {
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
};

const TilkommetAktivitet: FC<TilkommetAktivitetProps> = ({
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
}) => {
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
            submitCallback(transformValues(values, beregningsgrunnlagListe, vilkarperioder));
          }
        }}
        setDataOnUnmount={setFormData}
      >
        {fields.map((field, index) => (
          <div key={field.id} style={{ display: index === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none' }}>
            <TilkommetAktivitetPanel
              formName={FORM_NAME}
              beregningsgrunnlag={beregningsgrunnlagListe[index]}
              bgIndex={index}
              readOnly={
                readOnly || !vurderesIBehandlingen(vilkarperioder, beregningsgrunnlagListe[index].vilkårsperiodeFom)
              }
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
