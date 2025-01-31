import React, { useCallback, useEffect } from 'react';
import { useFieldArray, UseFieldArrayAppend, UseFieldArrayRemove, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { ErrorMessage, Label, Table } from '@navikt/ds-react';

import { useCustomValidation } from '@navikt/ft-form-hooks';
import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import {
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  KodeverkMedNavn,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  ArbeidstakerInntektValues,
  DagpengerinntektValues,
  FaktaOmBeregningAksjonspunktValues,
  FrilansinntektValues,
  MilitærEllerSivilInntektValues,
  SelvstendigNæringsdrivendeInntektValues,
} from '../../typer/FaktaBeregningTypes';
import { AndelFieldValue, InntektTransformed } from '../../typer/FieldValues';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import {
  erOverstyring,
  getFastsattBelopFromArbeidstakerInntekt,
  getKanRedigereInntekt,
  mapAndelToField,
  skalFastsetteInntektForAndel,
} from './BgFaktaUtils';
import { getHeaderTextCodes, InntektFieldArrayAndelRow } from './InntektFieldArrayRow';
import { SummaryRow } from './SummaryRow';
import { validateMinstEnFastsatt, validateUlikeAndeler } from './ValidateAndelerUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

const finnStatus = (aktivitetStatuser: KodeverkMedNavn[], status: string): string => {
  const navn = aktivitetStatuser.find(({ kode }) => kode === status)?.navn;
  if (!navn) {
    throw new Error('Fant ikke aktivitetstatus med navn' + status);
  }
  return navn;
};

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]): AndelFieldValue => ({
  andel: finnStatus(aktivitetStatuser, AktivitetStatus.DAGPENGER),
  aktivitetStatus: AktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const lagNyMS = (aktivitetStatuser: KodeverkMedNavn[]): AndelFieldValue => ({
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

const createBruttoBGSummaryRow = (
  fields: AndelFieldValue[],
  readOnly: boolean,
  beregningsgrunnlag: Beregningsgrunnlag,
) => (
  <SummaryRow
    key="summaryRow"
    readOnly={readOnly}
    skalVisePeriode={skalVisePeriode(fields)}
    skalViseRefusjon={skalViseRefusjon(fields)}
    beregningsgrunnlag={beregningsgrunnlag}
  />
);

const findAktivitetStatusIndex = (fields: AndelFieldValue[], aktivitetStatusKode: string) => {
  let index = -1;
  fields.forEach((field, nyIndex) => {
    if (field.aktivitetStatus === aktivitetStatusKode) {
      index = nyIndex;
    }
  });
  return index;
};

const fjernEllerLeggTilAktivitetStatus = (
  fields: AndelFieldValue[],
  aktivitetStatusKode: string,
  skalHaAndelMedAktivitetstatus: boolean,
  skalFjerne: (field: AndelFieldValue) => boolean,
  nyStatusAndel: AndelFieldValue,
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  const statusIndex = findAktivitetStatusIndex(fields, aktivitetStatusKode);
  if (statusIndex !== -1) {
    const field = fields[statusIndex];
    if (skalFjerne(field)) {
      remove(statusIndex);
    }
  }
  if (statusIndex !== -1) {
    return;
  }
  if (skalHaAndelMedAktivitetstatus) {
    append({
      ...nyStatusAndel,
    });
  }
};

const erFrilanser = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.FRILANSER;
const erArbeidstaker = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.ARBEIDSTAKER;
const erDagpenger = (aktivitetStatus: string): boolean => aktivitetStatus === AktivitetStatus.DAGPENGER;
const erSelvstendigNæringsdrivende = (aktivitetStatus: string): boolean =>
  aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE;
const erMilitærEllerSivil = (aktivitetStatus: string): boolean =>
  aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL;

export const leggTilDagpengerOmBesteberegning = (
  fields: AndelFieldValue[],
  skalHaBesteberegning: boolean,
  aktivitetStatuser: KodeverkMedNavn[],
  skalKunneLeggeTilDagpenger: boolean,
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    AktivitetStatus.DAGPENGER,
    skalHaBesteberegning,
    (andel: AndelFieldValue) => !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && !!andel.lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
    remove,
    append,
  );
};

const fjernEllerLeggTilMilitær = (
  fields: AndelFieldValue[],
  skalHaMilitær: boolean,
  aktivitetStatuser: KodeverkMedNavn[],
  getKanRedigereInntektCallback: () => void,
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

  if (erOverstyring(formValues)) {
    return validateEnFastsattVedOverstyring(fields, intl);
  }

  return null;
};

type Props = {
  readOnly: boolean;
  skalKunneLeggeTilDagpengerManuelt: boolean;
  skalHaMilitær?: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
};

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

  const getKanRedigereInntektCallback = useCallback(
    () => getKanRedigereInntekt(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );

  useEffect(() => {
    const currentFields = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`);
    const aktivitetStatuser = kodeverkSamling[KodeverkType.AKTIVITET_STATUS];
    if (currentFields) {
      fjernEllerLeggTilMilitær(
        currentFields,
        !!skalHaMilitær,
        aktivitetStatuser,
        getKanRedigereInntektCallback,
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
  if (!faktaOmBeregning) {
    return null;
  }
  const tablerows = fields.map((field, index) => {
    return (
      <InntektFieldArrayAndelRow
        key={field.id}
        field={field}
        skalVisePeriode={skalVisePeriode(fields)}
        skalViseRefusjon={skalViseRefusjon(fields)}
        skalViseSletteknapp={skalViseSletteknapp(index, fields, readOnly)}
        readOnly={readOnly}
        removeAndel={removeAndel(index, remove)}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        rowName={`${fieldArrayName}.${index}`}
        skalFastsetteInntektForAndel={skalFastsetteInntektForAndel(formValues, faktaOmBeregning, beregningsgrunnlag)}
      />
    );
  });

  if (tablerows.length === 0) {
    return null;
  }
  tablerows.push(createBruttoBGSummaryRow(fields, readOnly, beregningsgrunnlag));
  return (
    <div>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            {getHeaderTextCodes(skalVisePeriode(fields), skalViseRefusjon(fields)).map(header => {
              const alginRightHeaders = [
                'BeregningInfoPanel.FordelingBG.Fordeling',
                'BeregningInfoPanel.FordelingBG.Refusjonskrav',
                'BeregningInfoPanel.FordelingBG.Inntektskategori',
              ];
              const alignRight = alginRightHeaders.includes(header);
              return (
                <Table.HeaderCell key={header} scope="col" align={alignRight ? 'right' : 'left'}>
                  <Label size="small" as="span">
                    <FormattedMessage id={header} />
                  </Label>
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>{tablerows}</Table.Body>
      </Table>
      <VerticalSpacer eightPx />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

InntektFieldArray.transformValues = (
  values: AndelFieldValue[] | undefined,
  frilansInntektValues: FrilansinntektValues | undefined,
  arbeidstakerInntektValues: ArbeidstakerInntektValues[] | undefined,
  dagpengerInntektValues: DagpengerinntektValues | undefined,
  selvstendigNæringsdrivendeInntektValues: SelvstendigNæringsdrivendeInntektValues | undefined,
  militærEllerSivilInntektValues: MilitærEllerSivilInntektValues | undefined,
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
