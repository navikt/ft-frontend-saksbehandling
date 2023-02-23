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
  TilkommetAktivitetPeriodeValues,
  TilkommetAktivitetValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import VurderNyttInntektsforholdAP, {
  VurderNyttInntektsforholTransformedValues,
} from '../../types/interface/VurderNyttInntektsforholdAP';
import styles from './tilkommetAktivitet.less';
import { erVurdertTidligere, slaaSammenPerioder } from './TilkommetAktivitetUtils';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';
import TilkommetAktivitetPanel from './TilkommetAktivitetPanel';
import { finnVilkårsperiode, vurderesIBehandlingen } from '../felles/vilkårsperiodeUtils';
import { getPeriodeIdentikator } from './TilkommetAktivitetField';

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

function erInkludertIEllerLik(p: VurderInntektsforholdPeriode, p2: VurderInntektsforholdPeriode) {
  return !dayjs(p.fom).isBefore(p2.fom) && !dayjs(p.tom).isAfter(p2.tom);
}

function overlapper(p: VurderInntektsforholdPeriode, p2: VurderInntektsforholdPeriode) {
  return erInkludertIEllerLik(p, p2) || erInkludertIEllerLik(p2, p);
}

function finnPeriodeIdentifikator(
  inntektsforholdPeriode: VurderInntektsforholdPeriode,
  sammenslåttePerioder: VurderInntektsforholdPeriode[],
): string {
  const periode = sammenslåttePerioder.find(p => overlapper(inntektsforholdPeriode, p));
  if (periode === undefined) {
    throw Error('Forventet å finne en overlappende periode');
  }
  return getPeriodeIdentikator(periode);
}

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

function buildInntektsforholdListeInitialValues(periode: VurderInntektsforholdPeriode): TilkommetAktivitetValues {
  return periode.inntektsforholdListe.reduce(
    (initialIF, inntekt) => ({
      ...initialIF,
      ...buildInnteksforholdInitialValues(inntekt),
    }),
    {},
  );
}

function buildPeriodeListeInitialValues(
  perioderTilVurdering: VurderInntektsforholdPeriode[],
): TilkommetAktivitetPeriodeValues {
  return perioderTilVurdering.reduce(
    (initialPeriode, periode) => ({
      ...initialPeriode,
      ...{
        [getPeriodeIdentikator(periode)]: buildInntektsforholdListeInitialValues(periode),
      },
    }),
    {},
  );
}

const buildFieldInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFieldValues => {
  const avklaringsbehov = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const perioderTilVurdering = finnPerioderTilVurdering(beregningsgrunnlag);

  // @ts-ignore
  return {
    begrunnelse: avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '',
    periode: finnVilkårsperiode(vilkarperioder, beregningsgrunnlag.vilkårsperiodeFom).periode,
    ...buildPeriodeListeInitialValues(perioderTilVurdering),
  };
};

const buildInitialValues = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  vilkarperioder: Vilkarperiode[],
): TilkommetAktivitetFormValues => ({
  [`${FORM_NAME}`]: beregningsgrunnlagListe.map(bg => buildFieldInitialValues(bg, vilkarperioder)),
});

function skalVurderes(perioderTilVurdering: VurderInntektsforholdPeriode[]) {
  return (p: VurderInntektsforholdPeriode) => perioderTilVurdering.some(p2 => overlapper(p, p2));
}

export const transformFieldValues = (
  values: TilkommetAktivitetFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderNyttInntektsforholTransformedValues> => {
  const perioderTilVurdering = finnPerioderTilVurdering(bg);
  const vurderInntektsforholdPerioder =
    bg.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder || [];
  const sammenslåttePerioder = slaaSammenPerioder(vurderInntektsforholdPerioder, bg.forlengelseperioder);
  const transformedInntektsforhold = vurderInntektsforholdPerioder
    .filter(skalVurderes(perioderTilVurdering))
    .map(inntektsforholdPeriode => {
      const periodeValues = values[finnPeriodeIdentifikator(inntektsforholdPeriode, sammenslåttePerioder)];
      return {
        fom: inntektsforholdPeriode.fom,
        tom: inntektsforholdPeriode.tom,
        andeler: inntektsforholdPeriode.inntektsforholdListe.map(inntektsforhold => {
          const { skalRedusereUtbetaling } = periodeValues[getInntektsforholdIdentifikator(inntektsforhold)];
          const bruttoInntektPrÅr = skalRedusereUtbetaling
            ? removeSpacesFromNumber(periodeValues[getInntektsforholdIdentifikator(inntektsforhold)].bruttoInntektPrÅr)
            : undefined;
          return {
            aktivitetStatus: inntektsforhold.aktivitetStatus,
            arbeidsgiverId: inntektsforhold.arbeidsgiverId,
            arbeidsforholdId: inntektsforhold.arbeidsforholdId,
            bruttoInntektPrÅr,
            skalRedusereUtbetaling,
          };
        }),
      };
    });

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
