import { formHooks, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';
import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  KodeverkMedNavn,
} from '@navikt/ft-types';
import { Table, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import { IntlShape, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import AndelFieldValue, { InntektTransformed } from '../../typer/FieldValues';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import AddDagpengerAndelButton from './AddDagpengerAndelButton';
import { erOverstyring, getKanRedigereInntekt, mapAndelToField, skalFastsetteInntektForAndel } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import InntektFieldArrayAndelRow, { getHeaderTextCodes } from './InntektFieldArrayRow';
import SummaryRow from './SummaryRow';
import { validateMinstEnFastsatt, validateUlikeAndeler } from './ValidateAndelerUtils';
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
  skalFastsetteInntektForAndelFunc,
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
      skalFastsetteInntektForAndel={skalFastsetteInntektForAndelFunc}
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

const findAktivitetStatusIndex = (fields: AndelFieldValue[], aktivitetStatusKode: string) => {
  let index = -1;
  fields.forEach((id, nyIndex) => {
    const field = fields.at(nyIndex);
    if (field.aktivitetStatus === aktivitetStatusKode) {
      index = nyIndex;
    }
  });
  return index;
};

const harDagpenger = (fields: AndelFieldValue[]) => findAktivitetStatusIndex(fields, AktivitetStatus.DAGPENGER) !== -1;

const fjernEllerLeggTilAktivitetStatus = (
  fields: AndelFieldValue[],
  aktivitetStatusKode: string,
  skalHaAndelMedAktivitetstatus: boolean,
  skalFjerne: (field: AndelFieldValue) => boolean,
  nyStatusAndel: AndelFieldValue,
  getKanRedigereInntektCallback,
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
      kanRedigereInntekt: getKanRedigereInntektCallback()(nyStatusAndel),
    });
  }
};

export const leggTilDagpengerOmBesteberegning = (
  fields: AndelFieldValue[],
  skalHaBesteberegning: boolean,
  aktivitetStatuser: KodeverkMedNavn[],
  skalKunneLeggeTilDagpenger: boolean,
  getKanRedigereInntektCallback: () => void,
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    AktivitetStatus.DAGPENGER,
    skalHaBesteberegning,
    (andel: AndelFieldValue) => !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && andel.lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
    getKanRedigereInntektCallback,
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
    getKanRedigereInntektCallback,
    remove,
    append,
  );
};

const validateEnFastsattVedOverstyring = (values: AndelFieldValue[], intl: IntlShape): any => {
  const minstEnFastsattFeilmelding = validateMinstEnFastsatt(values, intl);
  if (minstEnFastsattFeilmelding != null) {
    return minstEnFastsattFeilmelding;
  }
  return null;
};

const validate = (formValues: FaktaOmBeregningAksjonspunktValues, errors, intl) => () => {
  const harFeltFeil = errors && errors.length > 0;
  if (harFeltFeil) {
    return null;
  }

  const ulikeAndelerError = validateUlikeAndeler(formValues.inntektFieldArray, intl);

  if (ulikeAndelerError) {
    return ulikeAndelerError;
  }

  if (erOverstyring(formValues)) {
    return validateEnFastsattVedOverstyring(formValues.inntektFieldArray, intl);
  }

  return null;
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
  const { getValues, control, formState } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const { errors } = formState;
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const fieldArrayName = `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.inntektFieldArray`;
  const { fields, remove, append, update } = formHooks.useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.inntektFieldArray',
  });

  const formValues = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}` as 'vurderFaktaBeregningForm.0',
  });
  const skalHaBesteberegning = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderbesteberegningField`,
  });
  const skalHaMilitær = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderMilitær`,
  });
  const intl = useIntl();

  const getKanRedigereInntektCallback = useCallback(
    () => getKanRedigereInntekt(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );

  useEffect(() => {
    const currentFields = getValues(`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.inntektFieldArray`);
    const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS];
    fjernEllerLeggTilMilitær(
      currentFields,
      skalHaMilitær,
      aktivitetStatuser,
      getKanRedigereInntektCallback,
      remove,
      append,
    );
    leggTilDagpengerOmBesteberegning(
      currentFields,
      skalHaBesteberegning,
      aktivitetStatuser,
      skalKunneLeggeTilDagpengerManuelt,
      getKanRedigereInntektCallback,
      remove,
      append,
    );
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
  }, [skalHaBesteberegning, skalHaMilitær, skalKunneLeggeTilDagpengerManuelt]);

  const inntektFieldArrayErrors = errors?.vurderFaktaBeregningForm?.[aktivtBeregningsgrunnlagIndeks]?.inntektFieldArray;

  const validators = [validate(formValues, inntektFieldArrayErrors, intl)];

  const skalFastsetteInntektForAndelFunc = useCallback(
    () => skalFastsetteInntektForAndel(formValues, beregningsgrunnlag.faktaOmBeregning, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );

  const tablerows = createAndelerTableRows(
    fields,
    readOnly,
    beregningsgrunnlag,
    isAksjonspunktClosed,
    alleKodeverk,
    fieldArrayName,
    remove,
    skalFastsetteInntektForAndelFunc,
  );
  if (tablerows.length === 0) {
    if (skalKunneLeggeTilDagpengerManuelt) {
      return (
        <SkjemaGruppeMedFeilviser name={`${fieldArrayName}.skjemagruppe`} validate={validators}>
          <>
            {!readOnly && !harDagpenger(fields) && (
              <AddDagpengerAndelButton leggTilAndel={append} alleKodeverk={alleKodeverk} />
            )}
            <VerticalSpacer eightPx />
          </>
        </SkjemaGruppeMedFeilviser>
      );
    }
    return null;
  }
  tablerows.push(createBruttoBGSummaryRow(fields, readOnly, beregningsgrunnlag));
  return (
    <SkjemaGruppeMedFeilviser name={`${fieldArrayName}.skjemagruppe`} validate={validators}>
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
    </SkjemaGruppeMedFeilviser>
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
