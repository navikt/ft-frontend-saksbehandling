import { formHooks, InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Inntektsforhold } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React from 'react';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.less';

interface TilkommetInntektsforholdField {
  formName: string;
  index: number;
  readOnly: boolean;
  inntektsforholdTilVurdering: Inntektsforhold;
}

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

const TilkommetInntektsforholdField = ({
  formName,
  index,
  readOnly,
  inntektsforholdTilVurdering,
}: TilkommetInntektsforholdField) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const skalRedusereUtbetaling = formMethods.watch(`${formName}.${index}.
  ${getInntektsforholdIdentifikator(inntektsforholdTilVurdering)}.skalRedusereUtbetaling`);

  const getRadioGroupLabel = (inntektsforhold: Inntektsforhold) => {
    if (inntektsforhold.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
      return 'Har søker inntekt fra den nye aktiviteten som reduserer søkers inntektstap?';
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.FRILANSER) {
      return 'Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?';
    }

    return 'Har søker inntekt fra det nye arbeidsforholdet som reduserer søkers inntektstap?';
  };

  return (
    <>
      <RadioGroupPanel
        label={getRadioGroupLabel(inntektsforholdTilVurdering)}
        name={`${formName}.${index}.${getInntektsforholdIdentifikator(
          inntektsforholdTilVurdering,
        )}.skalRedusereUtbetaling`}
        radios={[
          { value: 'true', label: 'Ja' },
          { value: 'false', label: 'Nei' },
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
    </>
  );
};
export default TilkommetInntektsforholdField;
