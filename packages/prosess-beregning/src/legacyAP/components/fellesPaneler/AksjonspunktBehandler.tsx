import { type ReactElement, useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

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
import { hasAksjonspunkt, isAksjonspunktOpen } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type { Vilkår, Vilkårperiode } from '../../../types/Vilkår';
import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { SammenligningType } from '../../kodeverk/sammenligningType';
import type { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import { type BeregningFormValues, finnFormName, type FormNameType } from '../../types/BeregningFormValues';
import type { AksjonspunktDataValues, BeregningsgrunnlagValues } from '../../types/BeregningsgrunnlagAksjonspunkt';
import type { BeregningAksjonspunktSubmitType, GruppertAksjonspunktData } from '../../types/BeregningsgrunnlagAP';
import type { VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';
import { AksjonspunktBehandlerTidsbegrenset } from '../arbeidstaker/AksjonspunktBehandlerTB';
import { GrunnlagForAarsinntektPanelAT } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { AksjonspunktBehandlerFL } from '../frilanser/AksjonspunktBehandlerFL';
import { ProsessStegSubmitButton } from '../ProsessStegSubmitButton';
import { AksjonspunktsbehandlerSNEllerMidlertidigInaktiv } from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSNEllerMidlertidigInaktiv';
import { FastsettSNNyIArbeid } from '../selvstendigNaeringsdrivende/FastsettSNNyIArbeid';
import { finnAPBeskrivelse, finnAPTittel } from './aksjonspunktHeaderUtils';
import { ArbeidstakerEllerFrilansContainer } from './ArbeidstakerEllerFrilansContainer';
import { LovParagraf, mapAvklaringsbehovTilLovparagraf, mapSammenligningtypeTilLovparagraf } from './lovparagrafUtils';
import { SelvstendigNæringsdrivendeContainer } from './SelvstendigNæringsdrivendeContainer';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = AksjonspunktKode;

const gjelderForParagraf = (a: BeregningAvklaringsbehov, lovparagraf: LovParagraf) =>
  mapAvklaringsbehovTilLovparagraf(a) === lovparagraf;

const harAvklaringsbehovForLovparagraf = (avklaringsbehov: BeregningAvklaringsbehov[], lovparagraf: LovParagraf) =>
  !!avklaringsbehov.find(a => gjelderForParagraf(a, lovparagraf));

const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string): Vilkårperiode =>
  // @ts-expect-error Fiks
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

const buildInitialValues = (
  beregningsgrunnlag: BeregningsgrunnlagProp,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp,
): AksjonspunktDataValues => {
  if (!beregningsgrunnlag?.beregningsgrunnlagPeriode) {
    return {};
  }
  const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const alleAndelerIForstePeriode =
    beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel ?? [];
  const arbeidstakerAndeler = alleAndelerIForstePeriode.filter(andel => andel.aktivitetStatus === 'AT');
  const frilanserAndeler = alleAndelerIForstePeriode.filter(andel => andel.aktivitetStatus === 'FL');
  const snEllerMidlertidigInaktivAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === 'SN' || andel.aktivitetStatus === 'BA',
  );
  const valuesATFL = {
    ...ArbeidstakerEllerFrilansContainer.buildInitialValues(beregningsgrunnlag.avklaringsbehov),
    ...AksjonspunktBehandlerTidsbegrenset.buildInitialValues(allePerioder),
    ...AksjonspunktBehandlerFL.buildInitialValues(frilanserAndeler),
    ...GrunnlagForAarsinntektPanelAT.buildInitialValues(arbeidstakerAndeler),
  };
  const valuesSNEllerMidlInaktiv = {
    ...AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.buildInitialValues(
      snEllerMidlertidigInaktivAndeler,
      beregningsgrunnlag.avklaringsbehov,
    ),
  };
  if (!sammenligningsgrunnlag) {
    return {
      ...FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet(
        snEllerMidlertidigInaktivAndeler,
        beregningsgrunnlag.avklaringsbehov,
      ),
    };
  }
  if (sammenligningsgrunnlag.sammenligningsgrunnlagType === SammenligningType.ATFLSN) {
    return {
      ...valuesATFL,
      ...valuesSNEllerMidlInaktiv,
    };
  }
  if (sammenligningsgrunnlag.sammenligningsgrunnlagType === SammenligningType.AT_FL) {
    return {
      ...valuesATFL,
    };
  }
  if (sammenligningsgrunnlag.sammenligningsgrunnlagType === SammenligningType.SN) {
    return {
      ...valuesSNEllerMidlInaktiv,
    };
  }
  if (sammenligningsgrunnlag.sammenligningsgrunnlagType === SammenligningType.MIDLERTIDIG_INAKTIV) {
    return {
      ...valuesSNEllerMidlInaktiv,
    };
  }
  return {};
};

const buildFieldInitialValue = (
  beregningsgrunnlag: Beregningsgrunnlag,
  vilkårsperiode: Vilkårperiode,
  avklaringsbehov?: BeregningAvklaringsbehov,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp,
): BeregningsgrunnlagValues => {
  let initialValues = {};
  if (avklaringsbehov) {
    initialValues = buildInitialValues(beregningsgrunnlag, sammenligningsgrunnlag);
  }
  return {
    ...initialValues,
    periode: vilkårsperiode.periode,
    erTilVurdering: vilkårsperiode.vurderesIBehandlingen && !vilkårsperiode.erForlengelse,
    gjeldendeAvklaringsbehov: avklaringsbehov ? [avklaringsbehov] : [],
    skjæringstidspunkt: beregningsgrunnlag.skjaeringstidspunktBeregning,
    allePerioder: beregningsgrunnlag.beregningsgrunnlagPeriode,
  };
};

const buildFormInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag[],
  vilkår: Vilkår,
  formName: FormNameType,
  lovparagraf: LovParagraf,
): BeregningFormValues => ({
  [formName]: beregningsgrunnlag.map(bg =>
    buildFieldInitialValue(
      bg,
      finnVilkårperiode(vilkår, bg.vilkårsperiodeFom),
      bg.avklaringsbehov.find(a => gjelderForParagraf(a, lovparagraf)),
      bg.sammenligningsgrunnlagPrStatus?.find(
        s => mapSammenligningtypeTilLovparagraf(s.sammenligningsgrunnlagType, bg.aktivitetStatus) === lovparagraf,
      ),
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
        aksjonspunktData: AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.transformValues(
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
        aksjonspunktData: AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.transformValues(
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
        aksjonspunktData: AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.transformValues(
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

interface Props {
  readOnly: boolean;
  kodeverkSamling: KodeverkForPanel;
  readOnlySubmitButton: boolean;
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
  readOnlySubmitButton,
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
  const intl = useIntl();

  const utledSkalValideres = (beregningsgrunnlag: Beregningsgrunnlag) => {
    const periode = finnVilkårperiode(vilkår, beregningsgrunnlag.vilkårsperiodeFom);
    return periode.vurderesIBehandlingen && !periode.erForlengelse;
  };

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

  const {
    formState: { dirtyFields },
    control,
    trigger,
  } = formMethods;

  const { fields } = useFieldArray({
    name: formName,
    control,
  });

  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (finnesFormSomSubmittes && dirtyFields[formName]?.[aktivIndex]) {
      trigger();
    }
    const aktivtBG = beregningsgrunnlagListe[aktivIndex];
    if (aktivtBG.avklaringsbehov.some(ak => gjelderForParagraf(ak, lovparagraf) && isAksjonspunktOpen(ak))) {
      panelRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [aktivIndex]);

  const finnAvklaringsbehov = (
    avklaringsbehovForBG: BeregningAvklaringsbehov[],
  ): BeregningAvklaringsbehov | undefined => avklaringsbehovForBG.find(a => gjelderForParagraf(a, lovparagraf));

  const formKomponent = (index: number, avklaringsbehovForBG: BeregningAvklaringsbehov[]): ReactElement | null => {
    const skalValideres = utledSkalValideres(bgSomSkalVurderes[index]);
    const avklaringsbehov = finnAvklaringsbehov(avklaringsbehovForBG);
    if (lovparagraf === LovParagraf.ÅTTE_TRETTI && avklaringsbehov) {
      return (
        <ArbeidstakerEllerFrilansContainer
          kodeverkSamling={kodeverkSamling}
          allePerioder={bgSomSkalVurderes[index].beregningsgrunnlagPeriode}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={readOnly}
          intl={intl}
          fieldIndex={index}
          formName={formName}
          avklaringsbehov={avklaringsbehov}
          skalValideres={skalValideres}
        />
      );
    }
    if (lovparagraf === LovParagraf.ÅTTE_TRETTIFEM && avklaringsbehov) {
      return (
        <SelvstendigNæringsdrivendeContainer
          readOnly={readOnly}
          allePerioder={bgSomSkalVurderes[index].beregningsgrunnlagPeriode}
          fieldIndex={index}
          formName={formName}
          avklaringsbehov={avklaringsbehov}
          skalValideres={skalValideres}
        />
      );
    }
    return null;
  };

  const aktivtStp = beregningsgrunnlagListe[aktivIndex].vilkårsperiodeFom;

  return (
    <div ref={panelRef}>
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => losAvklaringsbehov(values, lovparagraf)}
        setDataOnUnmount={setFormData}
      >
        {fields.map((field, index) => {
          const avklaringsbehov = finnAvklaringsbehov(bgSomSkalVurderes[index].avklaringsbehov);
          if (!avklaringsbehov) {
            return null;
          }
          const beregningsgrunnlag = bgSomSkalVurderes[index];

          return (
            <div
              key={field.id}
              style={{ display: beregningsgrunnlag.vilkårsperiodeFom === aktivtStp ? 'block' : 'none' }}
            >
              <AksjonspunktBoks
                tittel={<FormattedMessage id={finnAPTittel(avklaringsbehov, beregningsgrunnlag)} />}
                beskrivelse={<FormattedMessage id={finnAPBeskrivelse(avklaringsbehov, beregningsgrunnlag)} />}
                aksjonspunkt={avklaringsbehov}
              >
                <VStack gap="space-16">
                  {formKomponent(index, beregningsgrunnlag.avklaringsbehov)}
                  <div>
                    <ProsessStegSubmitButton
                      isReadOnly={readOnly}
                      isSubmittable={!readOnlySubmitButton}
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
    </div>
  );
};
