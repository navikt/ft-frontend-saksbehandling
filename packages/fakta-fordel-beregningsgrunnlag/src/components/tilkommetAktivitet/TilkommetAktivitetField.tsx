import { formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { EditedIcon, PeriodLabel, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FC } from 'react';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { Tag } from '@navikt/ds-react';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import SubmitButton from '../felles/SubmitButton';
import styles from './tilkommetAktivitet.less';
import { getAktivitetNavn, getInntektsforhold } from './TilkommetAktivitetUtils';
import TilkommetInntektsforholdField, { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';

type TilkommetAktivitetFieldType = {
  formName: string;
  vurderInntektsforholdPerioder: VurderInntektsforholdPeriode[];
  index: number;
  readOnly: boolean;
  submittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erAksjonspunktÅpent: boolean;
};

const erDefinert = (tall?: number) => !!tall && +tall > 0;

const TilkommetAktivitetField: FC<TilkommetAktivitetFieldType> = ({
  formName,
  vurderInntektsforholdPerioder,
  index,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  erAksjonspunktÅpent,
}) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(
      inntektsforhold =>
        erDefinert(inntektsforhold.bruttoInntektPrÅr) || erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr),
    ),
  );

  const harInntektsforholdMedPeriode = vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(inntektsforhold => !!inntektsforhold.periode),
  );

  const getInntektsforholdTableRows = (
    inntektsforholdPerioder: VurderInntektsforholdPeriode[],
  ): React.ReactElement[] => {
    const tableRows: React.ReactElement[] = [];
    const inntektsforholdListe = getInntektsforhold(inntektsforholdPerioder);
    inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);

      tableRows.push(
        <TableRow key={inntektsforhold.arbeidsgiverId}>
          <TableColumn>{getAktivitetNavn(inntektsforhold, arbeidsgiverOpplysningerPerId)}</TableColumn>
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
        {vurderInntektsforholdPerioder && vurderInntektsforholdPerioder.length > 0 && (
          <Table
            headerTextCodes={[
              'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
              harInntektsforholdMedÅrsinntekt ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt' : 'EMPTY',
              harInntektsforholdMedPeriode ? 'BeregningInfoPanel.TilkommetAktivitet.Periode' : 'EMPTY',
            ]}
            noHover
            classNameTable={styles.aktivitetTable}
          >
            {getInntektsforholdTableRows(vurderInntektsforholdPerioder)}
          </Table>
        )}
      </div>
      <VerticalSpacer sixteenPx />
      <div className={erAksjonspunktÅpent ? styles.aksjonspunktContainer : styles.aksjonspunktContainerLukketAP}>
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
