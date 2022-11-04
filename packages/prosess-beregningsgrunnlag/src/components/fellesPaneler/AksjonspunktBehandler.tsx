import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { Heading } from '@navikt/ds-react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';

import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus, PeriodeAarsak, SammenligningType } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  SammenligningsgrunlagProp,
  Vilkarperiode,
} from '@navikt/ft-types';

import { Vilkar } from '@navikt/ft-types/index';
import { useFieldArray, useForm } from 'react-hook-form';
import BeregningsgrunnlagPanel from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import AksjonspunktBehandlerTB from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerSNEllerMidlInakt from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSNEllerMidlertidigInaktiv';
import ProsessStegSubmitButton from '../../felles/ProsessStegSubmitButton';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import styles from './aksjonspunktBehandler.less';
import { BeregningAksjonspunktSubmitType, GruppertAksjonspunktData } from '../../types/interface/BeregningsgrunnlagAP';
import BeregningFormValues from '../../types/BeregningFormValues';
import { AksjonspunktDataValues, BeregningsgrunnlagValues } from '../../types/BeregningsgrunnlagAksjonspunktTsType';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunktTsType';
import { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';
import LovParagraf, { mapAvklaringsbehovTilLovparagraf, mapSammenligningtypeTilLovparagraf } from './lovparagraf';
import FastsettSNNyIArbeid from '../selvstendigNaeringsdrivende/FastsettSNNyIArbeid';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

const defaultFormName = 'BeregningForm';

const gjelderForParagraf = (a: BeregningAvklaringsbehov, lovparagraf: LovParagraf) =>
  mapAvklaringsbehovTilLovparagraf(a) === lovparagraf;

const harAvklaringsbehovForLovparagraf = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  lovparagraf: LovParagraf,
): boolean => !!avklaringsbehov.find(a => gjelderForParagraf(a, lovparagraf));

const finnFormName = (lovparagraf: LovParagraf): string => `${defaultFormName}_${lovparagraf}`;

const finnesAndelÅFastsetteMedStatus = (allePerioder: BeregningsgrunnlagPeriodeProp[], status: string): boolean => {
  if (!allePerioder || allePerioder.length < 1) {
    return false;
  }
  const andeler = allePerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel
    : [];
  return andeler?.some(a => a.aktivitetStatus === status && a.skalFastsetteGrunnlag);
};

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel : [];
  }
  return [];
};

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean =>
  allePerioder.some(
    ({ periodeAarsaker }) =>
      periodeAarsaker && periodeAarsaker.some(kode => kode === PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET),
  );

const finnVilkårperiode = (vilkår: Vilkar, vilkårsperiodeFom: string): Vilkarperiode =>
  // @ts-ignore
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

