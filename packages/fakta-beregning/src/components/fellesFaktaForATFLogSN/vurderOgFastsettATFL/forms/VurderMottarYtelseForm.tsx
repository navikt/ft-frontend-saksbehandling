import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { List, Radio, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type {
  ArbeidsgiverOpplysningerPerId,
  ArbeidstakerUtenIMAndel,
  Beregningsgrunnlag,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  VurderMottarYtelse,
} from '@navikt/ft-types';
import { formaterArbeidsgiver, removeSpacesFromNumber } from '@navikt/ft-utils';

import { FaktaOmBeregningTilfelle } from '../../../../kodeverk/faktaOmBeregningTilfelle';
import type {
  FaktaOmBeregningAksjonspunktValues,
  VurderMottarYtelseValues,
} from '../../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../../typer/FieldValues';
import type {
  FaktaBeregningTransformedValues,
  FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues,
} from '../../../../typer/interface/BeregningFaktaAP';
import type { KodeverkForPanel } from '../../../../typer/KodeverkForPanel';
import type { VurderFaktaBeregningFormValues } from '../../../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import {
  andelsnrMottarYtelseMap,
  frilansFieldName,
  frilansMottarYtelse,
  skalFastsetteInntektATUtenInntektsmelding,
  utledArbeidsforholdFieldName,
} from './VurderMottarYtelseUtils';

const andreFrilansTilfeller: string[] = [
  FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
  FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
];

const utledArbeidsforholdUtenIMRadioTekst = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): React.ReactNode => {
  const agOpplysning = arbeidsforhold.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]
    : undefined;
  let radioNavn;
  if (!agOpplysning) {
    radioNavn = arbeidsforhold.arbeidsforholdType
      ? kodeverkSamling['OpptjeningAktivitetType'].find(oat => oat.kode === arbeidsforhold.arbeidsforholdType)?.navn
      : '';
  } else {
    radioNavn = formaterArbeidsgiver(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
  }
  return (
    <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid" values={{ arbeid: radioNavn }} />
  );
};

interface MottarProps {
  andel: ArbeidstakerUtenIMAndel;
  readOnly: boolean;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
}

const MottarYtelseArbeidsforholdRadioAndInputs = ({
  andel,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  aktivtBeregningsgrunnlagIndeks,
}: MottarProps): React.ReactNode => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const key = utledArbeidsforholdFieldName(andel);

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderMottarYtelseValues.${key}`}
      control={control}
      legend={
        <VStack gap="space-8">
          {andel.arbeidsforhold &&
            utledArbeidsforholdUtenIMRadioTekst(andel.arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      }
      validate={readOnly ? [] : [required]}
      readOnly={readOnly}
    >
      <Radio value={true} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
      </Radio>
      <Radio value={false} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt" />
      </Radio>
    </RhfRadioGroup>
  );
};

const frilansMedAndreFrilanstilfeller = 'BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans';
const frilansUtenAndreFrilanstilfeller = 'BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans';

const finnFrilansTekstKode = (tilfeller: string[]) => {
  if (tilfeller.some(tilfelle => andreFrilansTilfeller.includes(tilfelle))) {
    return frilansMedAndreFrilanstilfeller;
  }
  return frilansUtenAndreFrilanstilfeller;
};

const erATFLSammeOrg = (tilfeller: string[]) =>
  tilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

interface Props {
  readOnly: boolean;
  tilfeller: string[];
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * VurderMottarYtelseForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_MOTTAR_YTELSE som ber
 * bruker vurder om bruker har mottatt ytelse for en eller flere aktiviteter.
 */
export const VurderMottarYtelseForm = ({
  readOnly,
  beregningsgrunnlag,
  tilfeller,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();

  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const vurderMottarYtelse = beregningsgrunnlag.faktaOmBeregning
    ? beregningsgrunnlag.faktaOmBeregning.vurderMottarYtelse
    : undefined;
  const erFrilans = vurderMottarYtelse && vurderMottarYtelse.erFrilans;
  const arbeidsforholdUtenIM =
    vurderMottarYtelse && vurderMottarYtelse.arbeidstakerAndelerUtenIM
      ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
      : [];

  return (
    <>
      {erFrilans && !erATFLSammeOrg(tilfeller) && (
        <RhfRadioGroup
          name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${frilansFieldName}`}
          control={control}
          legend={
            <VStack gap="space-8">
              <FormattedMessage id={finnFrilansTekstKode(tilfeller)} />
              <ReadMore
                size="small"
                header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
              >
                <List size="small">
                  <List.Item>
                    <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1" />
                  </List.Item>
                  <List.Item>
                    <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2" />
                  </List.Item>
                </List>
              </ReadMore>
            </VStack>
          }
          validate={readOnly ? [] : [required]}
          readOnly={readOnly}
        >
          <Radio value={true} size="small">
            <FormattedMessage id="BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes" />
          </Radio>
          <Radio value={false} size="small">
            <FormattedMessage id="BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt" />
          </Radio>
        </RhfRadioGroup>
      )}
      {arbeidsforholdUtenIM.length > 0 && (
        <VStack gap="space-24">
          {arbeidsforholdUtenIM.map(andel => (
            <MottarYtelseArbeidsforholdRadioAndInputs
              key={andel.andelsnr}
              andel={andel}
              readOnly={readOnly}
              kodeverkSamling={kodeverkSamling}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              aktivtBeregningsgrunnlagIndeks={beregningsgrunnlagIndeks}
            />
          ))}
        </VStack>
      )}
    </>
  );
};

