import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { formatCurrencyNoKr, getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { Image, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import {
  AktivitetStatus,
  BehandlingType as bt,
  BeregningsgrunnlagAndelType,
  Inntektskategori,
  isSelvstendigN√¶ringsdrivende,
  KodeverkType,
} from '@navikt/ft-kodeverk';
import { formHooks, InputField, SelectField, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
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

import styles from './renderFordelBGFieldArray.less';

const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';
export const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

const defaultBGFordeling = (periodeUtenAarsak: boolean): any => ({
  nyAndel: true,
  kilde: 'SAKSBEHANDLER_FORDELING',
  fordelingForrigeBehandling: '0',
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
  const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!agOpplysninger) {
    return arbeidsforhold.arbeidsforholdType
      ? getKodeverknavn(arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return createVisningsnavnForAktivitetFordeling(agOpplysninger, arbeidsforhold.eksternArbeidsforholdId);
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

const summerFordelingForrigeBehandlingFraFields = (fields: FordelBeregningsgrunnlagAndelValues[]): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const { fordelingForrigeBehandling } = fields[index];
    if (
      fordelingForrigeBehandling !== undefined &&
      fordelingForrigeBehandling !== null &&
      fordelingForrigeBehandling !== ''
    ) {
      sum += Number(removeSpacesFromNumber(fordelingForrigeBehandling));
    }
  }
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const summerFordeling = (
  vilk√•rperiodeFieldIndex: number,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  watch: any,
): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const field = fields[index];
    if (field.skalRedigereInntekt) {
      sum += watch(`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`)
        ? Number(
            removeSpacesFromNumber(
              watch(`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}
        .${fieldname}.${index}.fastsattBelop`),
            ),
          )
        : 0;
    } else {
      sum += field.readOnlyBelop
        ? Number(
            removeSpacesFromNumber(
              watch(`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.
      ${fieldname}.${index}.fastsattBelop`),
            ),
          )
        : 0;
    }
  }
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
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
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const isSelvstendigOrFrilanser = (fieldVal: FordelBeregningsgrunnlagAndelValues): boolean =>
  isSelvstendigN√¶ringsdrivende(fieldVal.inntektskategori) || Inntektskategori.FRILANSER === fieldVal.inntektskategori;

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
): BGFordelArbeidsforhold => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find(arbeidsforhold => arbeidsforhold.andelsnr === andelsnr);
};

const finnAktivitetStatus = (fields: FordelBeregningsgrunnlagAndelValues[], val: string): string => {
  const andelsnr = Number(val);
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].andelsnr === andelsnr) {
      return fields[index].aktivitetStatus;
    }
  }
  return null;
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
  vilk√•rperiodeFieldIndex: number,
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
        name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.andel`}
        bredde="L"
        readOnly
      />
    )}
    {fields[index].nyAndel && (
      <SelectField
        name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.andel`}
        bredde="l"
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
  vilk√•rperiodeFieldIndex: number,
  fieldname: string,
  index: number,
  readOnly: boolean,
  skalIkkeRedigereInntekt: boolean,
  isAksjonspunktClosed: boolean,
): ReactElement => {
  if (skalIkkeRedigereInntekt) {
    return (
      <TableColumn>
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.readOnlyBelop`}
          bredde="S"
          parse={parseCurrencyInput}
          readOnly
          isEdited={false}
        />
      </TableColumn>
    );
  }
  return (
    <TableColumn className={styles.rightAlignInput}>
      <InputField
        name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`}
        bredde="XS"
        parse={parseCurrencyInput}
        readOnly={readOnly}
        validate={[required]}
        isEdited={isAksjonspunktClosed && !skalIkkeRedigereInntekt}
      />
    </TableColumn>
  );
};

const skalViseSletteknapp = (
  index: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  readOnly: boolean,
): boolean => (fields[index].nyAndel || fields[index].lagtTilAvSaksbehandler) && !readOnly;

