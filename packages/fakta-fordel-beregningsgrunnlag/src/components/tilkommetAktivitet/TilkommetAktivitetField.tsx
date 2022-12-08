import { Alert, Heading } from '@navikt/ds-react';
import { InputField, formHooks, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import React from 'react';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import SubmitButton from '../felles/SubmitButton';
import styles from './tilkommetAktivitet.less';

const getAlertHeading = () =>
  // if (selvstendigNæringsdrivende) {
  //   return 'Søker har opplyst om ny inntekt som selvstendig næringsdrivende.';
  // }

  // if (frilanser) {
  //   return 'Søker har en ny frilansaktivitet i AA-registeret.';
  // }

  'Søker har et nytt arbeidsforhold i AA-registeret';

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '');

interface TilkommetAktivitetField {
  formName: string;
  gjeldendeBeregningsgrunnlag: Beregningsgrunnlag;
  index: number;
  readOnly: boolean;
  submittable: boolean;
}

const TilkommetAktivitetField = ({
  formName,
  gjeldendeBeregningsgrunnlag,
  index,
  readOnly,
  submittable,
}: TilkommetAktivitetField) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const vurderInntektsforholdPerioder =
    gjeldendeBeregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto.vurderInntektsforholdPerioder;

  const getInntektsforholdTableRows = (inntektsforholdPerioder: VurderInntektsforholdPeriode[]): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPerioder.forEach(inntektsforholdPeriode => {
      const { fom, tom } = inntektsforholdPeriode;
      inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
        tableRows.push(
          <TableRow key={inntektsforhold.arbeidsgiverId}>
            <TableColumn>{inntektsforhold.arbeidsgiverId}</TableColumn>
            <TableColumn>{`${formatDate(fom)} - ${formatDate(tom)}`}</TableColumn>
          </TableRow>,
        );
      });
    });
    return tableRows;
  };

  const skalRedusereUtbetaling = formMethods.watch(`VURDER_TILKOMMET_AKTIVITET_FORM.${index}.skalRedusereUtbetaling`);

  return (
    <>
      <Alert size="small" variant="warning">
        <Heading spacing size="xsmall" level="3">
          {getAlertHeading()}
        </Heading>
        Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.
      </Alert>
      <VerticalSpacer eightPx />
      <Alert size="small" variant="info">
        Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag.
        Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye
        inntekten.
      </Alert>
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
          label="Har søker inntekt fra det nye arbeidsforholdet som reduserer søkers inntektstap?"
          name={`${formName}.${index}.skalRedusereUtbetaling`}
          radios={[
            { value: 'ja', label: 'Ja' },
            { value: 'nei', label: 'Nei' },
          ]}
          isReadOnly={readOnly}
        />

        {skalRedusereUtbetaling && (
          <>
            <VerticalSpacer sixteenPx />
            <div className={styles.bruttoInntektContainer}>
              <InputField
                name={`${formName}.${index}.bruttoInntektPrÅr`}
                label="Fastsett årsinntekt"
                readOnly={readOnly}
                className={styles.bruttoInntektInput}
              />
              <span className={styles.bruttoInntektCurrency}>kr</span>
            </div>
          </>
        )}
        <VerticalSpacer fourtyPx />
        <TextAreaField name={`${formName}.${index}.begrunnelse`} label="Begrunnelse" readOnly={readOnly} />
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
