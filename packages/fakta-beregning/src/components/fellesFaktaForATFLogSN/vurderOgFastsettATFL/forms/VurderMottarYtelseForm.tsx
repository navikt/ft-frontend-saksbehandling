import { List, ReadMore } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle, KodeverkType } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  ArbeidstakerUtenIMAndel,
  Beregningsgrunnlag,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  VurderMottarYtelse,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, VurderMottarYtelseValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import KodeverkForPanel from '../../../../typer/kodeverkForPanel';
import createVisningsnavnFakta from '../../../ArbeidsforholdHelper';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import {
  andelsnrMottarYtelseMap,
  finnFrilansFieldName,
  frilansMottarYtelse,
  skalFastsetteInntektATUtenInntektsmelding,
  utledArbeidsforholdFieldName,
} from './VurderMottarYtelseUtils';

const andreFrilansTilfeller = [
  FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
  FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
];

export const mottarYtelseForArbeidMsg = () => 'BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid';

const utledArbeidsforholdUtenIMRadioTekst = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): React.ReactNode => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  let radioNavn;
  if (!agOpplysning) {
    radioNavn = arbeidsforhold.arbeidsforholdType
      ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(
          oat => oat.kode === arbeidsforhold.arbeidsforholdType,
        )?.navn
      : '';
  } else {
    radioNavn = createVisningsnavnFakta(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
  }
  return <FormattedMessage id={mottarYtelseForArbeidMsg()} values={{ arbeid: radioNavn }} />;
};

const mottarYtelseArbeidsforholdRadioAndInputs = (
  andel: ArbeidstakerUtenIMAndel,
  readOnly: boolean,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aktivtBeregningsgrunnlagIndeks: number,
  intl: IntlShape,
): React.ReactNode => (
  <div>
    <RadioGroupPanel
      label={
        <>
          {utledArbeidsforholdUtenIMRadioTekst(andel.arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List>
              <List.Item>
                {`Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være
                feilregistreringer fra andre systemer og du skal da velge "nei".`}
              </List.Item>
              <List.Item>
                For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på
                utbetalinger i Modia eller vedtaksbrev i Gosys.
              </List.Item>
            </List>
          </ReadMore>
        </>
      }
      name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderMottarYtelseValues.${utledArbeidsforholdFieldName(
        andel,
      )}`}
      isReadOnly={readOnly}
      radios={[
        { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
        { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }) },
      ]}
      parse={parseStringToBoolean}
      validate={readOnly ? [] : [required]}
    />
  </div>
);

export const frilansMedAndreFrilanstilfeller = () =>
  'BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans';
export const frilansUtenAndreFrilanstilfeller = () => 'BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans';

const finnFrilansTekstKode = tilfeller => {
  if (tilfeller.some(tilfelle => andreFrilansTilfeller.includes(tilfelle))) {
    return frilansMedAndreFrilanstilfeller();
  }
  return frilansUtenAndreFrilanstilfeller();
};

const erATFLSammeOrg = (tilfeller: string[]) =>
  tilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

type OwnProps = {
  readOnly: boolean;
  tilfeller: string[];
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektVerdier: InntektTransformed[],
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
    fastsatteAndelsnr: number[],
  ) => FaktaBeregningTransformedValues;
  buildInitialValues: (vurderMottarYtelse?: VurderMottarYtelse, tilfeller?: string[]) => VurderMottarYtelseValues;
}

/**
 * VurderMottarYtelseForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_MOTTAR_YTELSE som ber
 * bruker vurder om bruker har mottatt ytelse for en eller flere aktiviteter.
 */
const VurderMottarYtelseForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  beregningsgrunnlag,
  tilfeller,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const vurderMottarYtelse = beregningsgrunnlag.faktaOmBeregning
    ? beregningsgrunnlag.faktaOmBeregning.vurderMottarYtelse
    : undefined;
  const erFrilans = vurderMottarYtelse && vurderMottarYtelse.erFrilans;
  const arbeidsforholdUtenIM =
    vurderMottarYtelse && vurderMottarYtelse.arbeidstakerAndelerUtenIM
      ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
      : [];
  const intl = useIntl();

  return (
    <div>
      {erFrilans && !erATFLSammeOrg(tilfeller) && (
        <div>
          <RadioGroupPanel
            label={
              <>
                <FormattedMessage id={finnFrilansTekstKode(tilfeller)} />
                <ReadMore
                  size="small"
                  header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
                >
                  <List>
                    <List.Item>
                      Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være
                      feilregistreringer fra andre systemer og du skal da velge “nei”.
                    </List.Item>
                    <List.Item>
                      For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på
                      utbetalinger i Modia eller vedtaksbrev i Gosys.
                    </List.Item>
                  </List>
                </ReadMore>
              </>
            }
            name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${finnFrilansFieldName()}`}
            isReadOnly={readOnly}
            radios={[
              {
                value: 'true',
                label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes' }),
              },
              {
                value: 'false',
                label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }),
              },
            ]}
            parse={parseStringToBoolean}
            validate={readOnly ? [] : [required]}
          />
        </div>
      )}
      {arbeidsforholdUtenIM.map((andel, index) => (
        <React.Fragment key={utledArbeidsforholdFieldName(andel)}>
          {index > 0 && <VerticalSpacer twentyPx />}
          {mottarYtelseArbeidsforholdRadioAndInputs(
            andel,
            readOnly,
            kodeverkSamling,
            arbeidsgiverOpplysningerPerId,
            beregningsgrunnlagIndeks,
            intl,
          )}
        </React.Fragment>
      ))}
      {erATFLSammeOrg(tilfeller) && arbeidsforholdUtenIM.length > 0 && <VerticalSpacer thirtyTwoPx />}
    </div>
  );
};

