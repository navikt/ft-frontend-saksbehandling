import React, { FunctionComponent, useEffect } from 'react';
import { Form } from '@navikt/ft-form-hooks';

import {
  AktivitetStatus,
  isStatusArbeidstakerOrKombinasjon,
  isStatusDagpengerOrAAP,
  isStatusFrilanserOrKombinasjon,
  isStatusKombinasjon,
  isStatusMilitaer,
  isStatusSNOrKombinasjon,
  isStatusTilstotendeYtelse,
} from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { BeregningAksjonspunktSubmitType, GruppertAksjonspunktData } from '../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';
import BeregningForm, { buildInitialValues, transformValues } from './beregningForm/BeregningForm';
import RelevanteStatuserProp from '../types/RelevanteStatuserTsType';
import { BeregningsgrunnlagValues } from '../types/BeregningsgrunnlagAksjonspunktTsType';

import BeregningFormValues from '../types/BeregningFormValues';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
];

const formName = 'BeregningForm';

const finnAvklaringsbehov = (beregningsgrunnlag: Beregningsgrunnlag) =>
  beregningsgrunnlag.avklaringsbehov.filter(ab => beregningAksjonspunkter.some(bap => bap === ab.definisjon));

const getRelevanteStatuser = (statuser: string[]): RelevanteStatuserProp => ({
  isArbeidstaker: statuser.some(kode => isStatusArbeidstakerOrKombinasjon(kode)),
  isFrilanser: statuser.some(kode => isStatusFrilanserOrKombinasjon(kode)),
  isSelvstendigNaeringsdrivende: statuser.some(kode => isStatusSNOrKombinasjon(kode)),
  harAndreTilstotendeYtelser: statuser.some(kode => isStatusTilstotendeYtelse(kode)),
  harDagpengerEllerAAP: statuser.some(kode => isStatusDagpengerOrAAP(kode)),
  isAAP: statuser.some(kode => kode === AktivitetStatus.ARBEIDSAVKLARINGSPENGER),
  isDagpenger: statuser.some(kode => kode === AktivitetStatus.DAGPENGER),
  skalViseBeregningsgrunnlag: statuser.length > 0,
  isKombinasjonsstatus: statuser.some(kode => isStatusKombinasjon(kode)) || statuser.length > 1,
  isMilitaer: statuser.some(kode => isStatusMilitaer(kode)),
});

const getAvklaringsbehovForGraderingPaaAndelUtenBG = (
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov
    ? avklaringsbehov.find(
        ap => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
      )
    : undefined;

type OwnProps = {
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  aktivtBeregningsgrunnlagIndeks: number;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkar: Vilkar;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
};

const finnVilkårperiode = (vilkår: Vilkar, vilkårsperiodeFom: string): Vilkarperiode =>
  // @ts-ignore
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

const buildFieldInitialValue = (
  beregningsgrunnlag: Beregningsgrunnlag,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkarperiode,
): BeregningsgrunnlagValues => ({
  ...buildInitialValues(beregningsgrunnlag),
  periode: vilkårsperiode.periode,
  erTilVurdering: vilkårsperiode.vurderesIBehandlingen,
  // @ts-ignore
  relevanteStatuser: getRelevanteStatuser(beregningsgrunnlag.aktivitetStatus),
  gjeldendeAvklaringsbehov: finnAvklaringsbehov(beregningsgrunnlag),
  skjæringstidspunkt: beregningsgrunnlag.skjaeringstidspunktBeregning,
  allePerioder: beregningsgrunnlag.beregningsgrunnlagPeriode,
});

const buildFormInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag[],
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkår: Vilkar,
): BeregningFormValues => ({
  [formName]: beregningsgrunnlag.map(bg =>
    buildFieldInitialValue(
      bg,
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
      finnVilkårperiode(vilkår, bg.skjaeringstidspunktBeregning),
    ),
  ),
});

type AksjonspunktDataMedPeriode = {
  periode: {
    fom: string;
    tom: string;
  };
  aksjonspunkter: GruppertAksjonspunktData[];
};

const grupperPåKode = (
  gruppert: BeregningAksjonspunktSubmitType[],
  curr: AksjonspunktDataMedPeriode,
): BeregningAksjonspunktSubmitType[] => {
  curr.aksjonspunkter.forEach(ap => {
    const eksisterende = gruppert.find(gruppertAp => gruppertAp.kode === ap.kode);
    if (eksisterende !== undefined) {
      eksisterende.grunnlag.push({
        periode: curr.periode,
        ...ap.aksjonspunktData,
      });
      eksisterende.begrunnelse = `${eksisterende.begrunnelse} ${ap.aksjonspunktData.begrunnelse}`;
    } else {
      gruppert.push({
        kode: ap.kode,
        begrunnelse: ap.aksjonspunktData.begrunnelse,
        grunnlag: [
          {
            periode: curr.periode,
            ...ap.aksjonspunktData,
          },
        ],
      });
    }
  });
  return gruppert;
};

const transformFields = (values: BeregningFormValues) => {
  const fields = values[formName];
  const aksjonspunktLister = fields.map(field => ({
    periode: field.periode,
    aksjonspunkter: transformValues(field),
  }));
  return aksjonspunktLister.reduce(grupperPåKode, [] as BeregningAksjonspunktSubmitType[]);
};

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
const BeregningFP: FunctionComponent<OwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const aktivtBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];
  // @ts-ignore
  const relevanteStatuser = getRelevanteStatuser(aktivtBeregningsgrunnlag.aktivitetStatus);
  const aksjonspunktGraderingPaaAndelUtenBG = getAvklaringsbehovForGraderingPaaAndelUtenBG(
    aktivtBeregningsgrunnlag.avklaringsbehov,
  );
  const formMethods = useForm<BeregningFormValues>({
    defaultValues:
      formData || buildFormInitialValues(beregningsgrunnlagListe, alleKodeverk, arbeidsgiverOpplysningerPerId, vilkar),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors },
    control,
    trigger,
  } = formMethods;

  useEffect(() => {
    if (isSubmitted && dirtyFields[formName]?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const { fields } = useFieldArray({
    name: formName,
    control,
  });

  const losAvklaringsbehov = (values: BeregningFormValues) => {
    if (Object.keys(errors).length === 0) {
      submitCallback(transformFields(values));
    }
  };

  return (
    <>
      <Form formMethods={formMethods} onSubmit={values => losAvklaringsbehov(values)} setDataOnUnmount={setFormData}>
        {fields.map((field, index) => (
          <div key={field.id} style={{ display: index === aktivtBeregningsgrunnlagIndeks ? 'block' : 'none' }}>
            <BeregningForm
              key={field.id}
              readOnly={readOnly}
              beregningsgrunnlag={beregningsgrunnlagListe[index]}
              gjeldendeAvklaringsbehov={finnAvklaringsbehov(beregningsgrunnlagListe[index])}
              relevanteStatuser={relevanteStatuser}
              readOnlySubmitButton={readOnlySubmitButton}
              alleKodeverk={alleKodeverk}
              vilkarPeriode={finnVilkårperiode(vilkar, beregningsgrunnlagListe[index].vilkårsperiodeFom)}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              fieldIndex={index}
            />
          </div>
        ))}
      </Form>

      {aksjonspunktGraderingPaaAndelUtenBG && (
        <GraderingUtenBGReadOnly avklaringsbehov={aksjonspunktGraderingPaaAndelUtenBG} />
      )}
    </>
  );
};

export default BeregningFP;
