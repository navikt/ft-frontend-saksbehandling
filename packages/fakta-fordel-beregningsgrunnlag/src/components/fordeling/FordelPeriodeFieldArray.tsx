import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Checkbox, Detail, ErrorMessage, Label } from '@navikt/ds-react';
import { formatCurrencyNoKr, getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow, FloatRight, Image, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import {
  AktivitetStatus,
  BeregningsgrunnlagAndelType,
  Inntektskategori,
  isSelvstendigNæringsdrivende,
  KodeverkType,
} from '@navikt/ft-kodeverk';
import { formHooks, InputField, SelectField, useCustomValidation } from '@navikt/ft-form-hooks';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { UseFormGetValues } from 'react-hook-form';
import {
  validateSumFastsattBelop,
  validateSumFastsattForUgraderteAktiviteter,
  validateSumRefusjon,
  validateTotalRefusjonPrArbeidsforhold,
  validateUlikeAndeler,
  validerBGGraderteAndeler,
} from './ValidateFordelteAndelerUtils';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import {
  BGFordelArbeidsforhold,
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import finnUnikeArbeidsforhold from './FinnUnikeArbeidsforhold';
import addCircleIcon from '../../images/add-circle.svg';

import styles from './renderFordelBGFieldArray.module.css';

const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';
export const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

const defaultBGFordeling = (periodeUtenAarsak: boolean): any => ({
  nyAndel: true,
  kilde: 'SAKSBEHANDLER_FORDELING',
  fastsattBelop: formatCurrencyNoKr(0),
  lagtTilAvSaksbehandler: true,
  refusjonskravFraInntektsmelding: 0,
  belopFraInntektsmelding: null,
  skalRedigereInntekt: !periodeUtenAarsak,
});

const lagVisningsnavn = (
  arbeidsforhold: BGFordelArbeidsforhold,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!arbeidsforhold.arbeidsgiverIdent || !arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]) {
    return arbeidsforhold.arbeidsforholdType
      ? getKodeverknavn(arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return createVisningsnavnForAktivitetFordeling(
    arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent],
    arbeidsforhold.eksternArbeidsforholdId,
  );
};

const arbeidsgiverSelectValues = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] =>
  arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
    </option>
  ));

const arbeidsgiverSelectValuesForKunYtelse = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  intl: IntlShape,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const nedtrekksvalgListe = arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
    </option>
  ));
  nedtrekksvalgListe.push(
    <option value={BeregningsgrunnlagAndelType.BRUKERS_ANDEL} key={BeregningsgrunnlagAndelType.BRUKERS_ANDEL}>
      {intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Ytelse' })}
    </option>,
  );
  return nedtrekksvalgListe;
};

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]): ReactElement[] =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

const sumEllerTomString = (sum: number): string => {
  if (sum > 0) {
    return formatCurrencyNoKr(sum) || '';
  }
  return '';
};

const summerFordeling = (
  vilkårperiodeFieldIndex: number,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const field = fields[index];
    const fastsattBeløp = removeSpacesFromNumber(
      getValues(`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`),
    );
    if (field.skalRedigereInntekt) {
      sum += fastsattBeløp || 0;
    } else {
      sum += field.readOnlyBelop ? fastsattBeløp : 0;
    }
  }
  return sumEllerTomString(sum);
};

const summerBeregningsgrunnlagPrAar = (fields: FordelBeregningsgrunnlagAndelValues[]): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const field = fields[index];
    if (field.beregningsgrunnlagPrAar) {
      sum += field.beregningsgrunnlagPrAar ? Number(removeSpacesFromNumber(field.beregningsgrunnlagPrAar)) : 0;
    }
  }
  return sumEllerTomString(sum);
};

const isSelvstendigOrFrilanser = (fieldVal: FordelBeregningsgrunnlagAndelValues): boolean => {
  if (!fieldVal.inntektskategori) {
    return false;
  }
  return (
    isSelvstendigNæringsdrivende(fieldVal.inntektskategori) || Inntektskategori.FRILANSER === fieldVal.inntektskategori
  );
};

