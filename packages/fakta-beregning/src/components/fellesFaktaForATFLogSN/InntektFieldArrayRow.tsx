import { XMarkIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';
import { InputField, ReadOnlyField, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { PeriodLabel, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FieldArrayWithId } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import { getSkalRedigereInntektskategori } from './BgFaktaUtils';
import styles from './inntektFieldArray.module.css';

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

export const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling[KodeverkType.INNTEKTSKATEGORI].slice().sort((a, b) => a.navn.localeCompare(b.navn));

type OwnProps = {
  readOnly: boolean;
  field: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>;
  // isAksjonspunktClosed: boolean;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  skalViseSletteknapp: boolean;
  removeAndel: (...args: any[]) => any;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag;
  rowName: string;
  // skalFastsetteInntektForAndel: (andel) => boolean;
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
  // isAksjonspunktClosed,
  removeAndel,
  beregningsgrunnlag,
  kodeverkSamling,
  rowName,
  // skalFastsetteInntektForAndel,
}) => {
  const intl = useIntl();
  // const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  // const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  // const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  // const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);

  const skalRedigereInntektskategori = getSkalRedigereInntektskategori(beregningsgrunnlag)(field);
  const inntektskategoriKoder = getInntektskategorierAlfabetiskSortert(kodeverkSamling);
  const harPeriode = field.arbeidsperiodeFom || field.arbeidsperiodeTom;
  return (
    <TableRow>
      <TableColumn>
        <InputField name={`${rowName}.andel`} className={styles.storBredde} readOnly />
      </TableColumn>
      <TableColumn>
        {skalVisePeriode && harPeriode && (
          <ReadOnlyField
            value={<PeriodLabel dateStringFom={field.arbeidsperiodeFom} dateStringTom={field.arbeidsperiodeTom} />}
          />
        )}
      </TableColumn>
      {/* {kanRedigereInntekt && (
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
            hideLabel
          />
        </TableColumn>
      )} */}
      {/* {!kanRedigereInntekt && ( */}
      <TableColumn className={styles.rightAlign}>
        <InputField
          name={`${rowName}.belopReadOnly`}
          className={styles.mediumBredde}
          parse={parseCurrencyInput}
          readOnly
        />
      </TableColumn>
      {/* )} */}
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
          hideLabel
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp && (
          <Button
            icon={<XMarkIcon aria-hidden className={styles.slettIkon} />}
            onClick={() => removeAndel()}
            type="button"
            variant="tertiary"
          />
        )}
      </TableColumn>
    </TableRow>
  );
};

export default InntektFieldArrayAndelRow;
