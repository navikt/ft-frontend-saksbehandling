import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardProsessPanelProps,
  Vilkar,
} from '@navikt/ft-types';

import BeregningsgrunnlagResultatAP from './types/interface/BeregningsgrunnlagAP';
import BeregningFP from './components/BeregningFP';
import BeregningsgrunnlagValues from './types/BeregningsgrunnlagAksjonspunktTsType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
};

const BeregningsgrunnlagProsessIndex: FunctionComponent<
  OwnProps & StandardProsessPanelProps<BeregningsgrunnlagResultatAP[], BeregningsgrunnlagValues>
> = ({
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
    <BeregningFP
      beregningsgrunnlag={beregningsgrunnlag}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      vilkar={vilkar}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      setFormData={setFormData}
      formData={formData}
    />
  </RawIntlProvider>
);

export default BeregningsgrunnlagProsessIndex;