const onKeyDown =
  (fields: FordelBeregningsgrunnlagAndelValues[], periodeUtenAarsak: boolean): ((arg: React.KeyboardEvent) => void) =>
  ({ key }) => {
    if (key === 'Enter') {
      fields.push(defaultBGFordeling(periodeUtenAarsak));
    }
  };

const finnArbeidsforholdForAndel = (
  arbeidsforholdListe: BGFordelArbeidsforhold[],
  val: string,
): BGFordelArbeidsforhold | undefined => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find(arbeidsforhold => arbeidsforhold.andelsnr === andelsnr);
};

const finnAktivitetStatus = (fields: FordelBeregningsgrunnlagAndelValues[], val: string): string | undefined => {
  const andelsnr = Number(val);
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].andelsnr === andelsnr) {
      return fields[index].aktivitetStatus;
    }
  }
  return undefined;
};

const setArbeidsforholdInfo = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  val: string,
  updateFieldMethod: any,
): void => {
  const field = fields[index];
  const arbeidsforhold = finnArbeidsforholdForAndel(arbeidsforholdList, val);
  if (arbeidsforhold) {
    field.arbeidsforholdId = arbeidsforhold.arbeidsforholdId;
    field.arbeidsgiverNavn = arbeidsforhold.arbeidsgiverNavn;
    field.arbeidsgiverId = arbeidsforhold.arbeidsgiverIdent;
    field.arbeidsperiodeFom = arbeidsforhold.startdato;
    field.arbeidsperiodeTom = arbeidsforhold.opphoersdato;
    field.andelsnrRef = arbeidsforhold.andelsnr;
    field.aktivitetStatus = finnAktivitetStatus(fields, val);
    field.nyttArbeidsforhold = arbeidsforhold.nyttArbeidsforhold;
    field.arbeidsforholdType = arbeidsforhold.arbeidsforholdType;
    field.beregningsperiodeTom = arbeidsforhold.beregningsperiodeTom;
    field.beregningsperiodeFom = arbeidsforhold.beregningsperiodeFom;
    updateFieldMethod(index, field);
  }
};

const arbeidsforholdReadOnlyOrSelect = (
  vilkårperiodeFieldIndex: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  fieldname: string,
  selectVals: ReactElement[],
  isReadOnly: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  updateFieldMethod: any,
): ReactElement => (
  <>
    {!fields[index].nyAndel && (
      <InputField
        name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.andel`}
        className={styles.storBredde}
        readOnly
      />
    )}
    {fields[index].nyAndel && (
      <SelectField
        name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.andel`}
        className={styles.storBredde}
        label=""
        selectValues={selectVals}
        readOnly={isReadOnly}
        validate={[required]}
        onChange={event =>
          setArbeidsforholdInfo(fields, index, arbeidsforholdList, event.target.value, updateFieldMethod)
        }
      />
    )}
  </>
);

export const lagBelopKolonne = (
  vilkårperiodeFieldIndex: number,
  fieldname: string,
  index: number,
  readOnly: boolean,
  skalIkkeRedigereInntekt: boolean,
  isAksjonspunktClosed: boolean,
): ReactElement => {
  if (skalIkkeRedigereInntekt) {
    return (
      <TableColumn>
        <FloatRight>
          <InputField
            name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.readOnlyBelop`}
            className={styles.litenBredde}
            parse={parseCurrencyInput}
            readOnly
            isEdited={false}
          />
        </FloatRight>
      </TableColumn>
    );
  }
  return (
    <TableColumn className={styles.rightAlignInput}>
      <FloatRight>
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`}
          parse={parseCurrencyInput}
          readOnly={readOnly}
          validate={[required, maxValueFormatted(178956970)]}
          isEdited={isAksjonspunktClosed && !skalIkkeRedigereInntekt}
          className={styles.litenBredde}
        />
      </FloatRight>
    </TableColumn>
  );
};

