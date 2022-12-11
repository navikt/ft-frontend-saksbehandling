import { Alert, Heading, Tag } from '@navikt/ds-react';
import { InputField, formHooks, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyWithKr, ISO_DATE_FORMAT, parseCurrencyInput } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import React from 'react';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import SubmitButton from '../felles/SubmitButton';
import styles from './tilkommetAktivitet.less';

const finnAktivitetStatus = (
  aktivitetStatus: AktivitetStatus,
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[],
) =>
  vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(
      inntektsforhold => inntektsforhold.aktivitetStatus === aktivitetStatus,
    ),
  );

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '');

interface TilkommetAktivitetField {
  formName: string;
  beregningsgrunnlag: Beregningsgrunnlag;
  index: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
}

const TilkommetAktivitetField = ({
  formName,
  beregningsgrunnlag,
  index,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
}: TilkommetAktivitetField) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto.vurderInntektsforholdPerioder;

  const getInntektsforholdTableRows = (inntektsforholdPerioder: VurderInntektsforholdPeriode[]): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPerioder.forEach(inntektsforholdPeriode => {
      const { fom, tom } = inntektsforholdPeriode;
      inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
        const harBruttoInntekt = !!inntektsforhold.bruttoInntektPrÅr && +inntektsforhold.bruttoInntektPrÅr > 0;
        tableRows.push(
          <TableRow key={inntektsforhold.arbeidsgiverId}>
            <TableColumn>{inntektsforhold.arbeidsgiverId}</TableColumn>
            <TableColumn>{`${formatDate(fom)} - ${formatDate(tom)}`}</TableColumn>
            {harBruttoInntekt && (
              <TableColumn className={styles.inntektColumn}>
                {formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr)}
                {inntektsforhold.harInntektsmelding && (
                  <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                    IM
                  </Tag>
                )}
              </TableColumn>
            )}
          </TableRow>,
        );
      });
    });
    return tableRows;
  };

  const skalRedusereUtbetaling = formMethods.watch(`VURDER_TILKOMMET_AKTIVITET_FORM.${index}.skalRedusereUtbetaling`);
  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(inntektsforhold => inntektsforhold.bruttoInntektPrÅr),
  );

  const getAlertHeading = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    if (harSNAktvitet) {
      return 'Søker har opplyst om ny inntekt som selvstendig næringsdrivende.';
    }

    if (harFrilanserAktvitet) {
      return 'Søker har en ny frilansaktivitet i AA-registeret.';
    }

    return 'Søker har et nytt arbeidsforhold i AA-registeret';
  };

  const getRadioGroupLabel = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    if (harSNAktvitet) {
      return 'Har søker inntekt fra den nye aktiviteten som reduserer søkers inntektstap?';
    }

    if (harFrilanserAktvitet) {
      return 'Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?';
    }

    return 'Har søker inntekt fra det nye arbeidsforholdet som reduserer søkers inntektstap?';
  };

  return (
    <>
      {!!vurderInntektsforholdPerioder && erAksjonspunktÅpent && (
        <>
          <Alert size="small" variant="warning">
            <Heading spacing size="xsmall" level="3">
              {getAlertHeading()}
            </Heading>
            Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.
          </Alert>
          <VerticalSpacer eightPx />
          <Alert size="small" variant="info">
            Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers
            beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal
            graderes mot den nye inntekten.
          </Alert>
        </>
      )}
      <div className={styles.aktivitetContainer}>
        <Heading size="small" level="3">
          Ny aktivitet
        </Heading>
        <hr className={styles.separator} />
        {vurderInntektsforholdPerioder && vurderInntektsforholdPerioder.length > 0 && (
          <Table
            headerTextCodes={[
              'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
              'BeregningInfoPanel.TilkommetAktivitet.Periode',
              harInntektsforholdMedÅrsinntekt ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt' : 'EMPTY',
            ]}
            noHover
            classNameTable={styles.aktivitetTable}
          >
            {getInntektsforholdTableRows(vurderInntektsforholdPerioder)}
          </Table>
        )}
      </div>
      <VerticalSpacer sixteenPx />
      <div className={styles.aksjonspunktContainer}>
        <RadioGroupPanel
          label={getRadioGroupLabel()}
          name={`${formName}.${index}.skalRedusereUtbetaling`}
          radios={[
            { value: 'true', label: 'Ja' },
            { value: 'false', label: 'Nei' },
          ]}
          isReadOnly={readOnly}
          validate={[required]}
        />

        {skalRedusereUtbetaling === 'true' && (
          <>
            <VerticalSpacer sixteenPx />
            <div className={styles.bruttoInntektContainer}>
              <InputField
                name={`${formName}.${index}.bruttoInntektPrÅr`}
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
        <TextAreaField
          name={`${formName}.${index}.begrunnelse`}
          label="Begrunnelse"
          readOnly={readOnly}
          validate={[required]}
        />
        <VerticalSpacer sixteenPx />

        <SubmitButton
          isSubmittable={submittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </div>
    </>
  );
};
export default TilkommetAktivitetField;
