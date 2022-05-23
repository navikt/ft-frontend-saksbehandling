import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregning } from '@navikt/ft-types';
import { VurderMilitærValues } from '../../../typer/FaktaBeregningTypes';
import VurderFaktaContext from '../VurderFaktaContext';

/**
 * VurderMilitær
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_MILITAER som ber
 * saksbehandler bestemme om en søker har inntekt fra militær eller siviltjeneste.
 */
export const vurderMilitaerField = 'vurderMilitær';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (faktaOmBeregning: FaktaOmBeregning) => VurderMilitærValues;
  transformValues: (values: any) => any;
}

const VurderMilitaer: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />
      </Normaltekst>
      <RadioGroupField
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.${vurderMilitaerField}`}
        validate={[required]}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed}
      >
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
      </RadioGroupField>
    </div>
  );
};

VurderMilitaer.buildInitialValues = (faktaOmBeregning: FaktaOmBeregning): VurderMilitærValues => {
  const initialValues = {};
  if (!faktaOmBeregning || !faktaOmBeregning.vurderMilitaer) {
    return initialValues;
  }
  initialValues[vurderMilitaerField] = faktaOmBeregning.vurderMilitaer.harMilitaer;
  return initialValues;
};

VurderMilitaer.transformValues = values => ({
  vurderMilitaer: { harMilitaer: values[vurderMilitaerField] },
});

export default VurderMilitaer;
