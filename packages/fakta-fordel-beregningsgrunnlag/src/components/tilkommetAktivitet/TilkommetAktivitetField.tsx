import { Tag } from '@navikt/ds-react';
import { formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import React from 'react';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import SubmitButton from '../felles/SubmitButton';
import styles from './tilkommetAktivitet.less';
import { getAktivitetNavn, getInntektsforhold } from './TilkommetAktivitetUtils';
import TilkommetInntektsforholdField, { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';

interface TilkommetAktivitetField {
  formName: string;
  vurderInntektsforholdPerioder: VurderInntektsforholdPeriode[];
  index: number;
  readOnly: boolean;
  submittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const TilkommetAktivitetField = ({
  formName,
  vurderInntektsforholdPerioder,
  index,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
}: TilkommetAktivitetField) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const getInntektsforholdTableRows = (inntektsforholdPerioder: VurderInntektsforholdPeriode[]): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    const inntektsforholdListe = getInntektsforhold(inntektsforholdPerioder);
    inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = !!inntektsforhold.bruttoInntektPrÅr && +inntektsforhold.bruttoInntektPrÅr > 0;
      tableRows.push(
        <TableRow key={inntektsforhold.arbeidsgiverId}>
          <TableColumn>{getAktivitetNavn(inntektsforhold, arbeidsgiverOpplysningerPerId)}</TableColumn>
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
    return tableRows;
  };

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(inntektsforhold => inntektsforhold.bruttoInntektPrÅr),
  );

  return (
    <>
      <div className={styles.aktivitetContainer}>
        {vurderInntektsforholdPerioder && vurderInntektsforholdPerioder.length > 0 && (
          <Table
            headerTextCodes={[
              'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
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
        {getInntektsforhold(vurderInntektsforholdPerioder).map(inntektsforhold => (
          <TilkommetInntektsforholdField
            key={getInntektsforholdIdentifikator(inntektsforhold)}
            formName={formName}
            index={index}
            readOnly={readOnly}
            inntektsforholdTilVurdering={inntektsforhold}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        ))}
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
