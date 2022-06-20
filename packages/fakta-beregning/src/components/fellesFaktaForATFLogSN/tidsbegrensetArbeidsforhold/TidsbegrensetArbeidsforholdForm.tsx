import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, TidsbegrensetandelValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { createVisningsnavnFakta } from '../../ArbeidsforholdHelper';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../VurderFaktaContext';

const kortvarigStringId = 'BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold';

const createArbeidsforholdRadioKey = (andel: KortvarigAndel): string =>
  andel && andel.arbeidsforhold
    ? `${andel.arbeidsforhold.arbeidsgiverIdent}(${andel.arbeidsforhold.arbeidsforholdId})(${andel.andelsnr})`
    : '';

const lagVisningsnavn = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return createVisningsnavnFakta(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
};

type OwnProps = {
  readOnly: boolean;
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (values: FaktaOmBeregningAksjonspunktValues, andeler: KortvarigAndel[]) => any;
  buildInitialValues: (andeler: KortvarigAndel[]) => TidsbegrensetandelValues;
}

/**
 * TidsbegrensetArbeidsforholdForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for Vurder Tidsbegrenset Arbeidsforhold som ber
 * bruker bestemme om en liste med arbeidsforhold er tidsbegrenset eller ikke.
 */

export const TidsbegrensetArbeidsforholdForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  faktaOmBeregning,
  arbeidsgiverOpplysningerPerId,
}) => {
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      {andelsliste.map(andel => (
        <div
          key={`fastsettTidsbegrensedeForhold_${lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId)}`}
        >
          <RadioGroupPanel
            label={
              <Normaltekst>
                <FormattedMessage
                  id={kortvarigStringId}
                  values={{
                    navn: lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId),
                    fom: moment(andel.arbeidsforhold.startdato).format(DDMMYYYY_DATE_FORMAT),
                    tom: moment(andel.arbeidsforhold.opphoersdato).format(DDMMYYYY_DATE_FORMAT),
                  }}
                />
              </Normaltekst>
            }
            name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.tidsbegrensetValues.${createArbeidsforholdRadioKey(
              andel,
            )}`}
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
      ))}
    </div>
  );
};

TidsbegrensetArbeidsforholdForm.buildInitialValues = (andeler: KortvarigAndel[]): TidsbegrensetandelValues => {
  const initialValues = {};
  if (!andeler) {
    return initialValues;
  }
  andeler.forEach(andel => {
    if (andel.erTidsbegrensetArbeidsforhold !== undefined) {
      initialValues[createArbeidsforholdRadioKey(andel)] = andel.erTidsbegrensetArbeidsforhold;
    }
  });
  return initialValues;
};

TidsbegrensetArbeidsforholdForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  andeler: KortvarigAndel[],
): FaktaBeregningTransformedValues => {
  const newValues = [];
  andeler.forEach(andel => {
    const fieldName = createArbeidsforholdRadioKey(andel);
    const booleanValue = values.tidsbegrensetValues[fieldName];
    const valueObject = {
      andelsnr: andel.andelsnr,
      tidsbegrensetArbeidsforhold: booleanValue,
      opprinneligVerdi: andel.erTidsbegrensetArbeidsforhold,
    };
    newValues.push(valueObject);
  });
  return {
    vurderTidsbegrensetArbeidsforhold: { fastsatteArbeidsforhold: newValues },
  };
};

export default TidsbegrensetArbeidsforholdForm;