const skalViseSletteknapp = (
  index: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  readOnly: boolean,
): boolean => (fields[index].nyAndel || fields[index].lagtTilAvSaksbehandler) && !readOnly;

const createAndelerTableRows = (
  vilkårperiodeFieldIndex: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  isAksjonspunktClosed: boolean,
  readOnly: boolean,
  inntektskategoriKoder: KodeverkMedNavn[],
  skalIkkeRedigereInntekt: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  selectVals: ReactElement[],
  gjelderGradering: boolean,
  fieldname: string,
  removeFromFieldsMethod: any,
  updateFieldMethod: any,
): ReactElement[] => {
  const skalIkkeEndres = readOnly || skalIkkeRedigereInntekt;
  return fields.map((field, index) => (
    <TableRow key={field.id}>
      <TableColumn>
        {arbeidsforholdReadOnlyOrSelect(
          vilkårperiodeFieldIndex,
          fields,
          index,
          fieldname,
          selectVals,
          skalIkkeEndres,
          arbeidsforholdList,
          updateFieldMethod,
        )}
        {!isSelvstendigOrFrilanser(fields[index]) && (
          <div className={styles.wordwrap}>
            <InputField
              name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.arbeidsperiodeFom -
              FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.arbeidsperiodeTom`}
              readOnly
            />
          </div>
        )}
      </TableColumn>
      {gjelderGradering && (
        <TableColumn>
          <InputField
            name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.andelIArbeid`}
            readOnly
            className={styles.litenBredde}
            // @ts-ignore Fiks
            normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
          />
        </TableColumn>
      )}
      <TableColumn
        className={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon ? undefined : styles.rightAlignInput}
      >
        <FloatRight>
          <InputField
            name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.refusjonskrav`}
            readOnly={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon}
            parse={parseCurrencyInput}
            className={styles.litenBredde}
            validate={fields[index].skalKunneEndreRefusjon ? [required, maxValueFormatted(178956970)] : []}
          />
        </FloatRight>
      </TableColumn>
      <TableColumn>
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.beregningsgrunnlagPrAar`}
          className={styles.litenBredde}
          readOnly
          parse={parseCurrencyInput}
        />
      </TableColumn>
      {lagBelopKolonne(
        vilkårperiodeFieldIndex,
        fieldname,
        index,
        readOnly,
        skalIkkeRedigereInntekt,
        isAksjonspunktClosed,
      )}
      <TableColumn className={skalIkkeEndres ? styles.shortLeftAligned : undefined}>
        <FloatRight>
          <SelectField
            label=""
            name={`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.inntektskategori`}
            className={styles.storBredde}
            validate={[required]}
            selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
            readOnly={skalIkkeEndres}
          />
        </FloatRight>
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp(index, fields, skalIkkeEndres) && (
          <button className={styles.buttonRemove} type="button" onClick={() => removeFromFieldsMethod(index)} />
        )}
      </TableColumn>
    </TableRow>
  ));
};

const createBruttoBGSummaryRow = (
  sumFordeling: string,
  sumBeregningsgrunnlagPrAar: string,
  gjelderGradering: boolean,
): ReactElement => (
  <TableRow key="bruttoBGSummaryRow">
    <TableColumn>
      <FormattedMessage id="BeregningInfoPanel.FordelBG.Sum" />
    </TableColumn>
    {gjelderGradering && <TableColumn />}
    <TableColumn />
    <TableColumn>
      <Label size="small">{sumBeregningsgrunnlagPrAar}</Label>
    </TableColumn>
    <TableColumn>
      <Label size="small">{sumFordeling}</Label>
    </TableColumn>
    <TableColumn />
    <TableColumn />
  </TableRow>
);

