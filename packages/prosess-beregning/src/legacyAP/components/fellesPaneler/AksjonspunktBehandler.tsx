import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { RhfForm } from '@navikt/ft-form-hooks';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { AksjonspunktBoks, usePrevious } from '@navikt/ft-ui-komponenter';
import { hasAksjonspunkt } from '@navikt/ft-utils';

import { SammenligningType } from '../../../kodeverk/sammenligningType';
import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type { Vilkår } from '../../../types/Vilkår';
import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { finnAlleAndelerIFørstePeriode } from '../../../utils/beregningsgrunnlagUtils';
import type { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import { type BeregningFormValues, finnFormName, type FormNameType } from '../../types/BeregningFormValues';
import type { AksjonspunktDataValues, BeregningsgrunnlagValues } from '../../types/BeregningsgrunnlagAksjonspunkt';
import type { BeregningAksjonspunktSubmitType, GruppertAksjonspunktData } from '../../types/BeregningsgrunnlagAP';
import type { VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';
import { AksjonspunktBehandlerAT } from '../ATFL/AksjonspunktBehandlerAT';
import { AksjonspunktBehandlerFL } from '../ATFL/AksjonspunktBehandlerFL';
import { AksjonspunktBehandlerTidsbegrenset } from '../ATFL/AksjonspunktBehandlerTidsbegrenset';
import { ProsessStegSubmitButton } from '../ProsessStegSubmitButton';
import { AksjonspunktBehandlerSNEllerMidlertidigInaktiv } from '../selvstendigNaeringsdrivende/AksjonspunktBehandlerSNEllerMidlertidigInaktiv';
import { FastsettSNNyIArbeid } from '../selvstendigNaeringsdrivende/FastsettSNNyIArbeid';
import { finnAPBeskrivelse, finnAPTittel } from './aksjonspunktHeaderUtils';
import { ArbeidstakerEllerFrilansContainer } from './ArbeidstakerEllerFrilansContainer';
import { finnLovparagraf, finnLovparagrafForAksjonspunkt, LovParagraf } from './lovparagrafUtils';
import { SelvstendigNæringsdrivendeContainer } from './SelvstendigNæringsdrivendeContainer';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = AksjonspunktKode;

interface Props {
  readOnly: boolean;
  kodeverkSamling: KodeverkForPanel;
  isSubmittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
  lovparagraf: LovParagraf;
  finnesFormSomSubmittes: boolean;
  setSubmitting: (toggle: boolean) => void;
}

export const AksjonspunktBehandler = ({
  readOnly,
  isSubmittable,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  beregningsgrunnlagListe,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivIndex,
  lovparagraf,
  finnesFormSomSubmittes,
  setSubmitting,
}: Props) => {
  const bgSomSkalVurderes = beregningsgrunnlagListe.filter(bg =>
    harAvklaringsbehovForLovparagraf(bg.avklaringsbehov, lovparagraf),
  );
  const formName = finnFormName(lovparagraf);
  const losAvklaringsbehov = (values: BeregningFormValues, lp: LovParagraf) => {
    setSubmitting(true);
    submitCallback(transformFields(values, lp));
  };
  const formMethods = useForm<BeregningFormValues>({
    defaultValues: formData || buildFormInitialValues(bgSomSkalVurderes, vilkår, formName, lovparagraf),
  });

  const resetForm = () => {
    formMethods.reset(buildFormInitialValues(bgSomSkalVurderes, vilkår, formName, lovparagraf));
  };

  const totaltAntallAvklaringsbehov = beregningsgrunnlagListe.reduce((sum, bg) => sum + bg.avklaringsbehov.length, 0);

  const forrigeAntallAvklaringsbehov = usePrevious(totaltAntallAvklaringsbehov);

  useEffect(() => {
    if (forrigeAntallAvklaringsbehov !== undefined && totaltAntallAvklaringsbehov !== forrigeAntallAvklaringsbehov) {
      setSubmitting(false);
      if (!formData) {
        resetForm();
      }
    }
  }, [totaltAntallAvklaringsbehov, formData, resetForm, setSubmitting, forrigeAntallAvklaringsbehov]);

  const { control } = formMethods;

  const { fields } = useFieldArray({
    name: formName,
    control,
  });

  const aktivtStp = beregningsgrunnlagListe[aktivIndex].vilkårsperiodeFom;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={values => losAvklaringsbehov(values, lovparagraf)}
      setDataOnUnmount={setFormData}
    >
      {fields.map((field, index) => {
        const { beregningsgrunnlagPeriode, avklaringsbehov, vilkårsperiodeFom, aktivitetStatus } =
          bgSomSkalVurderes[index];
        const aksjonspunktForLovparagraf = avklaringsbehov.find(gjelderForParagraf(lovparagraf));
        const skalValideres = utledSkalValideres(vilkår, vilkårsperiodeFom);

        if (!aksjonspunktForLovparagraf) {
          return null;
        }

        return (
          <div key={field.id} style={{ display: vilkårsperiodeFom === aktivtStp ? 'block' : 'none' }}>
            <AksjonspunktBoks
              tittel={finnAPTittel(aksjonspunktForLovparagraf, aktivitetStatus ?? [])}
              beskrivelse={finnAPBeskrivelse(aksjonspunktForLovparagraf, beregningsgrunnlagPeriode)}
              aksjonspunkt={aksjonspunktForLovparagraf}
            >
              <VStack gap="space-16">
                {lovparagraf === LovParagraf.ÅTTE_TRETTI && (
                  <ArbeidstakerEllerFrilansContainer
                    kodeverkSamling={kodeverkSamling}
                    beregningsgrunnlagPeriode={beregningsgrunnlagPeriode}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    readOnly={readOnly}
                    fieldIndex={index}
                    formName={formName}
                    avklaringsbehov={aksjonspunktForLovparagraf}
                    skalValideres={skalValideres}
                  />
                )}
                {lovparagraf === LovParagraf.ÅTTE_TRETTIFEM && (
                  <SelvstendigNæringsdrivendeContainer
                    readOnly={readOnly}
                    beregningsgrunnlagPeriode={beregningsgrunnlagPeriode}
                    fieldIndex={index}
                    formName={formName}
                    aksjonspunkt={aksjonspunktForLovparagraf}
                    skalValideres={skalValideres}
                  />
                )}
                <div>
                  <ProsessStegSubmitButton
                    isReadOnly={readOnly}
                    isSubmittable={isSubmittable}
                    isDirty={formMethods.formState.isDirty}
                    isSubmitting={finnesFormSomSubmittes}
                  />
                </div>
              </VStack>
            </AksjonspunktBoks>
          </div>
        );
      })}
    </RhfForm>
  );
};

const utledSkalValideres = (vilkår: Vilkår, vilkårsperiodeFom: string) => {
  const periode = finnVilkårperiode(vilkår, vilkårsperiodeFom);
  if (!periode) {
    return false;
  }
  return periode.vurderesIBehandlingen && !periode.erForlengelse;
};

const gjelderForParagraf = (lovparagraf: LovParagraf) => (aksjonspunkt: BeregningAvklaringsbehov) =>
  finnLovparagrafForAksjonspunkt(aksjonspunkt) === lovparagraf;

const harAvklaringsbehovForLovparagraf = (avklaringsbehov: BeregningAvklaringsbehov[], lovparagraf: LovParagraf) =>
  avklaringsbehov.some(gjelderForParagraf(lovparagraf));

const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string) =>
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

