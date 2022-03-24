import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@ft-frontend-saksbehandling/utils';
import { ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag } from '@ft-frontend-saksbehandling/types';
import { ReduxWrapper } from '@ft-frontend-saksbehandling/form';

import BeregningInfoPanel from './components/BeregningInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const BeregningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="BeregningFaktaIndex" formData={formData} setFormData={setFormData}>
      <BeregningInfoPanel
        intl={intl}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BeregningFaktaIndex;
