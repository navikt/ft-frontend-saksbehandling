import React from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PersonPencilFillIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage, Table } from '@navikt/ds-react';

import { InputField, SelectField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';

import { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import { AndelFieldIdentifikator } from '../../typer/FieldValues';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import {
  erArbeidstaker,
  erArbeidUnderAap,
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
import { arbeidUnderAapField } from './vurderOgFastsettATFL/forms/arbeidUnderAapFormUtils';

import styles from './inntektFieldArray.module.css';

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]) =>
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
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const erFrilansInntekt = erFrilanser(field);
  const erArbeidUnderAapInntekt = erArbeidUnderAap(field);
  const erInntektDagpenger = erDagpenger(field);
  const erInntektSelvstendigNæringsdrivende = erSelvstendigNæringsdrivende(field);
  const erInntektMilitærEllerSivil = erMilitaerEllerSivil(field);
  const erArbeidstakerInntekt = erArbeidstaker(field);
  const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);

  const harEndretFrilansinntekt =
    erFrilansInntekt && kanRedigereInntekt && formValues?.frilansInntektValues?.fastsattBelop;

  const harEndretArbeidUnderAapInntekt =
    erArbeidUnderAapInntekt && kanRedigereInntekt && formValues?.arbeidUnderAAPInntektValues?.fastsattBelop;

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
    (erArbeidUnderAapInntekt && kanRedigereInntekt && !formValues?.arbeidUnderAAPInntektValues?.fastsattBelop) ||
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
    harEndretArbeidUnderAapInntekt ||
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
    if (harEndretArbeidUnderAapInntekt) {
      return `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${arbeidUnderAapField}.fastsattBelop`;
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
        <InputField size="small" name={`${rowName}.andel`} readOnly />
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
                <InputField
                  size="small"
                  name={`${rowName}.belopReadOnly`}
                  className={styles.mediumBredde}
                  parse={parseCurrencyInput}
                  readOnly
                />
              )}
            </div>
            {harEndretInntekt && (
              <>
                <div className={styles.inntektNew}>
                  <InputField
                    size="small"
                    name={getInputFieldName()}
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
          <InputField
            size="small"
            label={intl.formatMessage(
              {
                id: 'BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn',
              },
              { andel: field.andel },
            )}
            name={`${rowName}.fastsattBelop`}
            parse={parseCurrencyInput}
            className={styles.mediumBredde}
            validate={skalFastsetteInntektForAndel(field) ? [required, maxValueFormatted(178956970)] : []}
            hideLabel
          />
        </Table.DataCell>
      )}

      {skalViseRefusjon && (
        <Table.DataCell align="right">
          <InputField size="small" name={`${rowName}.refusjonskrav`} readOnly parse={parseCurrencyInput} />
        </Table.DataCell>
      )}
      <Table.DataCell align="right">
        <SelectField
          label={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Inntektskategori' })}
          name={`${rowName}.inntektskategori`}
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
