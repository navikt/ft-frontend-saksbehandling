import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Label, ReadMore, VStack } from '@navikt/ds-react';

import { InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  TilkommetAktivitetFormValues,
  TilkommetInntektsforholdFieldValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import { getAktivitetNavnFraField } from './TilkommetAktivitetUtils';

import styles from './tilkommetAktivitet.module.css';

const inntektStørreEnn0 = (inntekt: number) =>
  removeSpacesFromNumber(inntekt) > 0
    ? null
    : `Du kan ikke registrere 0,- i inntekt, da dette ikke vil medføre gradering mot inntekt. 
       Hvis arbeidsforholdet ikke medfører inntekter enda, men kanskje vil det senere, velger du nei. 
       Informer også bruker om at de må melde fra hvis de begynner å jobbe for denne arbeidsgiveren.`;

type Props = {
  formName: string;
  formFieldIndex: number;
  periodeFieldIndex: number;
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  inntektsforholdFieldIndex: number;
  field: TilkommetInntektsforholdFieldValues;
};

export const TilkommetInntektsforholdField = ({
  formName,
  formFieldIndex,
  periodeFieldIndex,
  readOnly,
  inntektsforholdFieldIndex,
  field,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const formMethods = useFormContext<TilkommetAktivitetFormValues>();
  const intl = useIntl();
  const skalRedusereValg = formMethods.watch(
    `${formName}.${formFieldIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${inntektsforholdFieldIndex}.skalRedusereUtbetaling`,
  );

  const lagHjelpetekst = (): ReactElement => {
    switch (field.aktivitetStatus) {
      case AktivitetStatus.ARBEIDSTAKER:
        return (
          <>
            Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid».
            Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. <br />
            <br />
            Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville
            hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.
            <br />
            <br /> Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved
            varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be
            om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.
            <br />
            <br /> Husk å begrunne fastsatt inntekt for alle periodene.
          </>
        );
      case AktivitetStatus.FRILANSER:
        return (
          <>
            Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid».
            Dette vurderes helhetlig ut fra opplysninger fra a-inntekt eller fra bruker selv.
            <br />
            <br />
            Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville
            hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.
            <br />
            <br />
            Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende
            inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om
            arbeidskontrakt eller be bruker forklare hva som er avtalt.
            <br />
            <br />
            Husk å begrunne fastsatt inntekt for alle periodene.
          </>
        );
      case AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
        return (
          <>
            Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid».
            Bruk som hovedregel opplysninger fra søknaden.
            <br />
            <br />
            Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Du kan for eksempel be om
            dokumentasjon på foreløpig resultatregnskap, innbetalt forskuddsskatt og lignende.
            <br />
            <br />
            Husk å begrunne fastsatt inntekt for alle periodene.
          </>
        );
      default:
        return (
          <>
            Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid».
            Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. <br />
            <br />
            Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville
            hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.
            <br />
            <br /> Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved
            varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be
            om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.
            <br />
            <br /> Husk å begrunne fastsatt inntekt for alle periodene.
          </>
        );
    }
  };

  const getRadioGroupLabel = (): string => {
    if (field.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
      return intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring' });
    }
    if (field.aktivitetStatus === AktivitetStatus.FRILANSER) {
      return intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans' });
    }
    return intl.formatMessage(
      { id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid' },
      { arbeidsforhold: getAktivitetNavnFraField(field, arbeidsgiverOpplysningerPerId) },
    );
  };

  return (
    <VStack gap="4">
      <RadioGroupPanel
        label={getRadioGroupLabel()}
        name={`${formName}.${formFieldIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${inntektsforholdFieldIndex}.skalRedusereUtbetaling`}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' }) },
        ]}
        isReadOnly={readOnly}
        validate={[required]}
        isTrueOrFalseSelection
      />
      {skalRedusereValg === false && (
        <Alert size="small" variant="info">
          {intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Alert' })}
        </Alert>
      )}
      {skalRedusereValg && (
        <>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Fastsett" />
            </Label>
            <ReadMore header={<FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMer" />}>
              {lagHjelpetekst()}
            </ReadMore>
          </VStack>
          <div className={styles.bruttoInntektContainer}>
            <InputField
              name={`${formName}.${formFieldIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${inntektsforholdFieldIndex}.bruttoInntektPrÅr`}
              label="Fastsett årsinntekt"
              hideLabel
              readOnly={readOnly}
              htmlSize={9}
              parse={parseCurrencyInput}
              validate={[required, maxValueFormatted(178956970), inntektStørreEnn0]}
            />
            <span className={styles.bruttoInntektCurrency}>kr</span>
          </div>
        </>
      )}
    </VStack>
  );
};
