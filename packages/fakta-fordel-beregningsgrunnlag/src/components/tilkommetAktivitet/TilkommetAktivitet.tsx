import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagTilBekreftelse,
  Vilkarperiode,
} from '@navikt/ft-types';
import React, { FC, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { removeSpacesFromNumber } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import {
  TilkommetAktivitetFieldValues,
  TilkommetAktivitetFormValues,
  TilkommetAktivitetValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import VurderNyttInntektsforholdAP, {
  VurderNyttInntektsforholTransformedValues,
} from '../../types/interface/VurderNyttInntektsforholdAP';
import styles from './tilkommetAktivitet.less';
import { erVurdertTidligere, getInntektsforhold, slaaSammenPerioder } from './TilkommetAktivitetUtils';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';
import TilkommetAktivitetPanel from './TilkommetAktivitetPanel';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';

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

const buildInnteksforholdInitialValues = (inntektsforhold: Inntektsforhold): TilkommetAktivitetValues => ({
  [getInntektsforholdIdentifikator(inntektsforhold)]: {
    bruttoInntektPrÅr: inntektsforhold?.bruttoInntektPrÅr,
    skalRedusereUtbetaling: inntektsforhold?.skalRedusereUtbetaling,
  },
});

function finnPerioderTilVurdering(beregningsgrunnlag: Beregningsgrunnlag): VurderInntektsforholdPeriode[] {
  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  if (!vurderInntektsforholdPerioder) {
    throw Error('vurderInntektsforholdPerioder skal være definert');
  }

  const sammenslåttPerioder = slaaSammenPerioder(vurderInntektsforholdPerioder, beregningsgrunnlag.forlengelseperioder);
  return sammenslåttPerioder.filter(p => !erVurdertTidligere(p, beregningsgrunnlag));
}

const buildFieldInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFieldValues => {
  const avklaringsbehov = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const perioderTilVurdering = finnPerioderTilVurdering(beregningsgrunnlag);
  const inntektsforhold = getInntektsforhold(perioderTilVurdering);

  // @ts-ignore
  return {
    begrunnelse: avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '',
    periode: finnVilkårsperiode(vilkarperioder, beregningsgrunnlag.vilkårsperiodeFom).periode,
    ...inntektsforhold.reduce(
      (initial, inntekt) => ({
        ...initial,
        ...buildInnteksforholdInitialValues(inntekt),
      }),
      {},
    ),
  };
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFormValues => ({
  [`${FORM_NAME}`]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg, vilkarperioder)),
});

function skalVurderes(perioderTilVurdering: VurderInntektsforholdPeriode[]) {
  return (p: VurderInntektsforholdPeriode) =>
    perioderTilVurdering.some(p2 => !dayjs(p.fom).isBefore(p2.fom) && !dayjs(p.tom).isAfter(p2.tom));
}

export const transformFieldValues = (
  values: TilkommetAktivitetFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderNyttInntektsforholTransformedValues> => {
  const perioderTilVurdering = finnPerioderTilVurdering(bg);
  const vurderInntektsforholdPerioder =
    bg.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder || [];
  const transformedInntektsforhold = vurderInntektsforholdPerioder
    .filter(skalVurderes(perioderTilVurdering))
    .map(inntektsforholdPeriode => ({
      fom: inntektsforholdPeriode.fom,
      tom: inntektsforholdPeriode.tom,
      andeler: inntektsforholdPeriode.inntektsforholdListe.map(inntektsforhold => {
        const { skalRedusereUtbetaling } = values[getInntektsforholdIdentifikator(inntektsforhold)];
        const bruttoInntektPrÅr = skalRedusereUtbetaling
          ? removeSpacesFromNumber(values[getInntektsforholdIdentifikator(inntektsforhold)].bruttoInntektPrÅr)
          : undefined;
        return {
          aktivitetStatus: inntektsforhold.aktivitetStatus,
          arbeidsgiverId: inntektsforhold.arbeidsgiverId,
          arbeidsforholdId: inntektsforhold.arbeidsforholdId,
          bruttoInntektPrÅr,
          skalRedusereUtbetaling,
        };
      }),
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
              beregningsgrunnlag={beregningsgrunnlagListe[index]}
              formName={FORM_NAME}
              index={index}
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
