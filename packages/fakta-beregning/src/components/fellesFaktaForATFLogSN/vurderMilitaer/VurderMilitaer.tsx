import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregning } from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues, VurderMilitærValues } from '../../../typer/FaktaBeregningTypes';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
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
  const intl = useIntl();

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${vurderMilitaerField}`}
      control={control}
      label={
        <VStack gap="2">
          <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      }
      isReadOnly={readOnly}
      radios={[
        { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
        { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
      ]}
      validate={[required]}
      parse={parseStringToBoolean}
    />
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
