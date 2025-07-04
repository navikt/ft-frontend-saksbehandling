import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import type { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import type { AndelFieldValue } from '../../typer/FieldValues';
import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import {
  erArbeidstaker,
  erDagpenger,
  erFrilanser,
  erMilitaerEllerSivil,
  erOverstyringAvBeregningsgrunnlag,
  erSelvstendigNæringsdrivende,
  getArbeidsgiverIndex,
  getKanRedigereInntekt,
} from './BgFaktaUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

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

      if (field.fastsattBelop && erOverstyringAvBeregningsgrunnlag(formValues)) {
        belop = field.fastsattBelop;
      } else if (erFrilansInntekt && formValues?.frilansInntektValues?.fastsattBelop) {
        belop = formValues.frilansInntektValues.fastsattBelop;
      } else if (
        erArbeidstakerInntekt &&
        field.arbeidsgiverId &&
        formValues?.arbeidstakerInntektValues?.[
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
      } else if (field.fastsattBelop && !erOverstyringAvBeregningsgrunnlag(formValues)) {
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

interface Props {
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
}

export const SummaryRow = ({ skalVisePeriode, skalViseRefusjon, beregningsgrunnlag }: Props) => {
  const { control, getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const fields = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`,
  });

  const sumBeregnet = fields ? summerBeregnet(fields, formValues, beregningsgrunnlag) : 0;

  return (
    <Table.Row>
      <Table.HeaderCell textSize="small">
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
      </Table.HeaderCell>
      {skalVisePeriode && <Table.DataCell />}
      <Table.HeaderCell align="right" textSize="small" data-testid="sum">
        <BeløpLabel beløp={sumBeregnet} />
      </Table.HeaderCell>
      {skalViseRefusjon && <Table.DataCell />}
      <Table.DataCell />
    </Table.Row>
  );
};
