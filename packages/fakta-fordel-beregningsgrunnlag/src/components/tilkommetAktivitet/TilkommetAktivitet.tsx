import { Alert, Heading } from '@navikt/ds-react';
import { TextAreaField, RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import { Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.less';

const buildFieldInitialValues = () => null;

export const FORM_NAME = 'VURDER_TILKOMMET_AKTIVITET_BEGRUNN_BEGRUNNELSE';

interface TilkommetAktivitetProps {
  aktivtBeregningsgrunnlagIndeks: number;
  formData?: TilkommetAktivitetFormValues;
  setFormData: (data: TilkommetAktivitetFormValues) => void;
  //   submitCallback: (aksjonspunktData: any) => Promise<void>;
}

const TilkommetAktivitet = ({
  aktivtBeregningsgrunnlagIndeks,
  formData,
  setFormData,
}: //   submitCallback,
TilkommetAktivitetProps) => {
  const formMethods = useForm<TilkommetAktivitetFormValues>({
    defaultValues: formData || buildFieldInitialValues(),
  });

  const {
    formState: { dirtyFields, isSubmitted, errors },
    trigger,
  } = formMethods;

  useEffect(() => {
    if (isSubmitted && dirtyFields[FORM_NAME]?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const getAlertHeading = () =>
    // if (selvstendigNæringsdrivende) {
    //   return 'Søker har opplyst om ny inntekt som selvstendig næringsdrivende.';
    // }

    // if (frilanser) {
    //   return 'Søker har en ny frilansaktivitet i AA-registeret.';
    // }

    'Søker har et nytt arbeidsforhold i AA-registeret';
  return (
    <div className={styles.tilkommetAktivitet}>
      <Form
        formMethods={formMethods}
        onSubmit={() => {
          if (Object.keys(errors).length === 0) {
            //   submitCallback(transformValues(values, beregningsgrunnlagListe));
          }
        }}
        setDataOnUnmount={setFormData}
      >
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
          <Table
            headerTextCodes={[
              'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
              'BeregningInfoPanel.TilkommetAktivitet.Periode',
            ]}
            noHover
            classNameTable={styles.aktivitetTable}
          >
            <TableRow>
              <TableColumn>FREJA UNGOMDSKLUBB (Arbeidsforhold)</TableColumn>
              <TableColumn>10.07.2022 -</TableColumn>
            </TableRow>
          </Table>
        </div>
        <VerticalSpacer sixteenPx />
        <div className={styles.aksjonspunktContainer}>
          <RadioGroupPanel
            label="Har søker inntekt fra det nye arbeidsforholdet som reduserer søkers inntektstap?"
            name={`${FORM_NAME}.harInntektIArbeidsforholdSomRedusererInntektstap`}
            radios={[
              { value: 'ja', label: 'Ja' },
              { value: 'nei', label: 'Nei' },
            ]}
          />
          <VerticalSpacer fourtyPx />
          <TextAreaField name={`${FORM_NAME}.begrunnelse`} label="Begrunnelse" />
        </div>
      </Form>
    </div>
  );
};
export default TilkommetAktivitet;
