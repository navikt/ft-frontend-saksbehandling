import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { RhfForm } from '@navikt/ft-form-hooks';
import type {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { AksjonspunktBoks, usePrevious } from '@navikt/ft-ui-komponenter';
import { hasAksjonspunkt } from '@navikt/ft-utils';

import { SammenligningType } from '../../../kodeverk/sammenligningType';
import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type { Vilkår } from '../../../types/Vilkår';
import {
  AksjonspunktKode,
  ÅTTE_TRETTI_AKSJONSPUNKTER,
  ÅTTE_TRETTIFEM_AKSJONSPUNKTER,
  medAPKode,
} from '../../../utils/aksjonspunkt';
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
import {
  erSammenligningsgrunnlagReleavantForAksjonspunkt,
  finnVilkårperiode,
  grupperPåKode,
  utledSkalValideres,
} from './aksjonspunktBehandlerUtils';
import { finnAPBeskrivelse, finnAPTittel } from './aksjonspunktHeaderUtils';
import { ArbeidstakerEllerFrilansContainer } from './ArbeidstakerEllerFrilansContainer';
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
  beregningsgrunnlagForAksjonspunkt: Beregningsgrunnlag[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivtBeregningsgrunnlag: Beregningsgrunnlag;
  aksjonspunktKode: AksjonspunktKode;
  finnesFormSomSubmittes: boolean;
  setSubmitting: (toggle: boolean) => void;
}

export const AksjonspunktBehandler = ({
  readOnly,
  isSubmittable,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  beregningsgrunnlagForAksjonspunkt,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivtBeregningsgrunnlag,
  aksjonspunktKode,
  finnesFormSomSubmittes,
  setSubmitting,
}: Props) => {
  const formName = finnFormName(aksjonspunktKode);

  const losAvklaringsbehov = (values: BeregningFormValues) => {
    setSubmitting(true);
    submitCallback(transformFields(values, formName));
  };
  const formMethods = useForm<BeregningFormValues>({
    defaultValues:
      formData && formName in formData
        ? formData
        : buildFormInitialValues(beregningsgrunnlagForAksjonspunkt, vilkår, formName, aksjonspunktKode),
  });

  const resetForm = () => {
    formMethods.reset(buildFormInitialValues(beregningsgrunnlagForAksjonspunkt, vilkår, formName, aksjonspunktKode));
  };

  const totaltAntallAvklaringsbehov = beregningsgrunnlagForAksjonspunkt.reduce(
    (sum, bg) => sum + bg.avklaringsbehov.length,
    0,
  );

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

  const aktivtStp = aktivtBeregningsgrunnlag.vilkårsperiodeFom;

  return (
    <RhfForm formMethods={formMethods} onSubmit={values => losAvklaringsbehov(values)} setDataOnUnmount={setFormData}>
      {fields.map((field, index) => {
        const { beregningsgrunnlagPeriode, avklaringsbehov, vilkårsperiodeFom, aktivitetStatus } =
          beregningsgrunnlagForAksjonspunkt[index];
        const aksjonspunktForGrunnlag = avklaringsbehov.find(medAPKode(aksjonspunktKode));
        const skalValideres = utledSkalValideres(vilkår, vilkårsperiodeFom);

        if (!aksjonspunktForGrunnlag) {
          return null;
        }

        return (
          <div key={field.id} style={{ display: vilkårsperiodeFom === aktivtStp ? 'block' : 'none' }}>
            <AksjonspunktBoks
              tittel={finnAPTittel(aksjonspunktKode, aktivitetStatus ?? [])}
              beskrivelse={finnAPBeskrivelse(aksjonspunktKode, beregningsgrunnlagPeriode)}
              aksjonspunkt={aksjonspunktForGrunnlag}
            >
              <VStack gap="space-16" maxWidth="800px">
                {ÅTTE_TRETTI_AKSJONSPUNKTER.has(aksjonspunktKode) && (
                  <ArbeidstakerEllerFrilansContainer
                    kodeverkSamling={kodeverkSamling}
                    beregningsgrunnlagPeriode={beregningsgrunnlagPeriode}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    readOnly={readOnly}
                    fieldIndex={index}
                    formName={formName}
                    avklaringsbehov={aksjonspunktForGrunnlag}
                    skalValideres={skalValideres}
                  />
                )}
                {ÅTTE_TRETTIFEM_AKSJONSPUNKTER.has(aksjonspunktKode) && (
                  <SelvstendigNæringsdrivendeContainer
                    readOnly={readOnly}
                    beregningsgrunnlagPeriode={beregningsgrunnlagPeriode}
                    fieldIndex={index}
                    formName={formName}
                    aksjonspunkt={aksjonspunktForGrunnlag}
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
  aksjonspunktKode: AksjonspunktKode,
): BeregningFormValues => ({
  [formName]: beregningsgrunnlag.map(bg => {
    const vilkårsperiode = finnVilkårperiode(vilkår, bg.vilkårsperiodeFom)!;
    const avklaringsbehov = bg.avklaringsbehov.find(medAPKode(aksjonspunktKode));
    const sammenligningsgrunnlag = bg.sammenligningsgrunnlagPrStatus?.find(
      erSammenligningsgrunnlagReleavantForAksjonspunkt(aksjonspunktKode, bg.aktivitetStatus),
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

const transformFields = (values: BeregningFormValues, formName: string) => {
  const fields = values[formName];
  const aksjonspunktLister = fields
    .filter(f => f.erTilVurdering)
    .map(field => ({
      periode: field.periode,
      aksjonspunkter: transformValues(field),
    }));
  return aksjonspunktLister.reduce(grupperPåKode, [] as BeregningAksjonspunktSubmitType[]);
};
