import React, { ReactElement } from 'react';
import { FieldArrayWithId, useFieldArray, UseFieldArrayRemove, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, ErrorMessage, HStack, Label, Table, VStack } from '@navikt/ds-react';

import { InputField, SelectField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { BrukersAndelValues } from '../../../typer/FaktaBeregningTypes';
import { AndelFieldValue } from '../../../typer/FieldValues';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { SortedAndelInfo, validateUlikeAndelerWithGroupingFunction } from '../ValidateAndelerUtils';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

import styles from './brukersAndelFieldArray.module.css';

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
  inntektskategoriKoder: KodeverkMedNavn[],
  intl: IntlShape,
  fieldArrayName: string,
  remove: UseFieldArrayRemove,
): ReactElement[] =>
  fields.map((field, index) => (
    <Table.Row className={styles.row} key={field.id}>
      <Table.DataCell>
        <BodyShort size="small">
          <FormattedMessage id="BeregningInfoPanel.FordelingBG.Ytelse" />
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell align="right" className={styles.rightAlign}>
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
          size="small"
        />
      </Table.DataCell>
      <Table.DataCell align="right" className={styles.rightAlign}>
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
          size="small"
        />
      </Table.DataCell>
      <Table.DataCell align="right" className={styles.rightAlign}>
        {skalViseSletteknapp(index, fields, readOnly) && (
          <Button
            icon={<XMarkIcon aria-hidden className={styles.slettIkon} />}
            onClick={() => remove(index)}
            type="button"
            variant="tertiary"
          />
        )}
      </Table.DataCell>
    </Table.Row>
  ));
const createBruttoBGSummaryRow = (sumFordeling: string | undefined): ReactElement => (
  <Table.Row key="bruttoBGSummaryRow">
    <Table.DataCell>
      <Label as="p" size="small">
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
      </Label>
    </Table.DataCell>
    <Table.DataCell align="right">
      <Detail>{sumFordeling}</Detail>
    </Table.DataCell>
    <Table.DataCell />
    <Table.DataCell />
  </Table.Row>
);

const getHeaderTextCodes = () => [
  'BeregningInfoPanel.FordelingBG.Andel',
  'BeregningInfoPanel.FordelingBG.Fordeling',
  'BeregningInfoPanel.FordelingBG.Inntektskategori',
];

const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling[KodeverkType.INNTEKTSKATEGORI].slice().sort((a, b) => a.navn.localeCompare(b.navn));

type Props = {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  kodeverkSamling: KodeverkForPanel;
};

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
  const aktivitetStatuser = kodeverkSamling[KodeverkType.AKTIVITET_STATUS]?.map(kodeverk => kodeverk.kode);
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
  tableRows.push(createBruttoBGSummaryRow(sumFordeling));
  const feilmelding = validate(fieldArrayValues, intl);
  const skjemaNavn = `${fieldArrayName}.skjemagruppe`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  return (
    <VStack gap="2">
      <Table size="small">
        <Table.Header>
          <Table.Row>
            {getHeaderTextCodes().map(header => {
              const alginRightHeaders = [
                'BeregningInfoPanel.FordelingBG.Fordeling',
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
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
      {!readOnly && (
        <HStack>
          <Button
            icon={<PlusCircleIcon aria-hidden className={styles.addCircleIcon} />}
            // @ts-expect-error Fiks
            onClick={() => append(defaultBGFordeling(aktivitetStatuser, kodeverkSamling))}
            type="button"
            variant="tertiary"
            size="small"
          >
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
          </Button>
        </HStack>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </VStack>
  );
};
