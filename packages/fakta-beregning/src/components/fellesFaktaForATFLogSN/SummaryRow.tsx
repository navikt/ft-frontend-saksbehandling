import { use } from 'react';
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

interface Props {
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
}

export const SummaryRow = ({ skalVisePeriode, skalViseRefusjon, beregningsgrunnlag }: Props) => {
  const { control, getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = use<number>(BeregningsgrunnlagIndexContext);
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
      belop = getEditableBelop(field, formValues);
    } else {
      belop = field.belopReadOnly;
    }
    sum += belop ? removeSpacesFromNumber(belop) : 0;
  });
  return Number.isNaN(sum) ? undefined : sum;
};

const getEditableBelop = (field: AndelFieldValue, formValues: FaktaOmBeregningAksjonspunktValues) => {
  if (field.fastsattBelop && erOverstyringAvBeregningsgrunnlag(formValues)) {
    return field.fastsattBelop;
  }

  const inntektstypeBelop = getInntektstypeBelop(field, formValues);
  if (inntektstypeBelop) {
    return inntektstypeBelop;
  }

  if (field.fastsattBelop && !erOverstyringAvBeregningsgrunnlag(formValues)) {
    return 0;
  }

  return field.fastsattBelop;
};

const getInntektstypeBelop = (field: AndelFieldValue, formValues: FaktaOmBeregningAksjonspunktValues) => {
  if (erFrilanser(field) && formValues?.frilansInntektValues?.fastsattBelop) {
    return formValues.frilansInntektValues.fastsattBelop;
  }

  if (
    erArbeidstaker(field) &&
    field.arbeidsgiverId &&
    formValues?.arbeidstakerInntektValues?.[
      getArbeidsgiverIndex(formValues.arbeidstakerInntektValues, field.arbeidsgiverId)
    ]?.fastsattBelop
  ) {
    return formValues.arbeidstakerInntektValues[
      getArbeidsgiverIndex(formValues.arbeidstakerInntektValues, field.arbeidsgiverId)
    ].fastsattBelop;
  }

  if (erDagpenger(field) && formValues?.dagpengerInntektValues?.fastsattBelop) {
    return formValues.dagpengerInntektValues.fastsattBelop;
  }

  if (erSelvstendigNæringsdrivende(field) && formValues?.selvstendigNæringsdrivendeInntektValues?.fastsattBelop) {
    return formValues.selvstendigNæringsdrivendeInntektValues.fastsattBelop;
  }

  if (erMilitaerEllerSivil(field) && formValues?.militærEllerSivilInntektValues?.fastsattBelop) {
    return formValues.militærEllerSivilInntektValues.fastsattBelop;
  }

  return undefined;
};
