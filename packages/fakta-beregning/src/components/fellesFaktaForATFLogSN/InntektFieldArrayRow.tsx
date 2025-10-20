import React from 'react';
import { type FieldArrayWithId, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PersonPencilFillIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage, Table } from '@navikt/ds-react';

import { RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';

import type { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import type { AndelFieldIdentifikator } from '../../typer/FieldValues';
import type { KodeverkForPanel, KodeverkMedNavn } from '../../typer/KodeverkForPanel';
import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import {
  erArbeidstaker,
  erDagpenger,
  erFrilanser,
  erMilitaerEllerSivil,
  erOverstyringAvBeregningsgrunnlag,
  erSelvstendigNæringsdrivende,
  getArbeidsgiverIndex,
  getFastsattBelopFromArbeidstakerInntekt,
  getKanRedigereInntekt,
  skalRedigereInntektskategoriForAndel,
} from './BgFaktaUtils';
import { getInntektskategorierAlfabetiskSortert } from './inntektFieldArrayUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

import styles from './inntektFieldArray.module.css';

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn<'Inntektskategori'>[]) =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

interface Props {
  readOnly: boolean;
  field: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  skalViseSletteknapp: boolean;
  removeAndel: () => void;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag;
  rowName: string;
  skalFastsetteInntektForAndel: (andel: AndelFieldIdentifikator) => boolean;
}

/**
 *  InntektFieldArrayAndelRow
 *
 * Presentasjonskomponent: Viser en rad korresponderende til ein andel i beregning.
 */
export const InntektFieldArrayAndelRow = ({
  field,
  skalVisePeriode,
  skalViseRefusjon,
  skalViseSletteknapp,
  readOnly,
  removeAndel,
  beregningsgrunnlag,
  kodeverkSamling,
  rowName,
  skalFastsetteInntektForAndel,
}: Props) => {
  const intl = useIntl();
  const { getValues, control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const erFrilansInntekt = erFrilanser(field);
  const erInntektDagpenger = erDagpenger(field);
  const erInntektSelvstendigNæringsdrivende = erSelvstendigNæringsdrivende(field);
  const erInntektMilitærEllerSivil = erMilitaerEllerSivil(field);
  const erArbeidstakerInntekt = erArbeidstaker(field);
  const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);

  const harEndretFrilansinntekt =
    erFrilansInntekt && kanRedigereInntekt && formValues?.frilansInntektValues?.fastsattBelop;

  const harEndretInntektForArbeidsgiver =
    erArbeidstakerInntekt &&
    kanRedigereInntekt &&
    field.arbeidsgiverId &&
    !!getFastsattBelopFromArbeidstakerInntekt(formValues?.arbeidstakerInntektValues, field.arbeidsgiverId);

  const harEndretInntektForDagpenger =
    erInntektDagpenger && kanRedigereInntekt && formValues?.dagpengerInntektValues?.fastsattBelop;

  const harEndretInntektForSelvstendigNæringsdrivende =
    erInntektSelvstendigNæringsdrivende &&
    kanRedigereInntekt &&
    formValues?.selvstendigNæringsdrivendeInntektValues?.fastsattBelop;

  const harEndretInntektForMilitærEllerSivil =
    erInntektMilitærEllerSivil && kanRedigereInntekt && formValues?.militærEllerSivilInntektValues?.fastsattBelop;

  const visMåFastsettesText =
    (erFrilansInntekt && kanRedigereInntekt && !formValues?.frilansInntektValues?.fastsattBelop) ||
    (erArbeidstakerInntekt &&
      kanRedigereInntekt &&
      field.arbeidsgiverId &&
      !getFastsattBelopFromArbeidstakerInntekt(formValues?.arbeidstakerInntektValues, field.arbeidsgiverId)) ||
    (erInntektDagpenger && kanRedigereInntekt && !formValues?.dagpengerInntektValues?.fastsattBelop) ||
    (erInntektSelvstendigNæringsdrivende &&
      kanRedigereInntekt &&
      !formValues?.selvstendigNæringsdrivendeInntektValues?.fastsattBelop) ||
    (erInntektMilitærEllerSivil && kanRedigereInntekt && !formValues?.militærEllerSivilInntektValues?.fastsattBelop);

  const harEndretInntekt =
    harEndretFrilansinntekt ||
    harEndretInntektForArbeidsgiver ||
    harEndretInntektForDagpenger ||
    harEndretInntektForSelvstendigNæringsdrivende ||
    harEndretInntektForMilitærEllerSivil;

  const skalViseOverstyrtInntektInput = erOverstyringAvBeregningsgrunnlag(formValues);

  const skalRedigereInntektskategori = skalRedigereInntektskategoriForAndel(beregningsgrunnlag, field);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(kodeverkSamling);
  const harPeriode = field.arbeidsperiodeFom || field.arbeidsperiodeTom;

  const getInputFieldName = () => {
    if (harEndretInntektForArbeidsgiver && formValues.arbeidstakerInntektValues && field.arbeidsgiverId) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${getArbeidsgiverIndex(
        formValues.arbeidstakerInntektValues,
        field.arbeidsgiverId,
      )}.fastsattBelop`;
    }
    if (harEndretFrilansinntekt) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansInntektValues.fastsattBelop`;
    }
    if (harEndretInntektForDagpenger) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.dagpengerInntektValues.fastsattBelop`;
    }
    if (harEndretInntektForSelvstendigNæringsdrivende) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`;
    }
    if (harEndretInntektForMilitærEllerSivil) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.militærEllerSivilInntektValues.fastsattBelop`;
    }
    return '';
  };

  return (
    <Table.Row>
      <Table.DataCell>
        <RhfTextField
          // @ts-expect-error Fiks
          name={`${rowName}.andel`}
          control={control}
          size="small"
          readOnly
        />
      </Table.DataCell>
      <Table.DataCell textSize="small">
        {skalVisePeriode && harPeriode && field.arbeidsperiodeFom && (
          <PeriodLabel dateStringFom={field.arbeidsperiodeFom} dateStringTom={field.arbeidsperiodeTom} />
        )}
      </Table.DataCell>
      {!skalViseOverstyrtInntektInput && (
        <Table.DataCell align="right">
          <div className={styles.inntekt}>
            <div className={harEndretInntekt ? styles.inntektOldStrikethrough : styles.inntektOld}>
              {visMåFastsettesText ? (
                <ErrorMessage size="small">
                  <FormattedMessage id="InntektFieldArrayRow.MåFastsettes" />
                </ErrorMessage>
              ) : (
                <RhfTextField
                  // @ts-expect-error Fiks
                  name={`${rowName}.belopReadOnly`}
                  control={control}
                  size="small"
                  className={styles.mediumBredde}
                  parse={parseCurrencyInput}
                  readOnly
                />
              )}
            </div>
            {harEndretInntekt && (
              <>
                <div className={styles.inntektNew}>
                  <RhfTextField
                    // @ts-expect-error Fiks
                    name={getInputFieldName()}
                    control={control}
                    size="small"
                    className={styles.mediumBredde}
                    parse={parseCurrencyInput}
                    readOnly
                  />
                </div>
                <PersonPencilFillIcon title="Endret av saksbehandler" className={styles.saksbehandlerIcon} />
              </>
            )}
          </div>
        </Table.DataCell>
      )}
      {skalViseOverstyrtInntektInput && (
        <Table.DataCell align="right" className={styles.rightAlignInput}>
          <RhfTextField
            // @ts-expect-error Fiks
            name={`${rowName}.fastsattBelop`}
            control={control}
            size="small"
            label={intl.formatMessage(
              {
                id: 'BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn',
              },
              { andel: field.andel },
            )}
            parse={parseCurrencyInput}
            className={styles.mediumBredde}
            validate={skalFastsetteInntektForAndel(field) ? [required, maxValueFormatted(178956970)] : []}
            hideLabel
          />
        </Table.DataCell>
      )}

      {skalViseRefusjon && (
        <Table.DataCell align="right">
          <RhfTextField
            // @ts-expect-error Fiks
            name={`${rowName}.refusjonskrav`}
            control={control}
            size="small"
            readOnly
            parse={parseCurrencyInput}
          />
        </Table.DataCell>
      )}
      <Table.DataCell align="right">
        <RhfSelect
          // @ts-expect-error Fiks
          name={`${rowName}.inntektskategori`}
          control={control}
          label={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Inntektskategori' })}
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          validate={readOnly ? [] : [required]}
          readOnly={readOnly || !skalRedigereInntektskategori}
          size="small"
          hideLabel
        />
      </Table.DataCell>
      {skalViseSletteknapp && (
        <Table.DataCell>
          <Button icon={<XMarkIcon aria-hidden />} onClick={() => removeAndel()} type="button" variant="tertiary" />
        </Table.DataCell>
      )}
    </Table.Row>
  );
};
