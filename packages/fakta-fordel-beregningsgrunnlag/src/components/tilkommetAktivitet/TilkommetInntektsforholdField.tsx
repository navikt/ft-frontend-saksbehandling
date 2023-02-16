import { formHooks, InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Inntektsforhold } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FC } from 'react';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { useIntl } from 'react-intl';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.less';
import { getAktivitetNavn } from './TilkommetAktivitetUtils';

type TilkommetInntektsforholdFieldType = {
  formName: string;
  index: number;
  readOnly: boolean;
  inntektsforholdTilVurdering: Inntektsforhold;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
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
  arbeidsgiverOpplysningerPerId,
}) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();
  const intl = useIntl();

  const { skalRedusereUtbetaling } = formMethods.watch(`${formName}.${index}`)[
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
        name={`${formName}.${index}.${getInntektsforholdIdentifikator(
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

      {skalRedusereUtbetaling && (
        <>
          <VerticalSpacer sixteenPx />
          <div className={styles.bruttoInntektContainer}>
            <InputField
              name={`${formName}.${index}.${getInntektsforholdIdentifikator(
                inntektsforholdTilVurdering,
              )}.bruttoInntektPrÅr`}
              label="Fastsett årsinntekt"
              readOnly={readOnly}
              className={styles.bruttoInntektInput}
              parse={parseCurrencyInput}
              validate={[required, maxValueFormatted(178956970)]}
            />
            <span className={styles.bruttoInntektCurrency}>kr</span>
          </div>
        </>
      )}
      <VerticalSpacer fourtyPx />
    </>
  );
};
export default TilkommetInntektsforholdField;
