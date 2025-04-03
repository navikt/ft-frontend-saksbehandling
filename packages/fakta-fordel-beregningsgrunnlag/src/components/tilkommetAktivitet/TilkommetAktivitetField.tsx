import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Table, Tag, VStack } from '@navikt/ds-react';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  VurderInntektsforholdPeriode,
} from '@navikt/ft-types';
import { EditedIcon, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';

import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { SubmitButton } from '../felles/SubmitButton';
import { getAktivitetNavnFraInnteksforhold } from './TilkommetAktivitetUtils';
import { TilkommetInntektsforholdField } from './TilkommetInntektsforholdField';

import styles from './tilkommetAktivitet.module.css';

type Props = {
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

export const TilkommetAktivitetField = ({
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
}: Props) => {
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

  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): React.ReactElement[] => {
    const tableRows: React.ReactElement[] = [];
    const { inntektsforholdListe } = inntektsforholdPeriode;
    inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);

      tableRows.push(
        <Table.Row key={inntektsforhold.arbeidsgiverId || inntektsforhold.aktivitetStatus}>
          <Table.DataCell>
            <BodyShort size="small">
              {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
            </BodyShort>
          </Table.DataCell>
          {(harBruttoInntekt || harInntektsmelding || harInntektsforholdMedPeriode) && (
            <Table.DataCell className={styles.inntektColumn}>
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
            </Table.DataCell>
          )}
          {inntektsforhold.periode && (
            <Table.DataCell className={styles.periodeColumn}>
              <BodyShort size="small">
                <PeriodLabel dateStringFom={inntektsforhold.periode.fom} dateStringTom={inntektsforhold.periode.tom} />
              </BodyShort>
            </Table.DataCell>
          )}
        </Table.Row>,
      );
    });
    return tableRows;
  };
  return (
    <VStack gap="4">
      <div className={styles.aktivitetContainer}>
        <Table className={styles.aktivitetTable}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Aktivitet" />
              </Table.HeaderCell>
              {harInntektsforholdMedÅrsinntekt && (
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Årsinntekt" />
                </Table.HeaderCell>
              )}
              {!harInntektsforholdMedÅrsinntekt && (
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.TomTekst" />
                </Table.HeaderCell>
              )}
              {harInntektsforholdMedPeriode && (
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Periode" />
                </Table.HeaderCell>
              )}
              {!harInntektsforholdMedPeriode && (
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.TomTekst" />
                </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>{getInntektsforholdTableRows(vurderInntektsforholdPeriode)}</Table.Body>
        </Table>
      </div>
      <VStack
        gap="4"
        className={erAksjonspunktÅpent ? styles.aksjonspunktContainer : styles.aksjonspunktContainerLukketAP}
      >
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
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
          </React.Fragment>
        ))}
        {skalViseBegrunnelse && (
          <>
            <div>
              <TextAreaField
                name={`${formName}.${formFieldIndex}.begrunnelse`}
                label="Begrunnelse"
                readOnly={readOnly}
                validate={[required]}
              />
              <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
            </div>
            <div>
              <SubmitButton
                isSubmittable={submittable}
                isReadOnly={readOnly}
                isSubmitting={formState.isSubmitting}
                isDirty={formState.isDirty}
              />
            </div>
          </>
        )}
      </VStack>
    </VStack>
  );
};