const buildInitialValues = (
  { beregningsgrunnlagPeriode, avklaringsbehov }: BeregningsgrunnlagProp,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp,
): AksjonspunktDataValues => {
  if (!beregningsgrunnlagPeriode) {
    return {};
  }
  const alleAndelerIFørstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode);

  const andelerArbeidstaker = alleAndelerIFørstePeriode.filter(andel => andel.aktivitetStatus === 'AT');
  const andelerFrilanser = alleAndelerIFørstePeriode.filter(andel => andel.aktivitetStatus === 'FL');
  const andelerSNEllerMidlInaktiv = alleAndelerIFørstePeriode.filter(andel =>
    ['SN', 'BA'].includes(andel.aktivitetStatus),
  );

  const valuesATFL = {
    ...ArbeidstakerEllerFrilansContainer.buildInitialValues(avklaringsbehov),
    ...AksjonspunktBehandlerTidsbegrenset.buildInitialValues(beregningsgrunnlagPeriode),
    ...AksjonspunktBehandlerFL.buildInitialValues(andelerFrilanser),
    ...AksjonspunktBehandlerAT.buildInitialValues(andelerArbeidstaker),
  };
  const valuesSNEllerMidlInaktiv = {
    ...AksjonspunktBehandlerSNEllerMidlertidigInaktiv.buildInitialValues(andelerSNEllerMidlInaktiv, avklaringsbehov),
  };

  switch (sammenligningsgrunnlag?.sammenligningsgrunnlagType) {
    case undefined:
      return FastsettSNNyIArbeid.buildInitialValues(andelerSNEllerMidlInaktiv, avklaringsbehov);
    case SammenligningType.ATFLSN:
      return {
        ...valuesATFL,
        ...valuesSNEllerMidlInaktiv,
      };
    case SammenligningType.AT_FL:
      return valuesATFL;
    case SammenligningType.SN:
    case SammenligningType.MIDLERTIDIG_INAKTIV:
      return valuesSNEllerMidlInaktiv;
    default:
      return {};
  }
};

const buildFormInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag[],
  vilkår: Vilkår,
  formName: FormNameType,
  lovparagraf: LovParagraf,
): BeregningFormValues => ({
  [formName]: beregningsgrunnlag.map(bg => {
    const vilkårsperiode = finnVilkårperiode(vilkår, bg.vilkårsperiodeFom)!;
    const avklaringsbehov = bg.avklaringsbehov.find(gjelderForParagraf(lovparagraf));
    const sammenligningsgrunnlag = bg.sammenligningsgrunnlagPrStatus?.find(
      s => finnLovparagraf(s.sammenligningsgrunnlagType, bg.aktivitetStatus) === lovparagraf,
    );

    return {
      ...(avklaringsbehov ? buildInitialValues(bg, sammenligningsgrunnlag) : {}),
      periode: vilkårsperiode.periode,
      erTilVurdering: vilkårsperiode.vurderesIBehandlingen && !vilkårsperiode.erForlengelse,
      gjeldendeAvklaringsbehov: avklaringsbehov ? [avklaringsbehov] : [],
      skjæringstidspunkt: bg.skjaeringstidspunktBeregning,
      allePerioder: bg.beregningsgrunnlagPeriode,
    };
  }),
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
    if (eksisterende === undefined) {
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
    } else {
      eksisterende.grunnlag.push({
        periode: curr.periode,
        ...ap.aksjonspunktData,
      });
      eksisterende.begrunnelse = `${eksisterende.begrunnelse} ${ap.aksjonspunktData.begrunnelse}`;
    }
  });
  return gruppert;
};

const transformValues = (values: BeregningsgrunnlagValues): GruppertAksjonspunktData[] => {
  const { allePerioder } = values;
  if (allePerioder.length < 1) {
    throw new Error('Ingen beregningsgrunnlagperioder, ugyldig tilstand');
  }
  allePerioder.sort((p1, p2) => {
    if (!p1.beregningsgrunnlagPeriodeFom || !p2.beregningsgrunnlagPeriodeFom) {
      return 0;
    }
    return p1.beregningsgrunnlagPeriodeFom.localeCompare(p2.beregningsgrunnlagPeriodeFom);
  });
  const alleAndelerIFørstePeriode = allePerioder[0].beregningsgrunnlagPrStatusOgAndel ?? [];

  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
        aksjonspunktData: ArbeidstakerEllerFrilansContainer.transformATFLValues(
          values as ATFLValues,
          alleAndelerIFørstePeriode,
        ),
      },
    ];
  }
  if (
    hasAksjonspunkt(
      VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      values.gjeldendeAvklaringsbehov,
    )
  ) {
    return [
      {
        kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlertidigInaktiv.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (hasAksjonspunkt(VURDER_VARIG_ENDRET_ARBEIDSSITUASJON, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlertidigInaktiv.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlertidigInaktiv.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        aksjonspunktData: ArbeidstakerEllerFrilansContainer.transformATFLTidsbegrensetValues(
          values as ATFLTidsbegrensetValues,
          allePerioder,
        ),
      },
    ];
  }
  throw new Error('Må submitte et aksjonspunkt');
};

const transformFields = (values: BeregningFormValues, lovparagraf: LovParagraf) => {
  const fields = values[finnFormName(lovparagraf)];
  const aksjonspunktLister = fields
    .filter(f => f.erTilVurdering)
    .map(field => ({
      periode: field.periode,
      aksjonspunkter: transformValues(field),
    }));
  return aksjonspunktLister.reduce(grupperPåKode, [] as BeregningAksjonspunktSubmitType[]);
};
