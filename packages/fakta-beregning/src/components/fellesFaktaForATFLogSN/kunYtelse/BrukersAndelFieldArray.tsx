import React, { ReactElement } from 'react';
import { FieldArrayWithId, useFieldArray, UseFieldArrayRemove, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage, Table, VStack } from '@navikt/ds-react';

import { RhfSelect, RhfTextField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { BrukersAndelValues } from '../../../typer/FaktaBeregningTypes';
import { AndelFieldValue } from '../../../typer/FieldValues';
import { KodeverkForPanel, KodeverkMedNavn } from '../../../typer/KodeverkForPanel';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../../utils/BeregningFormUtils';
import { SortedAndelInfo, validateUlikeAndelerWithGroupingFunction } from '../ValidateAndelerUtils';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

import tableStyles from '../../felles/tableStyle.module.css';

const defaultBGFordeling = (aktivitetStatuser: string[], kodeverkSamling: KodeverkForPanel) => ({
  andel: kodeverkSamling['AktivitetStatus'].find(
    as => as.kode === aktivitetStatuser.filter(kode => kode === AktivitetStatus.BRUKERS_ANDEL)[0],
  )?.navn,
  fastsattBelop: '',
  inntektskategori: '',
  nyAndel: true,
  lagtTilAvSaksbehandler: true,
});

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn<'Inntektskategori'>[]) =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

const summerFordeling = (fields: BrukersAndelValues[]): string | undefined => {
  let sum = 0;
  fields.forEach(field => {
    sum += field.fastsattBelop ? removeSpacesFromNumber(field.fastsattBelop) : 0;
  });
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

function skalViseSletteknapp(
  index: number,
  fields: FieldArrayWithId<VurderFaktaBeregningFormValues, 'vurderFaktaBeregningForm.0.brukersAndelBG', 'id'>[],
  readOnly: boolean,
) {
  return (fields[index].nyAndel || fields[index].lagtTilAvSaksbehandler) && !readOnly;
}

const createAndelerTableRows = (
  fields: FieldArrayWithId<VurderFaktaBeregningFormValues, 'vurderFaktaBeregningForm.0.brukersAndelBG', 'id'>[],
  isAksjonspunktClosed: boolean,
  readOnly: boolean,
  inntektskategoriKoder: KodeverkMedNavn<'Inntektskategori'>[],
  intl: IntlShape,
  fieldArrayName: string,
  remove: UseFieldArrayRemove,
): ReactElement[] =>
  fields.map((field, index) => (
    <Table.Row key={field.id}>
      <Table.DataCell textSize="small">
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Ytelse" />
      </Table.DataCell>
      <Table.DataCell align="right">
        <RhfTextField
          name={`${fieldArrayName}.${index}.fastsattBelop`}
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
          size="small"
        />
      </Table.DataCell>
      <Table.DataCell align="right">
        <RhfSelect
          label={intl.formatMessage(
            {
              id: 'BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn',
            },
            { andel: `ytelse ${index + 1}` },
          )}
          name={`${fieldArrayName}.${index}.inntektskategori`}
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          readOnly={readOnly}
          validate={readOnly ? [] : [required]}
          hideLabel
          size="small"
        />
      </Table.DataCell>
      <Table.DataCell align="right">
        {skalViseSletteknapp(index, fields, readOnly) && (
          <Button
            size="small"
            icon={<XMarkIcon aria-hidden />}
            onClick={() => remove(index)}
            type="button"
            variant="tertiary-neutral"
          />
        )}
      </Table.DataCell>
    </Table.Row>
  ));

const createBruttoBGSummaryRow = (sumFordeling: string | undefined): ReactElement => (
  <Table.Row>
    <Table.HeaderCell textSize="small">
      <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
    </Table.HeaderCell>
    <Table.DataCell textSize="small" align="right">
      {sumFordeling}
    </Table.DataCell>
    <Table.DataCell />
    <Table.DataCell />
  </Table.Row>
);

const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling['Inntektskategori'].slice().sort((a, b) => a.navn.localeCompare(b.navn));

interface Props {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  kodeverkSamling: KodeverkForPanel;
}

const mapBrukesAndelToSortedObject = (value: BrukersAndelValues | AndelFieldValue): SortedAndelInfo => {
  const { andel, inntektskategori } = value;
  return { andelsinfo: andel, inntektskategori };
};

const validate = (values: BrukersAndelValues[] | undefined, intl: IntlShape): string | undefined => {
  const ulikeAndelerFeilmelding = values
    ? validateUlikeAndelerWithGroupingFunction(values, mapBrukesAndelToSortedObject, intl)
    : undefined;
  if (ulikeAndelerFeilmelding) {
    return ulikeAndelerFeilmelding;
  }
  return undefined;
};

/**
 *  BrukersAndelFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for brukers andel ved kun ytelse
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const BrukersAndelFieldArray = ({ name, readOnly, isAksjonspunktClosed, kodeverkSamling }: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const fieldArrayName = `${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}.${name}`;
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.brukersAndelBG',
  });
  const aktivitetStatuser = kodeverkSamling['AktivitetStatus']?.map(kodeverk => kodeverk.kode);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(kodeverkSamling);
  const fieldArrayValues = useWatch({
    name: fieldArrayName as 'vurderFaktaBeregningForm.0.brukersAndelBG',
    control,
  });
  const sumFordeling = fieldArrayValues ? summerFordeling(fieldArrayValues) : '0';
  const tableRows = createAndelerTableRows(
    fields,
    isAksjonspunktClosed,
    readOnly,
    inntektskategoriKoder,
    intl,
    fieldArrayName,
    remove,
  );
  const feilmelding = validate(fieldArrayValues, intl);
  const skjemaNavn = `${fieldArrayName}.skjemagruppe`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  return (
    <VStack gap="2">
      <Table size="small" className={tableStyles.tableMedInput}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Andel" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="right" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Fordeling" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="right" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelingBG.Inntektskategori" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableRows}
          {createBruttoBGSummaryRow(sumFordeling)}
        </Table.Body>
      </Table>
      {!readOnly && (
        <div>
          <Button
            icon={<PlusCircleIcon aria-hidden />}
            // @ts-expect-error Fiks
            onClick={() => append(defaultBGFordeling(aktivitetStatuser, kodeverkSamling))}
            type="button"
            variant="tertiary"
            size="small"
          >
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
          </Button>
        </div>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </VStack>
  );
};
