import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag,
} from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@navikt/ft-form-redux-legacy';
import { VurderRefusjonBeregningsgrunnlagAP, FordelBeregningsgrunnlagAP } from '@navikt/ft-types-aksjonspunkter';

import FordelBeregningsgrunnlagPanel from './components/FordelBeregningsgrunnlagPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
};

const FordelBeregningsgrunnlagFaktaIndex:FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="FordelBeregningsgrunnlagFaktaIndex" formData={formData} setFormData={setFormData}>
      <FordelBeregningsgrunnlagPanel
        behandlingType={behandling.type}
        alleKodeverk={alleKodeverk}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        beregningsgrunnlag={beregningsgrunnlag}
        submittable={submittable}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default FordelBeregningsgrunnlagFaktaIndex;