const buildInitialValues = (
  beregningsgrunnlag: BeregningsgrunnlagProp,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp,
): AksjonspunktDataValues => {
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return {};
  }
  const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const alleAndelerIForstePeriode =
    beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const arbeidstakerAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
  );
  const frilanserAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER,
  );
  const snEllerMidlertidigInaktivAndeler = alleAndelerIForstePeriode.filter(
    andel =>
      andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
      andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  const valuesATFL = {
    ...BeregningsgrunnlagPanel.buildInitialValues(beregningsgrunnlag.avklaringsbehov),
    ...AksjonspunktBehandlerTB.buildInitialValues(allePerioder),
    ...AksjonspunktBehandlerFL.buildInitialValues(frilanserAndeler),
    ...GrunnlagForAarsinntektPanelAT.buildInitialValues(arbeidstakerAndeler),
  };
  const valuesSNEllerMidlInaktiv = {
    ...AksjonspunktBehandlerSNEllerMidlInakt.buildInitialValues(
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
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkarperiode,
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
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkår: Vilkar,
  formName: string,
  lovparagraf: LovParagraf,
): BeregningFormValues => ({
  [formName]: beregningsgrunnlag.map(bg =>
    buildFieldInitialValue(
      bg,
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
      finnVilkårperiode(vilkår, bg.vilkårsperiodeFom),
      bg.avklaringsbehov.find(a => gjelderForParagraf(a, lovparagraf)),
      bg.sammenligningsgrunnlagPrStatus?.find(
        s => mapSammenligningtypeTilLovparagraf(s.sammenligningsgrunnlagType, bg.aktivitetStatus) === lovparagraf,
      ),
    ),
  ),
});

const settOppKomponenterForNæring = (
  readOnly: boolean,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  avklaringsbehov: BeregningAvklaringsbehov,
  fieldIndex: number,
  formName: string,
): ReactElement | null => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus && andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const erNyArbLivet = snAndel && snAndel.erNyIArbeidslivet;
  const erVarigEndring =
    avklaringsbehov.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON ||
    (snAndel && snAndel.næringer && snAndel.næringer.some(naring => naring.erVarigEndret === true));
  const erNyoppstartet = snAndel && snAndel.næringer && snAndel.næringer.some(naring => naring.erNyoppstartet === true);
  if (!erNyArbLivet && !erNyoppstartet && !erVarigEndring) {
    return null;
  }
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium" className={beregningStyles.avsnittOverskrift}>
            {erNyArbLivet && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.NyIArbeidslivet" />
            )}
            {erNyoppstartet && !erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.Nyoppstartet" />
            )}
            {!erNyArbLivet && !erNyoppstartet && erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.VarigEndring" />
            )}
            {!erNyArbLivet && erNyoppstartet && erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
            )}
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <AksjonspunktBehandlerSNEllerMidlInakt
        readOnly={readOnly}
        avklaringsbehov={avklaringsbehov}
        erNyArbLivet={erNyArbLivet}
        erVarigEndring={erVarigEndring}
        erNyoppstartet={erNyoppstartet}
        fieldIndex={fieldIndex}
        formName={formName}
      />
    </>
  );
};

const settOppKomponenterForATFL = (
  avklaringsbehov: BeregningAvklaringsbehov,
  alleKodeverk: AlleKodeverk,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  readOnly: boolean,
  intl: IntlShape,
  fieldIndex: number,
  formName: string,
): ReactElement => {
  const erTidsbegrenset = harPerioderMedAvsluttedeArbeidsforhold(allePerioder);
  const visFL = finnesAndelÅFastsetteMedStatus(allePerioder, AktivitetStatus.FRILANSER);
  const visAT = finnesAndelÅFastsetteMedStatus(allePerioder, AktivitetStatus.ARBEIDSTAKER);
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {erTidsbegrenset && (
        <AksjonspunktBehandlerTB
          readOnly={readOnly}
          formName={formName}
          allePerioder={allePerioder}
          alleKodeverk={alleKodeverk}
          avklaringsbehov={avklaringsbehov}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
        />
      )}
      {!erTidsbegrenset && visAT && (
        <AksjonspunktBehandlerAT
          readOnly={readOnly}
          alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(allePerioder)}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
          formName={formName}
        />
      )}
      {visFL && <AksjonspunktBehandlerFL readOnly={readOnly} fieldIndex={fieldIndex} formName={formName} />}
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <TextAreaField
            name={`${formName}.${fieldIndex}.ATFLVurdering`}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            className={styles.textAreaStyle}
            description={intl.formatMessage({
              id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder',
            })}
            parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
          />
        </FlexColumn>
      </FlexRow>
    </>
  );
};

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

