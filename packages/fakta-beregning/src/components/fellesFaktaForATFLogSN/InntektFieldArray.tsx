import { formHooks } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  KodeverkMedNavn,
} from '@navikt/ft-types';
import { Table, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isArrayEmpty, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent, useEffect } from 'react';
import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import { IntlShape } from 'react-intl';
import { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import AndelFieldValue, { InntektTransformed } from '../../typer/FieldValues';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import AddDagpengerAndelButton from './AddDagpengerAndelButton';
import { getKanRedigereInntekt, mapAndelToField } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import InntektFieldArrayAndelRow, { getHeaderTextCodes } from './InntektFieldArrayRow';
import SummaryRow from './SummaryRow';
import {
  SortedAndelInfo,
  validateUlikeAndeler,
  validateUlikeAndelerWithGroupingFunction,
} from './ValidateAndelerUtils';
import VurderFaktaContext from './VurderFaktaContext';

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]): AndelFieldValue => ({
  andel: aktivitetStatuser.find(({ kode }) => kode === AktivitetStatus.DAGPENGER).navn,
  aktivitetStatus: AktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const lagNyMS = (aktivitetStatuser: KodeverkMedNavn[]): AndelFieldValue => ({
  andel: aktivitetStatuser.find(({ kode }) => kode === AktivitetStatus.MILITAER_ELLER_SIVIL).navn,
  aktivitetStatus: AktivitetStatus.MILITAER_ELLER_SIVIL,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.ARBEIDSTAKER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

// const getErrorMessage = (error, isBeregningFormDirty, isSubmitSuccessful) =>
//   error && isBeregningFormDirty && !isSubmitSuccessful ? error : null;

const skalViseSletteknapp = (index, fields, readOnly) => fields.at(index).skalKunneEndreAktivitet === true && !readOnly;

const skalViseRefusjon = fields => {
  let skalVise = false;
  fields.forEach((id, index) => {
    const field = fields.at(index);
    if (field.refusjonskrav !== '' && field.refusjonskrav !== null && field.refusjonskrav !== undefined) {
      skalVise = true;
    }
  });
  return skalVise;
};

const skalVisePeriode = fields => {
  let skalVise = false;
  fields.forEach((id, index) => {
    const field = fields.at(index);
    if (field.arbeidsgiverId !== '') {
      skalVise = true;
    }
  });
  return skalVise;
};

const removeAndel = (index, remove) => () => {
  remove(index);
};

const createAndelerTableRows = (
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[],
  readOnly,
  beregningsgrunnlag,
  isAksjonspunktClosed,
  alleKodeverk,
  fieldArrayName: string,
  remove: UseFieldArrayRemove,
) =>
  fields.map((field, index) => (
    <InntektFieldArrayAndelRow
      key={field.id}
      field={field}
      skalVisePeriode={skalVisePeriode(fields)}
      skalViseRefusjon={skalViseRefusjon(fields)}
      skalViseSletteknapp={skalViseSletteknapp(index, fields, readOnly)}
      readOnly={readOnly}
      removeAndel={removeAndel(index, remove)}
      beregningsgrunnlag={beregningsgrunnlag}
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      rowName={`${fieldArrayName}.${index}`}
    />
  ));

const createBruttoBGSummaryRow = (fields, readOnly, beregningsgrunnlag) => (
  <SummaryRow
    readOnly={readOnly}
    skalVisePeriode={skalVisePeriode(fields)}
    skalViseRefusjon={skalViseRefusjon(fields)}
    beregningsgrunnlag={beregningsgrunnlag}
  />
);

const findAktivitetStatusIndex = (
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[],
  aktivitetStatusKode: string,
) => {
  let index = -1;
  fields.forEach((id, nyIndex) => {
    const field = fields.at(nyIndex);
    if (field.aktivitetStatus === aktivitetStatusKode) {
      index = nyIndex;
    }
  });
  return index;
};

const harDagpenger = (fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[]) =>
  findAktivitetStatusIndex(fields, AktivitetStatus.DAGPENGER) !== -1;

const fjernEllerLeggTilAktivitetStatus = (
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[],
  aktivitetStatusKode: string,
  skalHaAndelMedAktivitetstatus: boolean,
  skalFjerne: (field: FieldArrayWithId<VurderFaktaBeregningFormValues>) => boolean,
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
    append(nyStatusAndel);
  }
};

export const leggTilDagpengerOmBesteberegning = (
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[],
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
    (andel: FieldArrayWithId<VurderFaktaBeregningFormValues>) =>
      !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && (andel as any).lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
    remove,
    append,
  );
};

const fjernEllerLeggTilMilitær = (
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[],
  skalHaMilitær: boolean,
  aktivitetStatuser: KodeverkMedNavn[],
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

type OwnProps = {
  readOnly: boolean;
  skalKunneLeggeTilDagpengerManuelt: boolean;
  skalHaMilitær?: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  validate: (
    values: AndelFieldValue[],
    erKunYtelse: boolean,
    skalFastsetteInntekt: (andel) => boolean,
    intl: IntlShape,
  ) => any;
  buildInitialValues: (
    andeler: AndelForFaktaOmBeregning[],
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    alleKodeverk: AlleKodeverk,
  ) => AndelFieldValue[];
  transformValues: (values: AndelFieldValue[]) => InntektTransformed[];
}

/**
 *  InntektFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for andeler
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const InntektFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  // isBeregningFormDirty,
  skalKunneLeggeTilDagpengerManuelt,
  beregningsgrunnlag,
  isAksjonspunktClosed,
  alleKodeverk,
}) => {
  const { getValues, control } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const fieldArrayName = `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.inntektFieldArray`;
  const { fields, remove, append, update } = formHooks.useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.inntektFieldArray',
  });
  const formValues = getValues();
  // const tilfeller = beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
  // ? beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller.map(kode => kode)
  // : [];
  const skalHaBesteberegning = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderbesteberegningField`,
  });

  const skalHaMilitær = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderMilitær`,
  });

  useEffect(() => {
    const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS];
    fjernEllerLeggTilMilitær(fields, skalHaMilitær, aktivitetStatuser, remove, append);
    leggTilDagpengerOmBesteberegning(
      fields,
      skalHaBesteberegning,
      aktivitetStatuser,
      skalKunneLeggeTilDagpengerManuelt,
      remove,
      append,
    );
  }, [skalHaBesteberegning, skalHaMilitær, fields, skalKunneLeggeTilDagpengerManuelt]);

  const updateKanRedigereInntekt = (index: number, kanRedigereInntekt: boolean): void => {
    const currVal = formValues.vurderFaktaBeregningForm[aktivtBeregningsgrunnlagIndeks].inntektFieldArray[index];
    // eslint-disable-next-line no-console
    console.log('oppdaterer inntekt');
    update(index, {
      ...currVal,
      kanRedigereInntekt,
    });
  };

  useEffect(() => {
    fields.forEach((field, index) => {
      const currentKanRedigereInntekt = field.kanRedigereInntekt;
      const kanRedigereInntekt = getKanRedigereInntekt(
        formValues.vurderFaktaBeregningForm[aktivtBeregningsgrunnlagIndeks],
        beregningsgrunnlag,
      )(field);
      if (currentKanRedigereInntekt !== kanRedigereInntekt) {
        updateKanRedigereInntekt(index, kanRedigereInntekt);
      }
    });
  }, [skalHaBesteberegning, skalHaMilitær, fields, skalKunneLeggeTilDagpengerManuelt]);

  const tablerows = createAndelerTableRows(
    fields,
    readOnly,
    beregningsgrunnlag,
    isAksjonspunktClosed,
    alleKodeverk,
    fieldArrayName,
    remove,
  );
  if (tablerows.length === 0) {
    if (skalKunneLeggeTilDagpengerManuelt) {
      return (
        // TODO: Fix validering
        // <SkjemaGruppeMedFeilviser name={fieldArrayName} validate={[]}>
        <>
          {!readOnly && !harDagpenger(fields) && (
            <AddDagpengerAndelButton leggTilAndel={append} alleKodeverk={alleKodeverk} />
          )}
          <VerticalSpacer eightPx />
        </>
        // </SkjemaGruppeMedFeilviser>
      );
    }
    return null;
  }
  tablerows.push(createBruttoBGSummaryRow(fields, readOnly, beregningsgrunnlag));
  return (
    // <NavFieldGroup errorMessage={getErrorMessage(errors, isDirty, isSubmitSuccessful)}>
    // TODO: Fix validering
    // <SkjemaGruppeMedFeilviser name={fieldArrayName} validate={[]}>
    <>
      <Table
        headerTextCodes={getHeaderTextCodes(skalVisePeriode(fields), skalViseRefusjon(fields))}
        noHover
        classNameTable={styles.inntektTable}
      >
        {tablerows}
      </Table>
      {!readOnly && skalKunneLeggeTilDagpengerManuelt && !harDagpenger(fields) && (
        <AddDagpengerAndelButton leggTilAndel={append} alleKodeverk={alleKodeverk} />
      )}
      <VerticalSpacer eightPx />
    </>
    // </SkjemaGruppeMedFeilviser>
    // </NavFieldGroup>
  );
};

InntektFieldArray.defaultProps = {
  skalKunneLeggeTilDagpengerManuelt: false,
};

InntektFieldArray.transformValues = (values: AndelFieldValue[]): InntektTransformed[] =>
  values
    ? values
        .filter(({ kanRedigereInntekt }) => kanRedigereInntekt)
        .filter(({ fastsattBelop }) => fastsattBelop !== null && fastsattBelop !== '')
        .map(fieldValue => ({
          andelsnr: fieldValue.andelsnr,
          fastsattBelop: removeSpacesFromNumber(fieldValue.fastsattBelop),
          inntektskategori: fieldValue.inntektskategori,
          nyAndel: fieldValue.nyAndel,
          lagtTilAvSaksbehandler: fieldValue.lagtTilAvSaksbehandler,
          aktivitetStatus: fieldValue.aktivitetStatus,
          arbeidsforholdId: fieldValue.arbeidsforholdId,
          arbeidsgiverId: fieldValue.arbeidsgiverId,
        }))
    : null;

const mapAndelToSortedObject = (value: AndelFieldValue): SortedAndelInfo => {
  const { andel, inntektskategori, arbeidsforholdId } = value;
  return { andelsinfo: andel, arbeidsforholdId, inntektskategori };
};

InntektFieldArray.validate = (values: AndelFieldValue[], erKunYtelse, skalFastsetteInntekt, intl: IntlShape) => {
  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values.map(andelFieldValues => {
    const fieldErrors = {
      andel: null,
      fastsattBelop: null,
      inntektskategori: null,
    };
    fieldErrors.andel = required(andelFieldValues.andel);
    fieldErrors.fastsattBelop = skalFastsetteInntekt(andelFieldValues)
      ? required(andelFieldValues.fastsattBelop)
      : null;
    fieldErrors.inntektskategori = required(andelFieldValues.inntektskategori);
    return fieldErrors.andel || fieldErrors.fastsattBelop || fieldErrors.inntektskategori ? fieldErrors : null;
  });
  if (arrayErrors.some(errors => errors !== null)) {
    return arrayErrors;
  }
  if (isArrayEmpty(values)) {
    return null;
  }
  const ulikeAndelerError = erKunYtelse
    ? validateUlikeAndelerWithGroupingFunction(values, mapAndelToSortedObject, intl)
    : validateUlikeAndeler(values, intl);
  if (ulikeAndelerError) {
    return { _error: ulikeAndelerError };
  }
  return null;
};

InntektFieldArray.buildInitialValues = (
  andeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): AndelFieldValue[] => {
  if (!andeler || andeler.length === 0) {
    return [];
  }
  return andeler.map(a => mapAndelToField(a, arbeidsgiverOpplysningerPerId, alleKodeverk));
};

export default InntektFieldArray;