const getHeaderTextCodes = (gjelderGradering: boolean): string[] => {
  const headerCodes = [];
  headerCodes.push('BeregningInfoPanel.FordelBG.Andel');
  if (gjelderGradering) {
    headerCodes.push('BeregningInfoPanel.FordelBG.AndelIArbeid');
  }
  headerCodes.push('BeregningInfoPanel.FordelBG.Refusjonskrav');
  headerCodes.push('BeregningInfoPanel.FordelBG.Beregningsgrunnlag');
  headerCodes.push('BeregningInfoPanel.FordelBG.Fordeling');
  headerCodes.push('BeregningInfoPanel.FordelBG.Inntektskategori');
  return headerCodes;
};

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  skalIkkeRedigereInntekt: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldName: string;
  skalKunneEndreRefusjon: boolean;
  sumIPeriode: number;
  periodeFom: string;
  vilkårperiodeFieldIndex: number;
  setFieldArrayToRepeat: (fieldArrayName: string) => void;
  fieldArrayToRepeat: string;
};

const getGjelderGradering = (beregningsgrunnlag: Beregningsgrunnlag): boolean => {
  const arbeidTilFordeling =
    beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.arbeidsforholdTilFordeling || [];
  return arbeidTilFordeling.some(a => a.perioderMedGraderingEllerRefusjon?.some(p => p.erGradering));
};

/**
 *  RenderFordelBGFieldArray
 *
 * Presentasjonskomponent: Viser fordeling av brutto beregningsgrunnlag ved endret beregningsgrunnlag
 * Komponenten må rendres som komponenten til et FieldArray.
 */
