import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Label, ReadMore } from '@navikt/ds-react';

import { InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Inntektsforhold } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  TilkommetAktivitetFormValues,
  TilkommetInntektsforholdFieldValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import { getAktivitetNavnFraField } from './TilkommetAktivitetUtils';

import styles from './tilkommetAktivitet.module.css';

export const inntektStørreEnn0 = (inntekt: number) =>
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

export const getInntektsforholdIdentifikator = (inntektsforhold: Inntektsforhold | undefined): string => {
  if (!inntektsforhold) {
    return '';
  }
  let result = inntektsforhold.aktivitetStatus;
  if (inntektsforhold.arbeidsgiverId) {
    result += inntektsforhold.arbeidsgiverId;
  }
  if (inntektsforhold.arbeidsforholdId) {
    result += inntektsforhold.arbeidsforholdId;
  }
  return result;
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
        return <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid" values={{ br: <br /> }} />;
      case AktivitetStatus.FRILANSER:
        return <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans" values={{ br: <br /> }} />;
      case AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
        return <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMerNæring" />;
      default:
        return <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid" />;
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
    <>
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
        <>
          <VerticalSpacer sixteenPx />
          <Alert size="small" variant="info">
            {intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Alert' })}
          </Alert>
        </>
      )}
      {skalRedusereValg && (
        <>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Fastsett" />
          </Label>
          <ReadMore header={<FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMer" />}>
            {lagHjelpetekst()}
          </ReadMore>
          <VerticalSpacer eightPx />
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
    </>
  );
};
