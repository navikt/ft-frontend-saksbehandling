import { ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Checkbox, Detail, ErrorMessage, Label } from '@navikt/ds-react';

import { InputField, SelectField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import {
  AktivitetStatus,
  BeregningsgrunnlagAndelType,
  Inntektskategori,
  isSelvstendigNæringsdrivende,
  KodeverkType,
} from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { FloatRight, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  BGFordelArbeidsforhold,
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import { finnUnikeArbeidsforhold } from './FinnUnikeArbeidsforhold';
import {
  validateSumFastsattBelop,
  validateSumFastsattForUgraderteAktiviteter,
  validateSumRefusjon,
  validateTotalRefusjonPrArbeidsforhold,
  validateUlikeAndeler,
  validerBGGraderteAndeler,
} from './ValidateFordelteAndelerUtils';

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
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!arbeidsforhold.arbeidsgiverIdent || !arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]) {
    return arbeidsforhold.arbeidsforholdType
      ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(
          oat => oat.kode === arbeidsforhold.arbeidsforholdType,
        )?.navn || ''
      : '';
  }
  return createVisningsnavnForAktivitetFordeling(
    arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent],
    arbeidsforhold.eksternArbeidsforholdId,
  );
};

const arbeidsgiverSelectValues = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] =>
  arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
    </option>
  ));

const arbeidsgiverSelectValuesForKunYtelse = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  intl: IntlShape,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const nedtrekksvalgListe = arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
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

const finnArbeidsforholdForAndel = (
  arbeidsforholdListe: BGFordelArbeidsforhold[],
  val: string,
): BGFordelArbeidsforhold | undefined => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find(arbeidsforhold => arbeidsforhold.andelsnr === andelsnr);
};

const finnAktivitetStatus = (fields: FordelBeregningsgrunnlagAndelValues[], val: string): string | undefined => {
  const andelsnr = Number(val);
  return fields.find(field => field.andelsnr === andelsnr)?.aktivitetStatus;
};

