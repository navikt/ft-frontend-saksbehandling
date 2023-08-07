import { PersonPencilFillIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage } from '@navikt/ds-react';
import { InputField, ReadOnlyField, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, KodeverkMedNavn } from '@navikt/ft-types';
import { PeriodLabel, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { VurderOgFastsettATFLValues } from '../../typer/FaktaBeregningTypes';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import { erFrilanser, getKanRedigereInntekt, getSkalRedigereInntektskategori } from './BgFaktaUtils';
import styles from './inntektFieldArray.module.css';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

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

const getMåFastsettesText = () => <ErrorMessage size="small">Må fastsettes</ErrorMessage>;

type OwnProps = {
  readOnly: boolean;
  field: FieldArrayWithId<VurderOgFastsettATFLValues, 'inntektFieldArray', 'id'>;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  skalViseSletteknapp: boolean;
  removeAndel: (...args: any[]) => any;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag;
  rowName: string;
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
  removeAndel,
  beregningsgrunnlag,
  kodeverkSamling,
  rowName,
}) => {
  const intl = useIntl();
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const erFrilans = erFrilanser(field);
  const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);
  const harEndretFrilansinntekt = erFrilans && kanRedigereInntekt && formValues?.frilansinntektValues?.fastsattBelop;
  const harEndretInntektForArbeidsgiver =
    !erFrilans && kanRedigereInntekt && formValues?.arbeidstakerInntektValues?.[field.arbeidsgiverId];
  const visMåFastsettesText =
    (erFrilans && kanRedigereInntekt && !formValues?.frilansinntektValues?.fastsattBelop) ||
    (!erFrilans && kanRedigereInntekt && !formValues?.arbeidstakerInntektValues?.[field.arbeidsgiverId]);

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
      <TableColumn className={styles.rightAlign}>
        <div className={styles.inntekt}>
          <div
            className={
              harEndretInntektForArbeidsgiver || harEndretFrilansinntekt
                ? styles.inntektOldStrikethrough
                : styles.inntektOld
            }
          >
            {visMåFastsettesText ? (
              getMåFastsettesText()
            ) : (
              <InputField
                name={`${rowName}.belopReadOnly`}
                className={styles.mediumBredde}
                parse={parseCurrencyInput}
                readOnly
              />
            )}
          </div>
          {harEndretInntektForArbeidsgiver && (
            <>
              <div className={styles.inntektNew}>
                <InputField
                  name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${field.arbeidsgiverId}`}
                  className={styles.mediumBredde}
                  parse={parseCurrencyInput}
                  readOnly
                />
              </div>
              <PersonPencilFillIcon title="Endret av saksbehandler" fontSize="1.5rem" color="#C77300" />
            </>
          )}
          {harEndretFrilansinntekt && (
            <>
              <div className={styles.inntektNew}>
                <InputField
                  name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansinntektValues.fastsattBelop`}
                  className={styles.mediumBredde}
                  parse={parseCurrencyInput}
                  readOnly
                />
              </div>
              <PersonPencilFillIcon title="Endret av saksbehandler" fontSize="1.5rem" color="#C77300" />
            </>
          )}
        </div>
      </TableColumn>

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
