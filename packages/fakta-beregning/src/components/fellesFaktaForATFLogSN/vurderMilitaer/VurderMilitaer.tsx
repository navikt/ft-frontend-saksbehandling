import { List, ReadMore } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregning } from '@navikt/ft-types';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { VurderMilitærValues } from '../../../typer/FaktaBeregningTypes';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';

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
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();

  return (
    <div>
      <RadioGroupPanel
        label={
          <>
            <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <List>
                <List.Item>
                  Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten
                  har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke
                  tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.
                </List.Item>
                <List.Item>
                  {`Svarer du "ja" vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du "nei"
                  beregnes det etter vanlige regler.`}
                </List.Item>
              </List>
            </ReadMore>
          </>
        }
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${vurderMilitaerField}`}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        validate={[required]}
        parse={parseStringToBoolean}
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
