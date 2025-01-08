import React, { FC, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ReadMore, Label, Alert } from '@navikt/ds-react';
import { InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, Inntektsforhold } from '@navikt/ft-types';
import { useFormContext } from 'react-hook-form';
import {
  TilkommetAktivitetFormValues,
  TilkommetInntektsforholdFieldValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.module.css';
import { getAktivitetNavnFraField } from './TilkommetAktivitetUtils';

type TilkommetInntektsforholdFieldType = {
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

const TilkommetInntektsforholdField: FC<TilkommetInntektsforholdFieldType> = ({
  formName,
  formFieldIndex,
  periodeFieldIndex,
  readOnly,
  inntektsforholdFieldIndex,
  field,
  arbeidsgiverOpplysningerPerId,
}) => {
  const formMethods = useFormContext<TilkommetAktivitetFormValues>();
  const intl = useIntl();
  const skalRedusereValg = formMethods.watch(
    `${formName}.${formFieldIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${inntektsforholdFieldIndex}.skalRedusereUtbetaling`,
  );

  const lagHjelpetekst = (): ReactElement<any> => {
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
              className={styles.bruttoInntektInput}
              parse={parseCurrencyInput}
              validate={[required, maxValueFormatted(178956970)]}
            />
            <span className={styles.bruttoInntektCurrency}>kr</span>
          </div>
        </>
      )}
    </>
  );
};
export default TilkommetInntektsforholdField;
