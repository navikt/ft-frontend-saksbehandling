import { InputField, PeriodpickerField, SelectField } from '@navikt/ft-form-redux-legacy';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { getKanRedigereInntekt, getSkalRedigereInntektskategori } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import VurderFaktaContext from './VurderFaktaContext';

export const getHeaderTextCodes = (skalVisePeriode: boolean, skalViseRefusjon: boolean) => {
  const headerCodes = [];
  headerCodes.push('BeregningInfoPanel.FordelingBG.Andel');
  if (skalVisePeriode) {
    headerCodes.push('BeregningInfoPanel.FordelingBG.Arbeidsperiode');
  }
  headerCodes.push('BeregningInfoPanel.FordelingBG.Fordeling');
  if (skalViseRefusjon) {
    headerCodes.push('BeregningInfoPanel.FordelingBG.Refusjonskrav');
  }
  headerCodes.push('BeregningInfoPanel.FordelingBG.Inntektskategori');

  return headerCodes;
};

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]) =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

export const getInntektskategorierAlfabetiskSortert = alleKodeverk =>
  alleKodeverk[KodeverkType.INNTEKTSKATEGORI].slice().sort((a, b) => a.navn.localeCompare(b.navn));

type OwnProps = {
  readOnly: boolean;
  fields: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>[];
  isAksjonspunktClosed: boolean;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  skalViseSletteknapp: boolean;
  andelElementFieldId: string;
  removeAndel: (...args: any[]) => any;
  index: number;
  // eslint-disable-next-line react/no-unused-prop-types
  alleKodeverk: AlleKodeverk;
  updateKanRedigereInntekt: (index: number, kanRedigereInntekt: boolean) => void;
  beregningsgrunnlag: Beregningsgrunnlag;
};

/**
 *  InntektFieldArrayAndelRow
 *
 * Presentasjonskomponent: Viser en rad korresponderende til ein andel i beregning.
 */
const AndelRow: FunctionComponent<OwnProps> = ({
  fields,
  index,
  skalVisePeriode,
  skalViseRefusjon,
  skalViseSletteknapp,
  andelElementFieldId,
  readOnly,
  isAksjonspunktClosed,
  removeAndel,
  updateKanRedigereInntekt,
  beregningsgrunnlag,
  alleKodeverk,
}) => {
  const field = fields.at(index);
  const intl = useIntl();
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const allFormValues = getValues();
  const currentFormValues =
    allFormValues.vurderFaktaBeregningForm[aktivtBeregningsgrunnlagIndeks].inntektFieldArray[index];
  const kanRedigereInntekt = getKanRedigereInntekt(currentFormValues, beregningsgrunnlag)(field);
  updateKanRedigereInntekt(index, kanRedigereInntekt);

  const skalRedigereInntektskategori = getSkalRedigereInntektskategori(beregningsgrunnlag)(field);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(alleKodeverk);

  return (
    <TableRow>
      <TableColumn>
        <InputField name={`${andelElementFieldId}.andel`} bredde="L" readOnly />
      </TableColumn>
      {skalVisePeriode && (
        <TableColumn>
          <PeriodpickerField
            names={[`${andelElementFieldId}.arbeidsperiodeFom`, `${andelElementFieldId}.arbeidsperiodeTom`]}
            readOnly
            renderIfMissingDateOnReadOnly
          />
        </TableColumn>
      )}
      {kanRedigereInntekt && (
        <TableColumn className={styles.rightAlignInput}>
          <InputField
            name={`${andelElementFieldId}.fastsattBelop`}
            bredde="M"
            parse={parseCurrencyInput}
            readOnly={readOnly}
            isEdited={isAksjonspunktClosed}
          />
        </TableColumn>
      )}
      {!kanRedigereInntekt && (
        <TableColumn className={styles.rightAlign}>
          <InputField name={`${andelElementFieldId}.belopReadOnly`} bredde="M" parse={parseCurrencyInput} readOnly />
        </TableColumn>
      )}
      {skalViseRefusjon && (
        <TableColumn className={styles.rightAlign}>
          <InputField name={`${andelElementFieldId}.refusjonskrav`} bredde="XS" readOnly parse={parseCurrencyInput} />
        </TableColumn>
      )}
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label=""
          name={`${andelElementFieldId}.inntektskategori`}
          bredde="l"
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          value={fields.at(index).inntektskategori}
          readOnly={readOnly || !skalRedigereInntektskategori}
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp && (
          <button
            className={styles.buttonRemove}
            type="button"
            onClick={() => removeAndel()}
            title={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.FjernDagpenger' })}
          />
        )}
      </TableColumn>
    </TableRow>
  );
};

export default AndelRow;