const setArbeidsforholdInfo = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  val: string,
  updateFieldMethod: (index: number, obj: object) => void,
): void => {
  const field = fields[index];
  const arbeidsforhold = finnArbeidsforholdForAndel(arbeidsforholdList, val);
  if (arbeidsforhold) {
    field.arbeidsforholdId = arbeidsforhold.arbeidsforholdId;
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
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  selectVals: ReactElement[],
  isReadOnly: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  updateFieldMethod: (index: number, obj: object) => void,
  lagFeltNavn: (fieldIndex: number) => string,
): ReactElement => (
  <>
    {!fields[index].nyAndel && (
      <InputField name={`${lagFeltNavn(index)}.andel`} className={styles.storBredde} readOnly />
    )}
    {fields[index].nyAndel && (
      <SelectField
        name={`${lagFeltNavn(index)}.andel`}
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

const grunnlagInputKolonne = (
  readOnly: boolean,
  skalIkkeRedigereInntekt: boolean,
  isAksjonspunktClosed: boolean,
  fieldNavn: string,
): ReactElement => {
  if (skalIkkeRedigereInntekt) {
    return (
      <TableColumn>
        <FloatRight>
          <InputField
            name={`${fieldNavn}.readOnlyBelop`}
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
          name={`${fieldNavn}.fastsattBelop`}
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

const tittelKolonne = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  selectVals: ReactElement[],
  skalIkkeEndres: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  updateFieldMethod: any,
  lagFeltNavn: (fieldIndex: number) => string,
): ReactElement => (
  <TableColumn>
    {arbeidsforholdReadOnlyOrSelect(
      fields,
      index,
      selectVals,
      skalIkkeEndres,
      arbeidsforholdList,
      updateFieldMethod,
      lagFeltNavn,
    )}
    {!isSelvstendigOrFrilanser(fields[index]) && (
      <div className={styles.wordwrap}>
        <InputField
          name={`${lagFeltNavn(index)}.arbeidsperiodeFom - ${lagFeltNavn(index)}.arbeidsperiodeTom`}
          readOnly
        />
      </div>
    )}
  </TableColumn>
);

const graderingKolonne = (gjelderGradering: boolean, fieldNavn: string): ReactElement | null => {
  if (!gjelderGradering) return null;
  return (
    <TableColumn>
      <InputField
        name={`${fieldNavn}.andelIArbeid`}
        readOnly
        className={styles.litenBredde}
        normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2))}
      />
    </TableColumn>
  );
};

const refusjonKolonne = (
  skalIkkeEndres: boolean,
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  lagFeltNavn: (fieldIndex: number) => string,
): ReactElement => (
  <TableColumn className={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon ? undefined : styles.rightAlignInput}>
    <FloatRight>
      <InputField
        name={`${lagFeltNavn(index)}.refusjonskrav`}
        readOnly={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon}
        parse={parseCurrencyInput}
        className={styles.litenBredde}
        validate={fields[index].skalKunneEndreRefusjon ? [required, maxValueFormatted(178956970)] : []}
      />
    </FloatRight>
  </TableColumn>
);

const grunnlagKolonne = (fieldNavn: string): ReactElement => (
  <TableColumn>
    <InputField
      name={`${fieldNavn}.beregningsgrunnlagPrAar`}
      className={styles.litenBredde}
      readOnly
      parse={parseCurrencyInput}
    />
  </TableColumn>
);

const inntektskategoriKolonne = (
  skalIkkeEndres: boolean,
  fieldNavn: string,
  inntektskategoriKoder: KodeverkMedNavn[],
): ReactElement => (
  <TableColumn className={skalIkkeEndres ? styles.shortLeftAligned : undefined}>
    <FloatRight>
      <SelectField
        label=""
        name={`${fieldNavn}.inntektskategori`}
        className={styles.storBredde}
        validate={skalIkkeEndres ? [] : [required]}
        selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
        readOnly={skalIkkeEndres}
      />
    </FloatRight>
  </TableColumn>
);

const knappKolonne = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  skalIkkeEndres: boolean,
  removeFromFieldsMethod: (index?: number | number[]) => void,
): ReactElement => (
  <TableColumn>
    {skalViseSletteknapp(index, fields, skalIkkeEndres) && (
      <Button
        icon={<XMarkIcon aria-hidden className={styles.slettIkon} />}
        onClick={() => removeFromFieldsMethod(index)}
        type="button"
        variant="tertiary"
      />
    )}
  </TableColumn>
);

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

type Props = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  skalIkkeRedigereInntekt: boolean;
  kodeverkSamling: KodeverkForPanel;
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
export const FordelPeriodeFieldArray = ({
  fieldName,
  readOnly,
  skalIkkeRedigereInntekt,
  isAksjonspunktClosed,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
  beregningsgrunnlag,
  skalKunneEndreRefusjon,
  sumIPeriode,
  periodeFom,
  vilkårperiodeFieldIndex,
  setFieldArrayToRepeat,
  fieldArrayToRepeat,
}: Props) => {
  const { control, watch, getValues } = useFormContext<FordelBeregningsgrunnlagFormValues>();
  const fieldArrayName = `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}`;
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}`,
  });

  useEffect(() => {
    if (fieldArrayToRepeat && fieldArrayToRepeat !== fieldArrayName && !readOnly && !skalIkkeRedigereInntekt) {
      const formValues = getValues(fieldArrayToRepeat as `FORDEL_BEREGNING_FORM.${number}.${string}`);
      formValues.forEach(val => {
        const matchendeFieldIndex = fields.findIndex(
          field =>
            field.andel === val.andel &&
            (field.inntektskategori === val.inntektskategori ||
              (!field.inntektskategori && !val.lagtTilAvSaksbehandler && !field.lagtTilAvSaksbehandler)),
        );
        if (matchendeFieldIndex > -1) {
          const nyttObj = {
            ...fields[matchendeFieldIndex],
            fastsattBelop: val.fastsattBelop,
            refusjonskrav: skalKunneEndreRefusjon ? val.refusjonskrav : fields[matchendeFieldIndex]?.refusjonskrav,
            inntektskategori: val.inntektskategori,
          };
          update(matchendeFieldIndex, nyttObj);
        }
      });
    }
  }, [fieldArrayToRepeat]);

  const harKunYtelse =
    !!beregningsgrunnlag.aktivitetStatus &&
    beregningsgrunnlag.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
  const arbeidsforholdList = finnUnikeArbeidsforhold(beregningsgrunnlag);
  const sumFordeling = summerFordeling(vilkårperiodeFieldIndex, fieldName, fields, watch);
  const sumBeregningsgrunnlagPrAar = summerBeregningsgrunnlagPrAar(fields);
  const gjelderGradering = getGjelderGradering(beregningsgrunnlag);
  const inntektskategoriKoder = kodeverkSamling[KodeverkType.INNTEKTSKATEGORI];
  const intl = useIntl();
  const selectVals = harKunYtelse
    ? arbeidsgiverSelectValuesForKunYtelse(arbeidsforholdList, intl, kodeverkSamling, arbeidsgiverOpplysningerPerId)
    : arbeidsgiverSelectValues(arbeidsforholdList, kodeverkSamling, arbeidsgiverOpplysningerPerId);

  const lagFeltNavn = (fieldIndex: number): string =>
    `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}.${fieldIndex}`;

  const tablerows = fields.map((field, index) => {
    const skalIkkeEndres = readOnly || skalIkkeRedigereInntekt;
    return (
      <TableRow key={field.id}>
        {tittelKolonne(fields, index, selectVals, skalIkkeEndres, arbeidsforholdList, update, lagFeltNavn)}
        {graderingKolonne(gjelderGradering, lagFeltNavn(index))}
        {refusjonKolonne(skalIkkeEndres, fields, index, lagFeltNavn)}
        {grunnlagKolonne(lagFeltNavn(index))}
        {grunnlagInputKolonne(readOnly, skalIkkeRedigereInntekt, isAksjonspunktClosed, lagFeltNavn(index))}
        {inntektskategoriKolonne(skalIkkeEndres, lagFeltNavn(index), inntektskategoriKoder)}
        {knappKolonne(fields, index, skalIkkeEndres, remove)}
      </TableRow>
    );
  });

  tablerows.push(createBruttoBGSummaryRow(sumFordeling, sumBeregningsgrunnlagPrAar, gjelderGradering));

  const valideringsresultat: string[] = [];

  const valider = (feilmelding?: string): void => {
    if (feilmelding) {
      valideringsresultat.push(feilmelding);
    }
  };
  // Fields settes også opp for perioder om ikke skal endres, disse trenger vi ikke validere.
  // Felter som er i readonly skal ikke valideres
  const fieldsMåValideres =
    !readOnly && fields.some((field: any) => !!field.skalRedigereInntekt || !!field.skalKunneEndreRefusjon);
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
          kodeverkSamling,
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
        <Button
          icon={<PlusCircleIcon aria-hidden />}
          onClick={() => append(defaultBGFordeling(skalIkkeRedigereInntekt))}
          type="button"
          variant="secondary"
        >
          <Detail>
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
          </Detail>
        </Button>
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
