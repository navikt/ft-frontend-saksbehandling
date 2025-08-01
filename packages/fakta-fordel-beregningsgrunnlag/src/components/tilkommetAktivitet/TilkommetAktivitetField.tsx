import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Table, Tag, VStack } from '@navikt/ds-react';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  VurderInntektsforholdPeriode,
} from '@navikt/ft-types';
import { BeløpLabel, EditedIcon, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { SubmitButton } from '../felles/SubmitButton';
import { getAktivitetNavnFraInnteksforhold } from './tilkommetAktivitetUtils';
import { TilkommetInntektsforholdField } from './TilkommetInntektsforholdField';

import styles from './tilkommetAktivitet.module.css';

interface Props {
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
}

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

  return (
    <VStack gap="space-16">
      <Table className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Aktivitet" />
            </Table.HeaderCell>
            {harInntektsforholdMedÅrsinntekt && (
              <Table.HeaderCell scope="col" align="right" textSize="small">
                <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Årsinntekt" />
              </Table.HeaderCell>
            )}
            {harInntektsforholdMedPeriode && (
              <Table.HeaderCell scope="col" textSize="small">
                <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Periode" />
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {vurderInntektsforholdPeriode.inntektsforholdListe.map(inntektsforhold => {
            const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
            const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);
            return (
              <Table.Row key={inntektsforhold.arbeidsgiverId ?? inntektsforhold.aktivitetStatus}>
                <Table.DataCell textSize="small">
                  {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
                </Table.DataCell>
                {harInntektsforholdMedÅrsinntekt && (
                  <Table.DataCell textSize="small" align="right">
                    {harBruttoInntekt && !harInntektsmelding && (
                      <HStack gap="space-8" justify="end">
                        <BeløpLabel beløp={inntektsforhold.bruttoInntektPrÅr ?? 0} />
                        <EditedIcon />
                      </HStack>
                    )}
                    {harInntektsmelding && (
                      <HStack gap="space-8" justify="end">
                        <BeløpLabel beløp={inntektsforhold.inntektFraInntektsmeldingPrÅr ?? 0} />
                        <Tag variant="neutral" size="xsmall">
                          IM
                        </Tag>
                      </HStack>
                    )}
                  </Table.DataCell>
                )}
                {harInntektsforholdMedPeriode && (
                  <Table.DataCell className={styles.periodeColumn} textSize="small">
                    {inntektsforhold.periode && (
                      <PeriodLabel
                        dateStringFom={inntektsforhold.periode.fom}
                        dateStringTom={inntektsforhold.periode.tom}
                      />
                    )}
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <VStack
        gap="space-16"
        className={erAksjonspunktÅpent ? styles.aksjonspunktContainer : styles.aksjonspunktContainerLukketAP}
      >
        {fields.map((field, index) => (
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
        ))}
        {skalViseBegrunnelse && (
          <>
            <div>
              <RhfTextarea
                name={`${formName}.${formFieldIndex}.begrunnelse`}
                control={control}
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