const createAndelerTableRows = (
  vilk√•rperiodeFieldIndex: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  isAksjonspunktClosed: boolean,
  readOnly: boolean,
  inntektskategoriKoder: KodeverkMedNavn[],
  skalIkkeRedigereInntekt: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  selectVals: ReactElement[],
  erRevurdering: boolean,
  fieldname: string,
  removeFromFieldsMethod: any,
  updateFieldMethod: any,
): ReactElement[] => {
  const skalIkkeEndres = readOnly || skalIkkeRedigereInntekt;
  return fields.map((field, index) => (
    <TableRow key={field.id}>
      <TableColumn>
        {arbeidsforholdReadOnlyOrSelect(
          vilk√•rperiodeFieldIndex,
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
              name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.arbeidsperiodeFom -
              FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.arbeidsperiodeTom`}
              readOnly
            />
          </div>
        )}
      </TableColumn>
      {erRevurdering && (
        <TableColumn>
          <InputField
            name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.fordelingForrigeBehandling`}
            bredde="S"
            readOnly
            parse={parseCurrencyInput}
          />
        </TableColumn>
      )}
      <TableColumn>
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.andelIArbeid`}
          readOnly
          bredde="S"
          // @ts-ignore Fiks
          normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
        />
      </TableColumn>
      <TableColumn
        className={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon ? undefined : styles.rightAlignInput}
      >
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.refusjonskrav`}
          bredde="XS"
          readOnly={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon}
          parse={parseCurrencyInput}
          validate={fields[index].skalKunneEndreRefusjon ? [required] : []}
        />
      </TableColumn>
      <TableColumn>
        <InputField
          name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.beregningsgrunnlagPrAar`}
          bredde="S"
          readOnly
          parse={parseCurrencyInput}
        />
      </TableColumn>
      {lagBelopKolonne(
        vilk√•rperiodeFieldIndex,
        fieldname,
        index,
        readOnly,
        skalIkkeRedigereInntekt,
        isAksjonspunktClosed,
      )}
      <TableColumn className={skalIkkeEndres ? styles.shortLeftAligned : undefined}>
        <SelectField
          label=""
          name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldname}.${index}.inntektskategori`}
          bredde="s"
          validate={[required]}
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          readOnly={skalIkkeEndres}
        />
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
  sumFordelingForrigeBehandling: string,
  sumFordeling: string,
  sumBeregningsgrunnlagPrAar: string,
  erRevurdering: boolean,
): ReactElement => (
  <TableRow key="bruttoBGSummaryRow">
    <TableColumn>
      <FormattedMessage id="BeregningInfoPanel.FordelBG.Sum" />
    </TableColumn>
    {erRevurdering && (
      <TableColumn>
        <Element>{sumFordelingForrigeBehandling}</Element>
      </TableColumn>
    )}
    <TableColumn />
    <TableColumn />
    <TableColumn>
      <Element>{sumBeregningsgrunnlagPrAar}</Element>
    </TableColumn>
    <TableColumn>
      <Element>{sumFordeling}</Element>
    </TableColumn>
    <TableColumn />
    <TableColumn />
  </TableRow>
);

const getHeaderTextCodes = (erRevurdering: boolean): string[] => {
  const headerCodes = [];
  headerCodes.push('BeregningInfoPanel.FordelBG.Andel');
  if (erRevurdering) {
    headerCodes.push('BeregningInfoPanel.FordelBG.FordelingForrigeBehandling');
  }
  headerCodes.push('BeregningInfoPanel.FordelBG.AndelIArbeid');
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
  behandlingType: string;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldName: string;
  skalKunneEndreRefusjon: boolean;
  sumIPeriode: number;
  periodeFom: string;
  vilk√•rperiodeFieldIndex: number;
};

/**
 *  RenderFordelBGFieldArray
 *
 * Presentasjonskomponent: Viser fordeling av brutto beregningsgrunnlag ved endret beregningsgrunnlag
 * Komponenten m√• rendres som komponenten til et FieldArray.
 */
