import { Label, Table } from '@navikt/ds-react';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import AndelFieldValue from '../../typer/FieldValues';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import {
  erArbeidstaker,
  erDagpenger,
  erFrilanser,
  erMilitaerEllerSivil,
  erOverstyring,
  erSelvstendigNæringsdrivende,
  getArbeidsgiverIndex,
  getKanRedigereInntekt,
} from './BgFaktaUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';
import styles from './inntektFieldArray.module.css';

const summerBeregnet = (
  fields: AndelFieldValue[],
  formValues: FaktaOmBeregningAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
) => {
  let sum = 0;

  fields.forEach(field => {
    let belop;
    const kanRedigereInntekt = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field);

    if (kanRedigereInntekt) {
      const erFrilansInntekt = erFrilanser(field);
      const erArbeidstakerInntekt = erArbeidstaker(field);
      const erDagpengerInntekt = erDagpenger(field);
      const erSelvstendigNæringsdrivendeInntekt = erSelvstendigNæringsdrivende(field);
      const erMilitærEllerSivilInntekt = erMilitaerEllerSivil(field);

      if (field.fastsattBelop && erOverstyring(formValues)) {
        belop = field.fastsattBelop;
      } else if (erFrilansInntekt && formValues?.frilansInntektValues?.fastsattBelop) {
        belop = formValues.frilansInntektValues.fastsattBelop;
      } else if (
        erArbeidstakerInntekt &&
        formValues?.arbeidstakerInntektValues[
          getArbeidsgiverIndex(formValues.arbeidstakerInntektValues, field.arbeidsgiverId)
        ]?.fastsattBelop
      ) {
        belop =
          formValues.arbeidstakerInntektValues[
            getArbeidsgiverIndex(formValues.arbeidstakerInntektValues, field.arbeidsgiverId)
          ].fastsattBelop;
      } else if (erDagpengerInntekt && formValues?.dagpengerInntektValues?.fastsattBelop) {
        belop = formValues.dagpengerInntektValues.fastsattBelop;
      } else if (
        erSelvstendigNæringsdrivendeInntekt &&
        formValues?.selvstendigNæringsdrivendeInntektValues?.fastsattBelop
      ) {
        belop = formValues.selvstendigNæringsdrivendeInntektValues.fastsattBelop;
      } else if (erMilitærEllerSivilInntekt && formValues?.militærEllerSivilInntektValues?.fastsattBelop) {
        belop = formValues.militærEllerSivilInntektValues.fastsattBelop;
      } else if (field.fastsattBelop && !erOverstyring(formValues)) {
        belop = 0;
      } else {
        belop = field.fastsattBelop;
      }
    } else {
      belop = field.belopReadOnly;
    }

    sum += belop ? removeSpacesFromNumber(belop) : 0;
  });
  return sum > 0 ? sum : 0;
};

type OwnProps = {
  readOnly: boolean;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
};

const SummaryRow: FunctionComponent<OwnProps> = ({
  skalVisePeriode,
  skalViseRefusjon,
  readOnly,
  beregningsgrunnlag,
}) => {
  const { control, getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const fields = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`,
  });

  const sumBeregnet = summerBeregnet(fields, formValues, beregningsgrunnlag) || 0;

  return (
    <Table.Row>
      <Table.DataCell>
        <Label as="p" size="small">
          <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
        </Label>
      </Table.DataCell>
      {skalVisePeriode && <Table.DataCell />}
      <Table.DataCell align="right">
        <div className={styles.readOnlyContainer}>
          <Label as="p" data-testid="sum" className={readOnly ? styles.readOnlyContent : ''} size="small">
            {formatCurrencyNoKr(sumBeregnet)}
          </Label>
        </div>
      </Table.DataCell>
      {skalViseRefusjon && <Table.DataCell />}
      <Table.DataCell />
    </Table.Row>
  );
};
export default SummaryRow;
