import React, { FC, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ReadMore, Label, Alert } from '@navikt/ds-react';
import { formHooks, InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Inntektsforhold } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.less';
import { getAktivitetNavn } from './TilkommetAktivitetUtils';

type TilkommetInntektsforholdFieldType = {
  formName: string;
  index: number;
  readOnly: boolean;
  periodeIdentifikator: string;
  inntektsforholdTilVurdering: Inntektsforhold;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const lagHjelpetekst = (inntektsforhold: Inntektsforhold): ReactElement => {
  switch (inntektsforhold.aktivitetStatus) {
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
  index,
  readOnly,
  inntektsforholdTilVurdering,
  periodeIdentifikator,
  arbeidsgiverOpplysningerPerId,
}) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();
  const intl = useIntl();

  const { skalRedusereUtbetaling } = formMethods.watch(`${formName}.${index}`)[periodeIdentifikator][
    getInntektsforholdIdentifikator(inntektsforholdTilVurdering)
  ];

  const getRadioGroupLabel = (inntektsforhold: Inntektsforhold) => {
    if (inntektsforhold.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
      return intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring' });
    }
    if (inntektsforhold.aktivitetStatus === AktivitetStatus.FRILANSER) {
      return intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans' });
    }
    return intl.formatMessage(
      { id: 'BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid' },
      { arbeidsforhold: getAktivitetNavn(inntektsforhold, arbeidsgiverOpplysningerPerId) },
    );
  };

  return (
    <>
      <RadioGroupPanel
        label={getRadioGroupLabel(inntektsforholdTilVurdering)}
        name={`${formName}.${index}.${periodeIdentifikator}.${getInntektsforholdIdentifikator(
          inntektsforholdTilVurdering,
        )}.skalRedusereUtbetaling`}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' }) },
        ]}
        isReadOnly={readOnly}
        validate={[required]}
        isTrueOrFalseSelection
      />
      {skalRedusereUtbetaling === false && (
        <Alert size="small" variant="info">
          {intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Alert' })}
        </Alert>
      )}
      {skalRedusereUtbetaling && (
        <>
          <VerticalSpacer sixteenPx />
          <Label>
            <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Fastsett" />
          </Label>
          <ReadMore header={<FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.LesMer" />}>
            {lagHjelpetekst(inntektsforholdTilVurdering)}
          </ReadMore>
          <VerticalSpacer eightPx />
          <div className={styles.bruttoInntektContainer}>
            <InputField
              name={`${formName}.${index}.${periodeIdentifikator}.${getInntektsforholdIdentifikator(
                inntektsforholdTilVurdering,
              )}.bruttoInntektPrÅr`}
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
