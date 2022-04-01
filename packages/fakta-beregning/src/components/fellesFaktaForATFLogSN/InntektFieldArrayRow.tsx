import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FieldArrayFieldsProps } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { InputField, PeriodpickerField, SelectField } from '@navikt/ft-form-redux-legacy';
import { parseCurrencyInput } from '@navikt/ft-utils';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';

import { getKanRedigereInntekt, getSkalRedigereInntektskategori } from './BgFaktaUtils';

import styles from './inntektFieldArray.less';

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

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]) => kategorier.map((ik) => (
  <option value={ik.kode} key={ik.kode}>
    {ik.navn}
  </option>
));

type OwnProps = {
    readOnly: boolean;
    fields: FieldArrayFieldsProps<any>;
    inntektskategoriKoder: KodeverkMedNavn[];
    isAksjonspunktClosed: boolean;
    skalVisePeriode: boolean;
    skalViseRefusjon: boolean;
    skalViseSletteknapp: boolean;
    kanRedigereInntekt: boolean;
    skalRedigereInntektskategori: boolean;
    andelElementFieldId: string;
    removeAndel: (...args: any[]) => any;
    index: number;
    alleKodeverk: AlleKodeverk;
    skalHaMilitær?: boolean;
};

/**
 *  InntektFieldArrayAndelRow
 *
 * Presentasjonskomponent: Viser en rad korresponderende til ein andel i beregning.
 */
export const AndelRowImpl:FunctionComponent<OwnProps & WrappedComponentProps> = ({
  fields,
  index,
  intl, skalVisePeriode,
  skalViseRefusjon,
  skalViseSletteknapp,
  kanRedigereInntekt,
  skalRedigereInntektskategori,
  andelElementFieldId,
  inntektskategoriKoder,
  readOnly,
  isAksjonspunktClosed,
  removeAndel,
}) => {
  const field = fields.get(index);
  field.kanRedigereInntekt = kanRedigereInntekt;
  return (
    <TableRow>
      <TableColumn>
        <InputField
          name={`${andelElementFieldId}.andel`}
          bredde="L"
          readOnly
        />
      </TableColumn>
      {skalVisePeriode
      && (
      <TableColumn>
        <PeriodpickerField
          names={[`${andelElementFieldId}.arbeidsperiodeFom`, `${andelElementFieldId}.arbeidsperiodeTom`]}
          readOnly
          renderIfMissingDateOnReadOnly
        />
      </TableColumn>
      )}
      {kanRedigereInntekt
    && (
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
      {!kanRedigereInntekt
    && (
    <TableColumn className={styles.rightAlign}>
      <InputField
        name={`${andelElementFieldId}.belopReadOnly`}
        bredde="M"
        parse={parseCurrencyInput}
        readOnly
      />
    </TableColumn>
    )}
      {skalViseRefusjon
          && (
          <TableColumn className={styles.rightAlign}>
            <InputField
              name={`${andelElementFieldId}.refusjonskrav`}
              bredde="XS"
              readOnly
              parse={parseCurrencyInput}
            />
          </TableColumn>
          )}
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label=""
          name={`${andelElementFieldId}.inntektskategori`}
          bredde="l"
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          value={fields.get(index).inntektskategori}
          readOnly={readOnly || !skalRedigereInntektskategori}
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp
    && (
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

export const getInntektskategorierAlfabetiskSortert = createSelector(
  [(ownProps: OwnProps) => ownProps.alleKodeverk[KodeverkType.INNTEKTSKATEGORI]],
  (kodeverkListe) => kodeverkListe.slice().sort((a, b) => a.navn.localeCompare(b.navn)),
);

export const mapStateToProps = (state, ownProps) => {
  const field = ownProps.fields.get(ownProps.index);
  // @ts-ignore FIX reselect
  const kanRedigereInntekt = getKanRedigereInntekt(state, ownProps)(field);
  // @ts-ignore FIX reselect
  const skalRedigereInntektskategori = getSkalRedigereInntektskategori(state, ownProps)(field);
  return {
    kanRedigereInntekt,
    skalRedigereInntektskategori,
    inntektskategoriKoder: getInntektskategorierAlfabetiskSortert(ownProps),
  };
};

// @ts-ignore Ta vekk denny og any når redux-form blir fjerna
export const AndelRow = connect(mapStateToProps)(injectIntl(AndelRowImpl)) as any;