const FordelPeriodeFieldArray: FunctionComponent<OwnProps> = ({
  fieldName,
  readOnly,
  skalIkkeRedigereInntekt,
  isAksjonspunktClosed,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
  beregningsgrunnlag,
  skalKunneEndreRefusjon,
  sumIPeriode,
  periodeFom,
  vilk√•rperiodeFieldIndex,
}) => {
  const { control, watch, getValues } = formHooks.useFormContext<FordelBeregningsgrunnlagFormValues>();
  const { fields, append, remove, update } = formHooks.useFieldArray({
    control,
    name: `FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldName}`,
  });
  const harKunYtelse = beregningsgrunnlag.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
  const arbeidsforholdList = finnUnikeArbeidsforhold(beregningsgrunnlag);
  const sumFordelingForrigeBehandling = summerFordelingForrigeBehandlingFraFields(fields);
  const sumFordeling = summerFordeling(vilk√•rperiodeFieldIndex, fieldName, fields, watch);
  const sumBeregningsgrunnlagPrAar = summerBeregningsgrunnlagPrAar(fields);
  const erRevurdering = behandlingType ? behandlingType === bt.REVURDERING : false;
  const inntektskategoriKoder = alleKodeverk[KodeverkType.INNTEKTSKATEGORI];
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const intl = useIntl();
  const selectVals = harKunYtelse
    ? arbeidsgiverSelectValuesForKunYtelse(arbeidsforholdList, intl, getKodeverknavn, arbeidsgiverOpplysningerPerId)
    : arbeidsgiverSelectValues(arbeidsforholdList, getKodeverknavn, arbeidsgiverOpplysningerPerId);
  const tablerows = createAndelerTableRows(
    vilk√•rperiodeFieldIndex,
    fields,
    isAksjonspunktClosed,
    readOnly,
    inntektskategoriKoder,
    skalIkkeRedigereInntekt,
    arbeidsforholdList,
    selectVals,
    erRevurdering,
    fieldName,
    remove,
    update,
  );
  tablerows.push(
    createBruttoBGSummaryRow(sumFordelingForrigeBehandling, sumFordeling, sumBeregningsgrunnlagPrAar, erRevurdering),
  );

  // Valideringer, fields settes ogs√• opp for perioder om ikke skal endres, disse trenger vi ikke validere.
  const valideringer = [];
  const fieldsM√•Valideres = fields.some((field: any) => !!field.skalRedigereInntekt || !!field.skalKunneEndreRefusjon);
  if (fieldsM√•Valideres) {
    valideringer.push(validateUlikeAndeler(vilk√•rperiodeFieldIndex, getValues, fieldName, fields, intl));
    valideringer.push(
      validateSumFastsattForUgraderteAktiviteter(
        vilk√•rperiodeFieldIndex,
        getValues,
        fieldName,
        fields,
        intl,
        beregningsgrunnlag.grunnbel√łp,
        getKodeverknavn,
      ),
    );
    valideringer.push(
      validateSumFastsattBelop(vilk√•rperiodeFieldIndex, getValues, fieldName, fields, sumIPeriode, intl),
    );
    valideringer.push(
      validerBGGraderteAndeler(vilk√•rperiodeFieldIndex, getValues, fieldName, fields, periodeFom, intl),
    );
    if (skalKunneEndreRefusjon) {
      valideringer.push(
        validateSumRefusjon(vilk√•rperiodeFieldIndex, fields, fieldName, getValues, beregningsgrunnlag.grunnbel√łp, intl),
      );
      valideringer.push(
        validateTotalRefusjonPrArbeidsforhold(
          vilk√•rperiodeFieldIndex,
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

  return (
    <SkjemaGruppeMedFeilviser
      className={styles.dividerTop}
      name={`FORDEL_BEREGNING_FORM.${vilk√•rperiodeFieldIndex}.${fieldName}.skjemagruppe`}
      validate={valideringer}
    >
      <Table headerTextCodes={getHeaderTextCodes(erRevurdering)} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && !skalIkkeRedigereInntekt && (
        <Row className={styles.buttonRow}>
          <Column xs="3">
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
              <Undertekst className={styles.imageText}>
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
              </Undertekst>
            </div>
          </Column>
        </Row>
      )}
    </SkjemaGruppeMedFeilviser>
  );
};

export default FordelPeriodeFieldArray;
