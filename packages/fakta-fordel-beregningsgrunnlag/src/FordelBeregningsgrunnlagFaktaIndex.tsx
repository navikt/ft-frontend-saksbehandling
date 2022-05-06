import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import FordelBeregningsgrunnlagAP from './types/interface/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagPanel from './components/FordelBeregningsgrunnlagPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
};

type Props = OwnProps & StandardFaktaPanelProps<FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP>;

const FordelBeregningsgrunnlagFaktaIndex: FunctionComponent<Props> = ({
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
    <FordelBeregningsgrunnlagPanel
      behandlingType={behandling.type}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      beregningsgrunnlag={beregningsgrunnlag}
      submittable={submittable}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default FordelBeregningsgrunnlagFaktaIndex;
