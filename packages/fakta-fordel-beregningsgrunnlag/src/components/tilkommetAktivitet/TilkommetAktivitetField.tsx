import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BodyShort, Label, Tag } from '@navikt/ds-react';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  VurderInntektsforholdPeriode,
} from '@navikt/ft-types';
import { EditedIcon, PeriodLabel, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { useFieldArray, useFormContext } from 'react-hook-form';
import SubmitButton from '../felles/SubmitButton';
import { getAktivitetNavnFraInnteksforhold } from './TilkommetAktivitetUtils';
import TilkommetInntektsforholdField from './TilkommetInntektsforholdField';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './tilkommetAktivitet.module.css';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';

type TilkommetAktivitetFieldType = {
  formName: string;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
  formFieldIndex: number;
  periodeFieldIndex: number;
  readOnly: boolean;
  submittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erAksjonspunktÅpent: boolean;
  skalViseBegrunnelse: boolean;
  avklaringsbehov?: BeregningAvklaringsbehov;
};

const erDefinert = (tall?: number) => !!tall && +tall > 0;

export function getPeriodeIdentikator(vurderInntektsforholdPeriode: VurderInntektsforholdPeriode) {
  return `${vurderInntektsforholdPeriode.fom}_${vurderInntektsforholdPeriode.tom}`;
}

const TilkommetAktivitetField: FC<TilkommetAktivitetFieldType> = ({
  formName,
  vurderInntektsforholdPeriode,
  formFieldIndex,
  periodeFieldIndex,
  readOnly,
  erAksjonspunktÅpent,
  submittable,
  arbeidsgiverOpplysningerPerId,
  skalViseBegrunnelse,
  avklaringsbehov,
}) => {
  const { control, formState } = useFormContext<TilkommetAktivitetFormValues>();
  const { fields } = useFieldArray({
    control,
    name: `VURDER_TILKOMMET_AKTIVITET_FORM.${formFieldIndex}.perioder.${periodeFieldIndex}.inntektsforhold`,
  });

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold =>
      erDefinert(inntektsforhold.bruttoInntektPrÅr) || erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr),
  );
  const harInntektsforholdMedPeriode = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold => !!inntektsforhold.periode,
  );

  const headerCodes = [
    'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
    harInntektsforholdMedÅrsinntekt
      ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt'
      : 'BeregningInfoPanel.TilkommetAktivitet.TomTekst',
    harInntektsforholdMedPeriode
      ? 'BeregningInfoPanel.TilkommetAktivitet.Periode'
      : 'BeregningInfoPanel.TilkommetAktivitet.TomTekst',
  ];
  const headerComponents = headerCodes.map(id => (
    <Label size="small" key={id}>
      <FormattedMessage id={id} />{' '}
    </Label>
  ));

  const getInntektsforholdTableRows = (
    inntektsforholdPeriode: VurderInntektsforholdPeriode,
  ): React.ReactElement<any>[] => {
    const tableRows: React.ReactElement<any>[] = [];
    const { inntektsforholdListe } = inntektsforholdPeriode;
    inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);

      tableRows.push(
        <TableRow key={inntektsforhold.arbeidsgiverId || inntektsforhold.aktivitetStatus}>
          <TableColumn>
            <BodyShort size="small">
              {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
            </BodyShort>
          </TableColumn>
          {(harBruttoInntekt || harInntektsmelding || harInntektsforholdMedPeriode) && (
            <TableColumn className={styles.inntektColumn}>
              <BodyShort size="small">
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
              </BodyShort>
            </TableColumn>
          )}
          {inntektsforhold.periode && (
            <TableColumn className={styles.periodeColumn}>
              <BodyShort size="small">
                <PeriodLabel dateStringFom={inntektsforhold.periode.fom} dateStringTom={inntektsforhold.periode.tom} />
              </BodyShort>
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
        <Table noHover headerColumnContent={headerComponents} classNameTable={styles.aktivitetTable}>
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
              formFieldIndex={formFieldIndex}
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
              name={`${formName}.${formFieldIndex}.begrunnelse`}
              label="Begrunnelse"
              readOnly={readOnly}
              validate={[required]}
            />
            <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
            <VerticalSpacer sixteenPx />
            <SubmitButton
              isSubmittable={submittable}
              isReadOnly={readOnly}
              isSubmitting={formState.isSubmitting}
              isDirty={formState.isDirty}
            />
          </>
        )}
      </div>
    </>
  );
};
export default TilkommetAktivitetField;
