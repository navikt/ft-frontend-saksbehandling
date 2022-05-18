import { InputField, NavFieldGroup, SelectField } from '@navikt/ft-form-redux-legacy';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { Image, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  formatCurrencyNoKr,
  getKodeverknavnFn,
  isArrayEmpty,
  parseCurrencyInput,
  removeSpacesFromNumber,
} from '@navikt/ft-utils';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';
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
  fields.forEach((andelElementFieldId, index) => {
    sum += fields.get(index).fastsattBelop ? removeSpacesFromNumber(fields.get(index).fastsattBelop) : 0;
  });
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const renderMessage = (intl, error) => (error[0] && error[0].id ? intl.formatMessage(...error) : error);

const getErrorMessage = (errors, intl, isBeregningFormDirty, isSubmitSuccessful) =>
  errors && isBeregningFormDirty && !isSubmitSuccessful ? renderMessage(intl, errors) : null;

function skalViseSletteknapp(index, fields, readOnly) {
  return (fields.get(index).nyAndel || fields.get(index).lagtTilAvSaksbehandler) && !readOnly;
}
const onKeyDown =
  (fields, aktivitetStatuser, alleKodeverk) =>
  ({ key }) => {
    if (key === 'Enter') {
      fields.push(defaultBGFordeling(aktivitetStatuser, alleKodeverk));
    }
  };

const createAndelerTableRows = (
  fields,
  isAksjonspunktClosed,
  readOnly,
  inntektskategoriKoder: KodeverkMedNavn[],
  intl,
) =>
  fields.map((andelElementFieldId, index) => (
    <TableRow key={andelElementFieldId}>
      <TableColumn>
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Ytelse" />
      </TableColumn>
      <TableColumn className={styles.rightAlignInput}>
        <InputField
          name={`${andelElementFieldId}.fastsattBelop`}
          bredde="M"
          parse={parseCurrencyInput}
          readOnly={readOnly}
          isEdited={isAksjonspunktClosed}
        />
      </TableColumn>
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label=""
          name={`${andelElementFieldId}.inntektskategori`}
          bredde="l"
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          value={fields.get(index).inntektskategori}
          readOnly={readOnly}
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp(index, fields, readOnly) && (
          <button
            className={styles.buttonRemove}
            type="button"
            onClick={() => {
              fields.remove(index);
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
      <Undertekst>{sumFordeling}</Undertekst>
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

interface StaticFunction {
  validate: (values: BrukersAndelValues[], intl: IntlShape) => any;
}

/**
 *  BrukersAndelFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for brukers andel ved kun ytelse
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const BrukersAndelFieldArrayImpl: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunction = ({
  name,
  intl,
  readOnly,
  isAksjonspunktClosed,
  alleKodeverk,
}) => {
  const { formState } = useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const fieldArrayName = `${formNameVurderFaktaBeregning}.${aktivtBeregningsgrunnlagIndeks}.${name}`;
  const { fields, append } = useFieldArray({
    name: fieldArrayName,
  });
  const { isDirty, errors, isSubmitSuccessful } = formState;
  const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS]?.map(kodeverk => kodeverk.kode);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(alleKodeverk);
  const sumFordeling = summerFordeling(fields) || 0;
  const tablerows = createAndelerTableRows(fields, isAksjonspunktClosed, readOnly, inntektskategoriKoder, intl);
  tablerows.push(createBruttoBGSummaryRow(sumFordeling));
  return (
    <NavFieldGroup errorMessage={getErrorMessage(errors, intl, isDirty, isSubmitSuccessful)}>
      <Table headerTextCodes={getHeaderTextCodes()} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && (
        <Row className={styles.buttonRow}>
          <Column xs="3">
            {
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            }
            <div
              id="leggTilAndelDiv"
              onClick={() => {
                append(defaultBGFordeling(aktivitetStatuser, alleKodeverk));
              }}
              onKeyDown={onKeyDown(fields, aktivitetStatuser, alleKodeverk)}
              className={styles.addPeriode}
              role="button"
              tabIndex={0}
              title={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilAndel' })}
            >
              <Image className={styles.addCircleIcon} src={addCircleIcon} />
              <Undertekst className={styles.imageText}>
                <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
              </Undertekst>
            </div>
          </Column>
        </Row>
      )}
      <VerticalSpacer eightPx />
    </NavFieldGroup>
  );
};

const BrukersAndelFieldArray = injectIntl(BrukersAndelFieldArrayImpl);

const mapBrukesAndelToSortedObject = (value: BrukersAndelValues): SortedAndelInfo => {
  const { andel, inntektskategori } = value;
  return { andelsinfo: andel, inntektskategori };
};

BrukersAndelFieldArrayImpl.validate = (values: BrukersAndelValues[], intl: IntlShape) => {
  if (!values) {
    return null;
  }
  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values.map(({ fastsattBelop, inntektskategori }) => {
    const fieldErrors = {
      fastsattBelop: null,
      inntektskategori: null,
    };
    fieldErrors.fastsattBelop = required(fastsattBelop);
    fieldErrors.inntektskategori = required(inntektskategori);
    return fieldErrors.fastsattBelop || fieldErrors.inntektskategori ? fieldErrors : null;
  });
  if (arrayErrors.some(errors => errors !== null)) {
    return arrayErrors;
  }
  if (isArrayEmpty(values)) {
    return null;
  }
  const ulikeAndelerFeilmelding = validateUlikeAndelerWithGroupingFunction(values, mapBrukesAndelToSortedObject, intl);
  if (ulikeAndelerFeilmelding) {
    return { _error: ulikeAndelerFeilmelding };
  }
  return null;
};

// const mapStateToProps = (state, ownProps) => {
//   const isBeregningFormDirty = isFormDirty(state);
//   const aktivitetStatuser = ownProps.alleKodeverk[KodeverkType.AKTIVITET_STATUS];
//   return {
//     isBeregningFormDirty,
//     aktivitetStatuser,
//     inntektskategoriKoder: getInntektskategorierAlfabetiskSortert(ownProps),
//   };
// };

export default BrukersAndelFieldArray;
