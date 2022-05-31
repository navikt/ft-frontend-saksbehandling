import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregning } from '@navikt/ft-types';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { VurderMilitærValues } from '../../../typer/FaktaBeregningTypes';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
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
};

interface StaticFunctions {
  buildInitialValues: (faktaOmBeregning: FaktaOmBeregning) => VurderMilitærValues;
  transformValues: (values: any) => any;
}

const VurderMilitaer: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />
      </Normaltekst>
      <RadioGroupPanel
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.${vurderMilitaerField}`}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        validate={[required]}
        parse={parseStringToBoolean}
        isHorizontal
      />
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
