import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps } from '@navikt/ft-types';
import { ReduxWrapper } from '@navikt/ft-form-redux-legacy';

import BeregningFP from './components/BeregningFP';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
    beregningsgrunnlag?: Beregningsgrunnlag;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const BeregningsgrunnlagProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  beregningsgrunnlag,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="BeregningsgrunnlagProsessIndex" formData={formData} setFormData={setFormData}>
      <BeregningFP
        beregningsgrunnlag={beregningsgrunnlag}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        vilkar={vilkar}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BeregningsgrunnlagProsessIndex;
