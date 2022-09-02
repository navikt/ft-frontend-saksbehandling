import { formHooks, InputField, SelectField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { PeriodLabel, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FieldArrayWithId } from 'react-hook-form';
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
  field: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>;
  isAksjonspunktClosed: boolean;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  skalViseSletteknapp: boolean;
  removeAndel: (...args: any[]) => any;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag: Beregningsgrunnlag;
  rowName: string;
  skalFastsetteInntektForAndel: (andel) => boolean;
};

/**
 *  InntektFieldArrayAndelRow
 *
 * Presentasjonskomponent: Viser en rad korresponderende til ein andel i beregning.
 */
const InntektFieldArrayAndelRow: FunctionComponent<OwnProps> = ({
  field,
  skalVisePeriode,
  skalViseRefusjon,
  skalViseSletteknapp,
  readOnly,
  isAksjonspunktClosed,
  removeAndel,
  beregningsgrunnlag,
  alleKodeverk,
  rowName,
  skalFastsetteInntektForAndel,
}) => {
  const intl = useIntl();
  const { getValues } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}`);
  const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);

  const skalRedigereInntektskategori = getSkalRedigereInntektskategori(beregningsgrunnlag)(field);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(alleKodeverk);
  const harPeriode = field.arbeidsperiodeFom || field.arbeidsperiodeTom;
  return (
    <TableRow>
      <TableColumn>
        <InputField name={`${rowName}.andel`} className={styles.storBredde} readOnly />
      </TableColumn>
      <TableColumn>
        {skalVisePeriode && harPeriode && (
          <PeriodLabel dateStringFom={field.arbeidsperiodeFom} dateStringTom={field.arbeidsperiodeTom} />
        )}
      </TableColumn>
      {kanRedigereInntekt && (
        <TableColumn className={styles.rightAlignInput}>
          <InputField
            label={intl.formatMessage(
              {
                id: 'BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn',
              },
              { andel: field.andel },
            )}
            name={`${rowName}.fastsattBelop`}
            parse={parseCurrencyInput}
            className={styles.mediumBredde}
            readOnly={readOnly}
            isEdited={isAksjonspunktClosed}
            validate={skalFastsetteInntektForAndel(field) ? [required, maxValueFormatted(178956970)] : []}
          />
        </TableColumn>
      )}
      {!kanRedigereInntekt && (
        <TableColumn className={styles.rightAlign}>
          <InputField
            name={`${rowName}.belopReadOnly`}
            className={styles.mediumBredde}
            parse={parseCurrencyInput}
            readOnly
          />
        </TableColumn>
      )}
      {skalViseRefusjon && (
        <TableColumn className={styles.rightAlign}>
          <InputField
            name={`${rowName}.refusjonskrav`}
            className={styles.litenBredde}
            readOnly
            parse={parseCurrencyInput}
          />
        </TableColumn>
      )}
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Inntektskategori' })}
          name={`${rowName}.inntektskategori`}
          className={styles.storBredde}
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          validate={readOnly ? [] : [required]}
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

export default InntektFieldArrayAndelRow;
