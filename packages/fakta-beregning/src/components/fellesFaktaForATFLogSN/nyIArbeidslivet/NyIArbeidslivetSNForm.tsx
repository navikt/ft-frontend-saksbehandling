import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { List, Radio, ReadMore } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues, NyIArbeidslivetValues } from '../../../typer/FaktaBeregningTypes';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

/**
 * NyIArbeidslivetSNForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_SN_NY_I_ARBEIDSLIVET som ber
 * bruker bestemme om en søker er selvstendig næringsdrivende og ny i arbeidslivet med en radioknapp.
 */

const radioGroupFieldName = 'erSNNyIArbeidslivet';

interface Props {
  readOnly: boolean;
}

export const NyIArbeidslivetSNForm = ({ readOnly }: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${radioGroupFieldName}`}
      control={control}
      legend={<FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende" />}
      description={
        <ReadMore
          size="small"
          header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
        >
          <List size="small">
            <FormattedMessage tagName={List.Item} id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1" />
            <FormattedMessage tagName={List.Item} id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2" />
            <FormattedMessage tagName={List.Item} id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3" />
          </List>
        </ReadMore>
      }
      validate={[required]}
      readOnly={readOnly}
    >
      <Radio value={true} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
      </Radio>
      <Radio value={false} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />
      </Radio>
    </RhfRadioGroup>
  );
};

NyIArbeidslivetSNForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyIArbeidslivetValues => {
  const initialValues: NyIArbeidslivetValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const snAndeler = alleAndeler.flat().filter(andel => andel?.aktivitetStatus === 'SN');
  if (snAndeler.length > 0) {
    initialValues[radioGroupFieldName] = snAndeler[0]?.erNyIArbeidslivet;
  }
  return initialValues;
};

NyIArbeidslivetSNForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues) => ({
  vurderNyIArbeidslivet: { erNyIArbeidslivet: !!values[radioGroupFieldName] },
});
