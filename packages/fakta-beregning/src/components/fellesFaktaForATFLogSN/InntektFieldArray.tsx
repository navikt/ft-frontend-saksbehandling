import React, { useEffect } from 'react';
import { useFieldArray, UseFieldArrayAppend, UseFieldArrayRemove, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { ErrorMessage, Table, VStack } from '@navikt/ds-react';

import { useCustomValidation } from '@navikt/ft-form-hooks';
import { AktivitetStatus, Inntektskategori } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  ArbeidstakerInntektValues,
  DagpengerinntektValues,
  FaktaOmBeregningAksjonspunktValues,
  FrilansinntektValues,
  KunstigAndelValues,
  MilitærEllerSivilInntektValues,
  SelvstendigNæringsdrivendeInntektValues,
} from '../../typer/FaktaBeregningTypes';
import { AndelFieldValue, InntektTransformed } from '../../typer/FieldValues';
import { KodeverkForPanel, KodeverkMedNavn } from '../../typer/KodeverkForPanel';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import {
  erOverstyringAvBeregningsgrunnlag,
  getFastsattBelopFromArbeidstakerInntekt,
  getKanRedigereInntekt,
  mapAndelToField,
  skalFastsetteInntektForAndel,
} from './BgFaktaUtils';
import { InntektFieldArrayAndelRow } from './InntektFieldArrayRow';
import {
  finnStatus,
  fjernEllerLeggTilAktivitetStatus,
  leggTilDagpengerOmBesteberegning,
} from './inntektFieldArrayUtils';
import { SummaryRow } from './SummaryRow';
import { validateMinstEnFastsatt, validateUlikeAndeler } from './ValidateAndelerUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';
import { erKunstigAndel } from './vurderOgFastsettATFL/forms/KunstigArbeidsforhold';

import tableStyles from '../felles/tableStyle.module.css';

