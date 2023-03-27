import React, { FC } from 'react';
import { formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
// eslint-disable-next-line react/jsx-pascal-case, camelcase
import { Tag } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { EditedIcon, PeriodLabel, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import SubmitButton from '../felles/SubmitButton';
import { getAktivitetNavnFraInnteksforhold } from './TilkommetAktivitetUtils';
import TilkommetInntektsforholdField from './TilkommetInntektsforholdField';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.module.css';

type TilkommetAktivitetFieldType = {
  formName: string;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
  bgIndex: number;
  periodeFieldIndex: number;
  readOnly: boolean;
  submittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erAksjonspunktÅpent: boolean;
  skalViseBegrunnelse: boolean;
};

const erDefinert = (tall?: number) => !!tall && +tall > 0;

export function getPeriodeIdentikator(vurderInntektsforholdPeriode: VurderInntektsforholdPeriode) {
  return `${vurderInntektsforholdPeriode.fom}_${vurderInntektsforholdPeriode.tom}`;
}

const TilkommetAktivitetField: FC<TilkommetAktivitetFieldType> = ({
  formName,
  vurderInntektsforholdPeriode,
  bgIndex,
  periodeFieldIndex,
  readOnly,
  erAksjonspunktÅpent,
  submittable,
  arbeidsgiverOpplysningerPerId,
  skalViseBegrunnelse,
}) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();
  const { control } = formHooks.useFormContext<TilkommetAktivitetFormValues>();
  const { fields } = formHooks.useFieldArray({
    control,
    name: `VURDER_TILKOMMET_AKTIVITET_FORM.${bgIndex}.perioder.${periodeFieldIndex}.inntektsforhold`,
  });

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold =>
      erDefinert(inntektsforhold.bruttoInntektPrÅr) || erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr),
  );
  const harInntektsforholdMedPeriode = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold => !!inntektsforhold.periode,
  );

  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): React.ReactElement[] => {
    const tableRows: React.ReactElement[] = [];
    const { inntektsforholdListe } = inntektsforholdPeriode;
    inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);

      tableRows.push(
        <TableRow key={inntektsforhold.arbeidsgiverId}>
          <TableColumn>{getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}</TableColumn>
          {(harBruttoInntekt || harInntektsmelding || harInntektsforholdMedPeriode) && (
            <TableColumn className={styles.inntektColumn}>
              {harBruttoInntekt && !harInntektsmelding && (
                <>
                  {formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr || 0)}
                  <EditedIcon />
                </>
              )}
              {harInntektsmelding && (
                <>
                  {formatCurrencyWithKr(inntektsforhold.inntektFraInntektsmeldingPrÅr || 0)}
                  <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                    IM
                  </Tag>
                </>
              )}
            </TableColumn>
          )}
          {inntektsforhold.periode && (
            <TableColumn className={styles.periodeColumn}>
              <PeriodLabel dateStringFom={inntektsforhold.periode.fom} dateStringTom={inntektsforhold.periode.tom} />
            </TableColumn>
          )}
        </TableRow>,
      );
    });
    return tableRows;
  };
  return (
    <>
      <div className={styles.aktivitetContainer}>
        <Table
          headerTextCodes={[
            'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
            harInntektsforholdMedÅrsinntekt ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt' : 'EMPTY',
            harInntektsforholdMedPeriode ? 'BeregningInfoPanel.TilkommetAktivitet.Periode' : 'EMPTY',
          ]}
          noHover
          classNameTable={styles.aktivitetTable}
        >
          {getInntektsforholdTableRows(vurderInntektsforholdPeriode)}
        </Table>
      </div>
      <VerticalSpacer sixteenPx />
      <div className={erAksjonspunktÅpent ? styles.aksjonspunktContainer : styles.aksjonspunktContainerLukketAP}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <TilkommetInntektsforholdField
              key={field.id}
              formName={formName}
              bgIndex={bgIndex}
              periodeFieldIndex={periodeFieldIndex}
              inntektsforholdFieldIndex={index}
              field={field}
              readOnly={readOnly}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
            {index < vurderInntektsforholdPeriode.inntektsforholdListe.length - 1 && <VerticalSpacer fourtyPx />}
          </div>
        ))}
        {skalViseBegrunnelse && (
          <>
            <VerticalSpacer fourtyPx />
            <TextAreaField
              name={`${formName}.${bgIndex}.begrunnelse`}
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
          </>
        )}
      </div>
    </>
  );
};
export default TilkommetAktivitetField;
