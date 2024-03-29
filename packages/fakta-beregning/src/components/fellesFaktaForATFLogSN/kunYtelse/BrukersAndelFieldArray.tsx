import { Detail, ErrorMessage, Button } from '@navikt/ds-react';
import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { InputField, SelectField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FlexColumn, FlexRow, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { BrukersAndelValues } from '../../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { SortedAndelInfo, validateUlikeAndelerWithGroupingFunction } from '../ValidateAndelerUtils';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import styles from './brukersAndelFieldArray.module.css';
import KodeverkForPanel from '../../../typer/kodeverkForPanel';

const defaultBGFordeling = (aktivitetStatuser: string[], kodeverkSamling: KodeverkForPanel) => ({
  andel: kodeverkSamling[KodeverkType.AKTIVITET_STATUS].find(
    as => as.kode === aktivitetStatuser.filter(kode => kode === AktivitetStatus.BRUKERS_ANDEL)[0],
  )?.navn,
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
          <Button
            icon={<XMarkIcon aria-hidden className={styles.slettIkon} />}
            onClick={() => remove(index)}
            type="button"
            variant="tertiary"
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

const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling[KodeverkType.INNTEKTSKATEGORI].slice().sort((a, b) => a.navn.localeCompare(b.navn));

type OwnProps = {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  kodeverkSamling: KodeverkForPanel;
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
  kodeverkSamling,
}) => {
  const intl = useIntl();
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const fieldArrayName = `${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}.${name}`;
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.brukersAndelBG',
  });
  const aktivitetStatuser = kodeverkSamling[KodeverkType.AKTIVITET_STATUS]?.map(kodeverk => kodeverk.kode);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(kodeverkSamling);
  const fieldArrayValues = useWatch({
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
            <Button
              icon={<PlusCircleIcon aria-hidden className={styles.addCircleIcon} />}
              // @ts-ignore Fiks
              onClick={() => append(defaultBGFordeling(aktivitetStatuser, kodeverkSamling))}
              type="button"
              variant="tertiary"
            >
              <Detail className={styles.imageText}>
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
              </Detail>
            </Button>
          </FlexColumn>
        </FlexRow>
      )}
      <VerticalSpacer eightPx />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default BrukersAndelFieldArray;