const lagNyMS = (aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[]): AndelFieldValue => ({
  andel: finnStatus(aktivitetStatuser, AktivitetStatus.MILITAER_ELLER_SIVIL),
  aktivitetStatus: AktivitetStatus.MILITAER_ELLER_SIVIL,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.ARBEIDSTAKER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const skalViseSletteknapp = (index: number, fields: AndelFieldValue[], readOnly: boolean) =>
  fields[index].skalKunneEndreAktivitet === true && !readOnly;

const skalViseRefusjon = (fields: AndelFieldValue[]) => {
  let skalVise = false;
  fields.forEach(field => {
    if (field.refusjonskrav !== '' && field.refusjonskrav !== null && field.refusjonskrav !== undefined) {
      skalVise = true;
    }
  });
  return skalVise;
};

const skalVisePeriode = (fields: AndelFieldValue[]) => {
  let skalVise = false;
  fields.forEach(field => {
    if (field.arbeidsgiverId !== '') {
      skalVise = true;
    }
  });
  return skalVise;
};

const removeAndel = (index: number, remove: UseFieldArrayRemove) => () => {
  remove(index);
};

const erFrilanser = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.FRILANSER;
const erArbeidstaker = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.ARBEIDSTAKER;
const erDagpenger = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.DAGPENGER;
const erSelvstendigNæringsdrivende = (aktivitetStatus: string): boolean =>
  aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE;
const erMilitærEllerSivil = (aktivitetStatus: string): boolean =>
  aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL;

const fjernEllerLeggTilMilitær = (
  fields: AndelFieldValue[],
  skalHaMilitær: boolean,
  aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[],
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    AktivitetStatus.MILITAER_ELLER_SIVIL,
    skalHaMilitær === true,
    () => skalHaMilitær === false,
    lagNyMS(aktivitetStatuser),
    remove,
    append,
  );
};

const validateEnFastsattVedOverstyring = (values: AndelFieldValue[], intl: IntlShape): string | null => {
  const minstEnFastsattFeilmelding = validateMinstEnFastsatt(values, intl);
  if (minstEnFastsattFeilmelding != null) {
    return minstEnFastsattFeilmelding;
  }
  return null;
};

const validate = (formValues: FaktaOmBeregningAksjonspunktValues, errors: any, intl: IntlShape) => {
  const harFeltFeil = errors && errors.length > 0;
  if (harFeltFeil) {
    return null;
  }
  const fields = formValues.inntektFieldArray;
  if (!fields) {
    return;
  }
  const ulikeAndelerError = validateUlikeAndeler(fields, intl);

  if (ulikeAndelerError) {
    return ulikeAndelerError;
  }

  if (erOverstyringAvBeregningsgrunnlag(formValues)) {
    return validateEnFastsattVedOverstyring(fields, intl);
  }

  return null;
};

interface Props {
  readOnly: boolean;
  skalKunneLeggeTilDagpengerManuelt: boolean;
  skalHaMilitær?: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
}

/**
 *  InntektFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for andeler
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const InntektFieldArray = ({
  readOnly,
  skalKunneLeggeTilDagpengerManuelt = false,
  beregningsgrunnlag,
  kodeverkSamling,
}: Props) => {
  const { getValues, control, formState } = useFormContext<VurderFaktaBeregningFormValues>();
  const { errors } = formState;
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const fieldArrayName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`;
  const { fields, remove, append, update } = useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.inntektFieldArray',
  });

  const formValues = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}` as 'vurderFaktaBeregningForm.0',
  });
  const skalHaBesteberegning = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderbesteberegningField`,
  });
  const skalHaMilitær = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMilitær`,
  });
  const intl = useIntl();

  useEffect(() => {
    const currentFields = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`);
    const aktivitetStatuser = kodeverkSamling['AktivitetStatus'];
    if (currentFields) {
      fjernEllerLeggTilMilitær(
        currentFields,
        !!skalHaMilitær,
        aktivitetStatuser,
        remove,
        // @ts-expect-error Fiks
        append,
      );
      leggTilDagpengerOmBesteberegning(
        currentFields,
        !!skalHaBesteberegning,
        aktivitetStatuser,
        skalKunneLeggeTilDagpengerManuelt,
        remove,
        // @ts-expect-error Fiks
        append,
      );
    }
  }, [skalHaBesteberegning, skalHaMilitær, skalKunneLeggeTilDagpengerManuelt]);

  const updateKanRedigereInntekt = (index: number, kanRedigereInntekt: boolean): void => {
    update(index, {
      ...fields[index],
      kanRedigereInntekt,
    });
  };

  useEffect(() => {
    fields.forEach((field, index) => {
      const currentKanRedigereInntekt = field.kanRedigereInntekt;
      const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);
      const erNyAndelSomSkalFjernes =
        !skalHaBesteberegning && !skalKunneLeggeTilDagpengerManuelt && field.lagtTilAvSaksbehandler;
      if (!erNyAndelSomSkalFjernes && currentKanRedigereInntekt !== kanRedigereInntekt) {
        updateKanRedigereInntekt(index, kanRedigereInntekt);
      }
    });
  }, [formValues]);

  const inntektFieldArrayErrors = errors?.vurderFaktaBeregningForm?.[beregningsgrunnlagIndeks]?.inntektFieldArray;

  const feilmelding = validate(formValues, inntektFieldArrayErrors, intl);
  const skjemaNavn = `${fieldArrayName}.skjemagruppe`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding ?? undefined);
  const faktaOmBeregning = beregningsgrunnlag.faktaOmBeregning;

  const skalVisePeriodeKolonne = skalVisePeriode(fields);
  const skalViseRefusjonsKolonne = skalViseRefusjon(fields);

  if (!faktaOmBeregning) {
    return null;
  }

  if (fields.length === 0) {
    return null;
  }

  return (
    <VStack gap="2">
      <Table size="small" className={tableStyles.tableMedInput}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Andel" />
            </Table.HeaderCell>
            {skalVisePeriodeKolonne && (
              <Table.HeaderCell scope="col" textSize="small">
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.Arbeidsperiode" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Fordeling" />
            </Table.HeaderCell>
            {skalViseRefusjonsKolonne && (
              <Table.HeaderCell scope="col" textSize="small" align="right">
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.Refusjonskrav" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Inntektskategori" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => (
            <InntektFieldArrayAndelRow
              key={field.id}
              field={field}
              skalVisePeriode={skalVisePeriodeKolonne}
              skalViseRefusjon={skalViseRefusjonsKolonne}
              skalViseSletteknapp={skalViseSletteknapp(index, fields, readOnly)}
              readOnly={readOnly}
              removeAndel={removeAndel(index, remove)}
              beregningsgrunnlag={beregningsgrunnlag}
              kodeverkSamling={kodeverkSamling}
              rowName={`${fieldArrayName}.${index}`}
              skalFastsetteInntektForAndel={skalFastsetteInntektForAndel(
                formValues,
                faktaOmBeregning,
                beregningsgrunnlag,
              )}
            />
          ))}
          <SummaryRow
            skalVisePeriode={skalVisePeriodeKolonne}
            skalViseRefusjon={skalViseRefusjonsKolonne}
            beregningsgrunnlag={beregningsgrunnlag}
          />
        </Table.Body>
      </Table>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </VStack>
  );
};

InntektFieldArray.transformValues = (
  values: AndelFieldValue[] | undefined,
  frilansInntektValues: FrilansinntektValues | undefined,
  arbeidstakerInntektValues: ArbeidstakerInntektValues[] | undefined,
  dagpengerInntektValues: DagpengerinntektValues | undefined,
  selvstendigNæringsdrivendeInntektValues: SelvstendigNæringsdrivendeInntektValues | undefined,
  militærEllerSivilInntektValues: MilitærEllerSivilInntektValues | undefined,
  kunstigAndelInntektValues: KunstigAndelValues | undefined,
  erOverstyrt: boolean,
): InntektTransformed[] => {
  if (!values) return [];

  const transformAndel = (fieldValue: AndelFieldValue): InntektTransformed => {
    const fastsattBelop =
      (erOverstyrt && fieldValue.fastsattBelop) ||
      (erFrilanser(fieldValue.aktivitetStatus) && frilansInntektValues?.fastsattBelop) ||
      (erArbeidstaker(fieldValue.aktivitetStatus) &&
        fieldValue.arbeidsgiverId &&
        getFastsattBelopFromArbeidstakerInntekt(arbeidstakerInntektValues, fieldValue.arbeidsgiverId)) ||
      (erDagpenger(fieldValue.aktivitetStatus) && dagpengerInntektValues?.fastsattBelop) ||
      (erKunstigAndel(fieldValue.arbeidsgiverId) && kunstigAndelInntektValues?.fastsattBelop) ||
      (erSelvstendigNæringsdrivende(fieldValue.aktivitetStatus) &&
        selvstendigNæringsdrivendeInntektValues?.fastsattBelop) ||
      (erMilitærEllerSivil(fieldValue.aktivitetStatus) && militærEllerSivilInntektValues?.fastsattBelop) ||
      fieldValue.fastsattBelop;

    return {
      andelsnr: fieldValue.andelsnr,
      fastsattBelop: removeSpacesFromNumber(fastsattBelop),
      inntektskategori: fieldValue.inntektskategori,
      nyAndel: fieldValue.nyAndel,
      lagtTilAvSaksbehandler: fieldValue.lagtTilAvSaksbehandler,
      aktivitetStatus: fieldValue.aktivitetStatus,
      arbeidsforholdId: fieldValue.arbeidsforholdId,
      arbeidsgiverId: fieldValue.arbeidsgiverId,
    };
  };

  return values
    .filter(({ kanRedigereInntekt }) => kanRedigereInntekt)
    .filter(
      ({ fastsattBelop, aktivitetStatus, arbeidsgiverId }) =>
        (fastsattBelop !== null && fastsattBelop !== '') ||
        (erFrilanser(aktivitetStatus) && frilansInntektValues?.fastsattBelop) ||
        (erArbeidstaker(aktivitetStatus) &&
          arbeidsgiverId &&
          getFastsattBelopFromArbeidstakerInntekt(arbeidstakerInntektValues, arbeidsgiverId)) ||
        erKunstigAndel(arbeidsgiverId) ||
        (erDagpenger(aktivitetStatus) && dagpengerInntektValues?.fastsattBelop) ||
        (erSelvstendigNæringsdrivende(aktivitetStatus) && selvstendigNæringsdrivendeInntektValues?.fastsattBelop) ||
        (erMilitærEllerSivil(aktivitetStatus) && militærEllerSivilInntektValues?.fastsattBelop),
    )
    .map(transformAndel);
};

InntektFieldArray.buildInitialValues = (
  andeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): AndelFieldValue[] => {
  if (!andeler || andeler.length === 0) {
    return [];
  }
  return andeler.map(a => mapAndelToField(a, arbeidsgiverOpplysningerPerId, kodeverkSamling));
};