const harAksjonspunkt = (aksjonspunktKode: string, gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  gjeldendeAvklaringsbehov !== undefined &&
  gjeldendeAvklaringsbehov !== null &&
  gjeldendeAvklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

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
  const alleAndelerIFørstePeriode = allePerioder[0].beregningsgrunnlagPrStatusOgAndel || [];
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
        aksjonspunktData: BeregningsgrunnlagPanel.transformATFLValues(values as ATFLValues, alleAndelerIFørstePeriode),
      },
    ];
  }
  if (
    harAksjonspunkt(
      VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      values.gjeldendeAvklaringsbehov,
    )
  ) {
    return [
      {
        kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlInakt.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (harAksjonspunkt(VURDER_VARIG_ENDRET_ARBEIDSSITUASJON, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlInakt.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
        aksjonspunktData: AksjonspunktBehandlerSNEllerMidlInakt.transformValues(
          values as VurderOgFastsettValues,
          values.gjeldendeAvklaringsbehov,
        ),
      },
    ];
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, values.gjeldendeAvklaringsbehov)) {
    return [
      {
        kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        aksjonspunktData: BeregningsgrunnlagPanel.transformATFLTidsbegrensetValues(
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

type OwnProps = {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkar;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
  lovparagraf: LovParagraf;
  finnesFormSomSubmittes: boolean;
  setSubmitting: (toggle: boolean) => void;
};

const AksjonspunktBehandler: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  alleKodeverk,
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
}) => {
  const intl = useIntl();

  const losAvklaringsbehov = (values: BeregningFormValues, lp: LovParagraf) => {
    setSubmitting(true);
    submitCallback(transformFields(values, lp));
  };

  const bgSomSkalVurderes = beregningsgrunnlagListe.filter(bg =>
    harAvklaringsbehovForLovparagraf(bg.avklaringsbehov, lovparagraf),
  );
  const formName = finnFormName(lovparagraf);
  const formMethods = useForm<BeregningFormValues>({
    defaultValues:
      formData ||
      buildFormInitialValues(
        bgSomSkalVurderes,
        alleKodeverk,
        arbeidsgiverOpplysningerPerId,
        vilkår,
        formName,
        lovparagraf,
      ),
  });

  const {
    formState: { dirtyFields, isSubmitted },
    control,
    trigger,
  } = formMethods;

  const { fields } = useFieldArray({
    name: formName,
    control,
  });

  useEffect(() => {
    if (isSubmitted && dirtyFields[formName]?.[aktivIndex]) {
      trigger();
    }
  }, [aktivIndex]);

  const submittKnapp = (
    <FlexRow>
      <FlexColumn>
        <ProsessStegSubmitButton
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={formMethods.formState.isDirty}
          isSubmitting={finnesFormSomSubmittes}
        />
      </FlexColumn>
    </FlexRow>
  );

  const formKomponent = (index: number, avklaringsbehovForBG: BeregningAvklaringsbehov[]): ReactElement | null => {
    const ab = avklaringsbehovForBG.find(a => gjelderForParagraf(a, lovparagraf));
    if (lovparagraf === LovParagraf.ÅTTE_TRETTI && ab) {
      return settOppKomponenterForATFL(
        ab,
        alleKodeverk,
        bgSomSkalVurderes[index].beregningsgrunnlagPeriode,
        arbeidsgiverOpplysningerPerId,
        readOnly,
        intl,
        index,
        formName,
      );
    }
    if (lovparagraf === LovParagraf.ÅTTE_TRETTIFEM && ab) {
      return settOppKomponenterForNæring(
        readOnly,
        bgSomSkalVurderes[index].beregningsgrunnlagPeriode,
        ab,
        index,
        formName,
      );
    }
    return null;
  };

  const aktivtStp = beregningsgrunnlagListe[aktivIndex].vilkårsperiodeFom;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={values => losAvklaringsbehov(values, lovparagraf)}
      setDataOnUnmount={setFormData}
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{ display: bgSomSkalVurderes[index].vilkårsperiodeFom === aktivtStp ? 'block' : 'none' }}
        >
          <div className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
            {formKomponent(index, bgSomSkalVurderes[index].avklaringsbehov)}
            <VerticalSpacer sixteenPx />
            {submittKnapp}
            <VerticalSpacer sixteenPx />
          </div>
        </div>
      ))}
    </Form>
  );
};

export default AksjonspunktBehandler;