const FordelPeriodeFieldArray: FunctionComponent<OwnProps> = ({
  fieldName,
  readOnly,
  skalIkkeRedigereInntekt,
  isAksjonspunktClosed,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
  beregningsgrunnlag,
  skalKunneEndreRefusjon,
  sumIPeriode,
  periodeFom,
  vilkårperiodeFieldIndex,
  setFieldArrayToRepeat,
  fieldArrayToRepeat,
}) => {
  const { control, watch, getValues } = formHooks.useFormContext<FordelBeregningsgrunnlagFormValues>();
  const fieldArrayName = `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}`;
  const { fields, append, remove, update } = formHooks.useFieldArray({
    control,
    name: `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}`,
  });

  useEffect(() => {
    if (fieldArrayToRepeat && fieldArrayToRepeat !== fieldArrayName && !readOnly && !skalIkkeRedigereInntekt) {
      const formValues = getValues(fieldArrayToRepeat as `FORDEL_BEREGNING_FORM.${number}.${string}`);
      for (let index = 0; index < formValues.length; index += 1) {
        const matchendeAndelIndex = fields.findIndex(
          field =>
            field.andel === formValues[index].andel &&
            (field.inntektskategori === formValues[index].inntektskategori ||
              (!field.inntektskategori && !formValues[index].lagtTilAvSaksbehandler && !field.lagtTilAvSaksbehandler)),
        );
        if (matchendeAndelIndex > -1) {
          update(matchendeAndelIndex, {
            ...fields[matchendeAndelIndex],
            fastsattBelop: formValues[index].fastsattBelop,
            refusjonskrav: skalKunneEndreRefusjon
              ? formValues[index].refusjonskrav
              : fields[matchendeAndelIndex]?.refusjonskrav,
            inntektskategori: formValues[index].inntektskategori,
          });
        }
      }
    }
  }, [fieldArrayToRepeat]);

  const harKunYtelse =
    !!beregningsgrunnlag.aktivitetStatus &&
    beregningsgrunnlag.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
  const arbeidsforholdList = finnUnikeArbeidsforhold(beregningsgrunnlag);
  const sumFordeling = summerFordeling(vilkårperiodeFieldIndex, fieldName, fields, watch);
  const sumBeregningsgrunnlagPrAar = summerBeregningsgrunnlagPrAar(fields);
  const gjelderGradering = getGjelderGradering(beregningsgrunnlag);
  const inntektskategoriKoder = alleKodeverk[KodeverkType.INNTEKTSKATEGORI];
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const intl = useIntl();
  const selectVals = harKunYtelse
    ? arbeidsgiverSelectValuesForKunYtelse(arbeidsforholdList, intl, getKodeverknavn, arbeidsgiverOpplysningerPerId)
    : arbeidsgiverSelectValues(arbeidsforholdList, getKodeverknavn, arbeidsgiverOpplysningerPerId);
  const tablerows = createAndelerTableRows(
    vilkårperiodeFieldIndex,
    fields,
    isAksjonspunktClosed,
    readOnly,
    inntektskategoriKoder,
    skalIkkeRedigereInntekt,
    arbeidsforholdList,
    selectVals,
    gjelderGradering,
    fieldName,
    remove,
    update,
  );
  tablerows.push(createBruttoBGSummaryRow(sumFordeling, sumBeregningsgrunnlagPrAar, gjelderGradering));

  const valideringsresultat: string[] = [];

  const valider = (feilmelding?: string): void => {
    if (feilmelding) {
      valideringsresultat.push(feilmelding);
    }
  };
  // Fields settes også opp for perioder om ikke skal endres, disse trenger vi ikke validere.
  const fieldsMåValideres = fields.some((field: any) => !!field.skalRedigereInntekt || !!field.skalKunneEndreRefusjon);
  if (fieldsMåValideres) {
    valider(validateUlikeAndeler(vilkårperiodeFieldIndex, getValues, fieldName, fields, intl));
    valider(validateSumFastsattBelop(vilkårperiodeFieldIndex, getValues, fieldName, fields, sumIPeriode, intl));
    if (gjelderGradering) {
      valider(validerBGGraderteAndeler(vilkårperiodeFieldIndex, getValues, fieldName, fields, periodeFom, intl));
      valider(
        validateSumFastsattForUgraderteAktiviteter(
          vilkårperiodeFieldIndex,
          getValues,
          fieldName,
          fields,
          intl,
          beregningsgrunnlag.grunnbeløp,
          getKodeverknavn,
        ),
      );
    }
    if (skalKunneEndreRefusjon) {
      valider(
        validateSumRefusjon(vilkårperiodeFieldIndex, fields, fieldName, getValues, beregningsgrunnlag.grunnbeløp, intl),
      );
      valider(
        validateTotalRefusjonPrArbeidsforhold(
          vilkårperiodeFieldIndex,
          fields,
          fieldName,
          getValues,
          getKodeverknavn,
          arbeidsgiverOpplysningerPerId,
          intl,
        ),
      );
    }
  }
  const skjemaNavn = `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}.skjemagruppe`;
  const feilmeldinger = valideringsresultat.filter(fm => !!fm);
  const feilmeldingSomSkalVises = feilmeldinger.length > 0 ? feilmeldinger[0] : undefined;

  const errorMessage = useCustomValidation(skjemaNavn, feilmeldingSomSkalVises);

  const handleBenyttCheckbox = () => {
    if (fieldArrayName === fieldArrayToRepeat) {
      setFieldArrayToRepeat('');
    } else {
      setFieldArrayToRepeat(fieldArrayName);
    }
  };

  return (
    <div>
      <Table headerTextCodes={getHeaderTextCodes(gjelderGradering)} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && !skalIkkeRedigereInntekt && (
        <FlexRow className={styles.buttonRow}>
          <FlexColumn className={styles.flexColumn3}>
            {
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            }
            <div
              id="leggTilAndelDiv"
              onClick={() => append(defaultBGFordeling(skalIkkeRedigereInntekt))}
              onKeyDown={onKeyDown(fields, skalIkkeRedigereInntekt)}
              className={styles.addPeriode}
              role="button"
              tabIndex={0}
            >
              <Image className={styles.addCircleIcon} src={addCircleIcon} />
              <Detail size="small" className={styles.imageText}>
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
              </Detail>
            </div>
          </FlexColumn>
        </FlexRow>
      )}
      {!readOnly && !skalIkkeRedigereInntekt && (
        <Checkbox
          className={styles.benyttCheckbox}
          checked={fieldArrayName === fieldArrayToRepeat}
          onChange={handleBenyttCheckbox}
        >
          Benytt for alle perioder
        </Checkbox>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default FordelPeriodeFieldArray;
