import { Detail, ErrorMessage } from '@navikt/ds-react';
import { formHooks, InputField, SelectField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { FlexColumn, FlexRow, Image, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import addCircleIcon from '../../../images/add-circle.svg';
import { BrukersAndelValues } from '../../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { SortedAndelInfo, validateUlikeAndelerWithGroupingFunction } from '../ValidateAndelerUtils';
import VurderFaktaContext from '../VurderFaktaContext';
import styles from './brukersAndelFieldArray.less';

const defaultBGFordeling = (aktivitetStatuser: string[], alleKodeverk) => ({
  andel: getKodeverknavnFn(alleKodeverk)(
    aktivitetStatuser.filter(kode => kode === AktivitetStatus.BRUKERS_ANDEL)[0],
    KodeverkType.AKTIVITET_STATUS,
  ),
  fastsattBelop: '',
  inntektskategori: '',
  nyAndel: true,
  lagtTilAvSaksbehandler: true,
});

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]) =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

const summerFordeling = fields => {
  let sum = 0;
  fields.forEach(field => {
    sum += field.fastsattBelop ? removeSpacesFromNumber(field.fastsattBelop) : 0;
  });
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

function skalViseSletteknapp(index, fields, readOnly) {
  return (fields[index].nyAndel || fields[index].lagtTilAvSaksbehandler) && !readOnly;
}

const createAndelerTableRows = (
  fields,
  isAksjonspunktClosed,
  readOnly,
  inntektskategoriKoder: KodeverkMedNavn[],
  intl,
  fieldArrayName,
  remove,
) =>
  fields.map((field, index) => (
    <TableRow className={styles.row} key={field.id}>
      <TableColumn>
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Ytelse" />
      </TableColumn>
      <TableColumn className={styles.rightAlignInput}>
        <InputField
          name={`${fieldArrayName}.${index}.fastsattBelop`}
          className={styles.mediumBredde}
          parse={parseCurrencyInput}
          readOnly={readOnly}
          isEdited={isAksjonspunktClosed}
          validate={readOnly ? [] : [required, maxValueFormatted(178956970)]}
          label={intl.formatMessage(
            {
              id: 'BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn',
            },
            { andel: `ytelse ${index + 1}` },
          )}
          hideLabel
        />
      </TableColumn>
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label={intl.formatMessage(
            {
              id: 'BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn',
            },
            { andel: `ytelse ${index + 1}` },
          )}
          name={`${fieldArrayName}.${index}.inntektskategori`}
          className={styles.storBredde}
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          readOnly={readOnly}
          validate={readOnly ? [] : [required]}
          hideLabel
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp(index, fields, readOnly) && (
          <button
            className={styles.buttonRemove}
            type="button"
            onClick={() => {
              remove(index);
            }}
            title={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.FjernAndel' })}
          />
        )}
      </TableColumn>
    </TableRow>
  ));
const createBruttoBGSummaryRow = sumFordeling => (
  <TableRow key="bruttoBGSummaryRow">
    <TableColumn>
      <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
    </TableColumn>
    <TableColumn className={styles.rightAlign}>
      <Detail>{sumFordeling}</Detail>
    </TableColumn>
    <TableColumn />
  </TableRow>
);

const getHeaderTextCodes = () => [
  'BeregningInfoPanel.FordelingBG.Andel',
  'BeregningInfoPanel.FordelingBG.Fordeling',
  'BeregningInfoPanel.FordelingBG.Inntektskategori',
];

const getInntektskategorierAlfabetiskSortert = (alleKodeverk: AlleKodeverk) =>
  alleKodeverk[KodeverkType.INNTEKTSKATEGORI].slice().sort((a, b) => a.navn.localeCompare(b.navn));

type OwnProps = {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  alleKodeverk: AlleKodeverk;
};

const mapBrukesAndelToSortedObject = (value: BrukersAndelValues): SortedAndelInfo => {
  const { andel, inntektskategori } = value;
  return { andelsinfo: andel, inntektskategori };
};

const validate = (values: BrukersAndelValues[], intl: IntlShape) => {
  const ulikeAndelerFeilmelding = validateUlikeAndelerWithGroupingFunction(values, mapBrukesAndelToSortedObject, intl);
  if (ulikeAndelerFeilmelding) {
    return ulikeAndelerFeilmelding;
  }
  return null;
};

/**
 *  BrukersAndelFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for brukers andel ved kun ytelse
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const BrukersAndelFieldArray: FunctionComponent<OwnProps> = ({
  name,
  readOnly,
  isAksjonspunktClosed,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const { control } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const fieldArrayName = `${formNameVurderFaktaBeregning}.${aktivtBeregningsgrunnlagIndeks}.${name}`;
  const { fields, append, remove } = formHooks.useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.brukersAndelBG',
  });
  const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS]?.map(kodeverk => kodeverk.kode);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(alleKodeverk);
  const fieldArrayValues = formHooks.useWatch({
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.brukersAndelBG',
    control,
  });
  const sumFordeling = summerFordeling(fieldArrayValues) || 0;
  const tablerows = createAndelerTableRows(
    fields,
    isAksjonspunktClosed,
    readOnly,
    inntektskategoriKoder,
    intl,
    fieldArrayName,
    remove,
  );
  tablerows.push(createBruttoBGSummaryRow(sumFordeling));
  const feilmelding = validate(fieldArrayValues, intl);
  const skjemaNavn = `${fieldArrayName}.skjemagruppe`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  return (
    <div>
      <Table headerTextCodes={getHeaderTextCodes()} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && (
        <FlexRow className={styles.buttonRow}>
          <FlexColumn className={styles.flexColumn3}>
            <button
              id="leggTilAndelDiv"
              onClick={() => {
                // @ts-ignore Fiks
                append(defaultBGFordeling(aktivitetStatuser, alleKodeverk));
              }}
              className={styles.addPeriode}
              type="button"
              title={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilAndel' })}
            >
              <Image className={styles.addCircleIcon} src={addCircleIcon} />
              <Detail className={styles.imageText}>
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
              </Detail>
            </button>
          </FlexColumn>
        </FlexRow>
      )}
      <VerticalSpacer eightPx />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default BrukersAndelFieldArray;