const transformValuesArbeidstakerUtenIM = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[] | null,
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
  faktaOmBeregningTilfeller: string[],
): FaktaBeregningTransformedValues => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, faktaOmBeregning.vurderMottarYtelse);
  if (skalFastsetteAT) {
    const listeMedFastsatteMaanedsinntekter: FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues[] = [];
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, faktaOmBeregning.vurderMottarYtelse, beregningsgrunnlag);
    faktaOmBeregning.vurderMottarYtelse?.arbeidstakerAndelerUtenIM?.forEach(andel => {
      if (andel.andelsnr && mottarYtelseMap[andel.andelsnr] && !fastsatteAndelsnr.includes(andel.andelsnr)) {
        const inntektUtenFormat = inntektVerdier.find(field => field.andelsnr === andel.andelsnr)?.fastsattBelop;
        if (inntektUtenFormat || inntektUtenFormat === 0) {
          listeMedFastsatteMaanedsinntekter.push({
            andelsnr: andel.andelsnr,
            fastsattBeløp: removeSpacesFromNumber(inntektUtenFormat),
          });
          fastsatteAndelsnr.push(andel.andelsnr);
        }
      }
    });
    if (listeMedFastsatteMaanedsinntekter.length > 0) {
      faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
      return {
        fastsattUtenInntektsmelding: { andelListe: listeMedFastsatteMaanedsinntekter },
      };
    }
    return {};
  }
  return {};
};

const transformValuesFrilans = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[] | null,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
  faktaOmBeregningTilfeller: string[],
): FaktaBeregningTransformedValues => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteInntektFrilans =
    values.vurderMottarYtelseValues && values.vurderMottarYtelseValues[frilansFieldName];
  if (skalFastsetteInntektFrilans) {
    const frilansAndel = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.find(
      andel => andel.aktivitetStatus === 'FL',
    );
    if (frilansAndel && !fastsatteAndelsnr.includes(frilansAndel.andelsnr) && frilansMottarYtelse(values)) {
      const frilansInntekt = values.frilansInntektValues;
      if (!frilansInntekt && frilansInntekt !== 0) {
        throw new Error('Har ikke fastsatt påkrevd frilansinntekt');
      }
      fastsatteAndelsnr.push(frilansAndel.andelsnr);
      faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
      return {
        fastsettMaanedsinntektFL: { maanedsinntekt: removeSpacesFromNumber(frilansInntekt.fastsattBelop) },
      };
    }
    return {};
  }
  return {};
};
const krevVerdi = (verdi: number | undefined): number => {
  if (!verdi) {
    throw new Error('Mangler påkrevd verdi for vurderMottarYtelse');
  }
  return verdi;
};
const transformValuesMottarYtelse = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  faktaOmBeregningTilfeller: string[],
): FaktaBeregningTransformedValues => {
  const ATAndelerUtenIM = faktaOmBeregning.vurderMottarYtelse?.arbeidstakerAndelerUtenIM ?? [];
  faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
  return {
    mottarYtelse: {
      frilansMottarYtelse: !!values.vurderMottarYtelseValues && !!values.vurderMottarYtelseValues[frilansFieldName],
      arbeidstakerUtenIMMottarYtelse: ATAndelerUtenIM.map(andel => ({
        andelsnr: krevVerdi(andel.andelsnr),
        mottarYtelse:
          !!values.vurderMottarYtelseValues && !!values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)],
      })),
    },
  };
};

VurderMottarYtelseForm.buildInitialValues = (
  vurderMottarYtelse: VurderMottarYtelse | undefined,
  tilfeller: string[],
): VurderMottarYtelseValues => {
  const initialValues: VurderMottarYtelseValues = {};

  if (vurderMottarYtelse?.erFrilans || erATFLSammeOrg(tilfeller)) {
    initialValues[frilansFieldName] = erATFLSammeOrg(tilfeller) ? true : vurderMottarYtelse?.frilansMottarYtelse;
  }

  const ATAndelerUtenIM = vurderMottarYtelse?.arbeidstakerAndelerUtenIM ?? [];
  if (ATAndelerUtenIM.length < 1) {
    return initialValues;
  }
  ATAndelerUtenIM.forEach(andel => {
    initialValues[utledArbeidsforholdFieldName(andel)] = andel.mottarYtelse;
  });
  return initialValues;
};

VurderMottarYtelseForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[] | null,
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const faktaOmBeregningTilfeller: string[] = [];
  const aktiveTilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ?? [];
  if (!aktiveTilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    return {};
  }
  return {
    ...transformValuesMottarYtelse(values, faktaOmBeregning, faktaOmBeregningTilfeller),
    ...transformValuesArbeidstakerUtenIM(
      values,
      inntektVerdier,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
      faktaOmBeregningTilfeller,
    ),
    ...transformValuesFrilans(values, inntektVerdier, beregningsgrunnlag, fastsatteAndelsnr, faktaOmBeregningTilfeller),
    faktaOmBeregningTilfeller,
  };
};
