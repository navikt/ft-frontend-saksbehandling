import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { List, Radio, ReadMore } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type { FaktaOmBeregning } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues, VurderMilitærValues } from '../../../typer/FaktaBeregningTypes';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

/**
 * VurderMilitær
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_MILITAER som ber
 * saksbehandler bestemme om en søker har inntekt fra militær eller siviltjeneste.
 */
export const vurderMilitaerField = 'vurderMilitær';

interface Props {
  readOnly: boolean;
}

export const VurderMilitaer = ({ readOnly }: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();

  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${vurderMilitaerField}`}
      control={control}
      validate={[required]}
      legend={<FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />}
      description={
        <ReadMore
          size="small"
          header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
        >
          <List size="small">
            <FormattedMessage tagName={List.Item} id="BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1" />
            <FormattedMessage tagName={List.Item} id="BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2" />
          </List>
        </ReadMore>
      }
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

VurderMilitaer.buildInitialValues = (faktaOmBeregning: FaktaOmBeregning): VurderMilitærValues => {
  const initialValues: VurderMilitærValues = {};
  if (!faktaOmBeregning || !faktaOmBeregning.vurderMilitaer) {
    return initialValues;
  }
  initialValues[vurderMilitaerField] = faktaOmBeregning.vurderMilitaer.harMilitaer;
  return initialValues;
};

VurderMilitaer.transformValues = (values: FaktaOmBeregningAksjonspunktValues) => ({
  vurderMilitaer: { harMilitaer: !!values[vurderMilitaerField] },
});