const transformValuesArbeidstakerUtenIM = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
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
    const listeMedFastsatteMaanedsinntekter = [];
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, faktaOmBeregning.vurderMottarYtelse, beregningsgrunnlag);
    faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM.forEach(andel => {
      if (mottarYtelseMap[andel.andelsnr] && !fastsatteAndelsnr.includes(andel.andelsnr)) {
        const inntektUtenFormat = inntektVerdier.find(field => field.andelsnr === andel.andelsnr).fastsattBelop;
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
      faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
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
  inntektVerdier: InntektTransformed[],
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
  faktaOmBeregningTilfeller: string[],
): FaktaBeregningTransformedValues => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteInntektFrilans = values.vurderMottarYtelseValues[finnFrilansFieldName()];
  if (skalFastsetteInntektFrilans) {
    const frilansAndel = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel.find(
      andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER,
    );
    if (!fastsatteAndelsnr.includes(frilansAndel.andelsnr) && frilansMottarYtelse(values)) {
      const frilansInntekt = values.frilansInntektValues;
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

const transformValuesMottarYtelse = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  faktaOmBeregningTilfeller: string[],
): FaktaBeregningTransformedValues => {
  const ATAndelerUtenIM = faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM
    ? faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM
    : [];
  faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
  return {
    mottarYtelse: {
      frilansMottarYtelse: values.vurderMottarYtelseValues[finnFrilansFieldName()],
      arbeidstakerUtenIMMottarYtelse: ATAndelerUtenIM.map(andel => ({
        andelsnr: andel.andelsnr,
        mottarYtelse: values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)],
      })),
    },
  };
};

VurderMottarYtelseForm.buildInitialValues = (
  vurderMottarYtelse?: VurderMottarYtelse,
  tilfeller?: string[],
): VurderMottarYtelseValues => {
  const initialValues: VurderMottarYtelseValues = {};
  if (!vurderMottarYtelse) {
    return initialValues;
  }
  if (vurderMottarYtelse.erFrilans) {
    initialValues[finnFrilansFieldName()] = erATFLSammeOrg(tilfeller) ? true : vurderMottarYtelse.frilansMottarYtelse;
  }

  const ATAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM
    ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
    : [];
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
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const faktaOmBeregningTilfeller = [];
  const aktiveTilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
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

export default VurderMottarYtelseForm;
