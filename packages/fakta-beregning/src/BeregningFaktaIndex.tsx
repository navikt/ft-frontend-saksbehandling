import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag } from '@navikt/ft-types';
import { ReduxWrapper } from '@navikt/ft-form-redux-legacy';

import BeregningFaktaAP, {
  BeregningOverstyringAP, AvklarBeregningsaktiviteterAP,
} from './typer/interface/BeregningFaktaAP';
import { OverstyrBeregningsaktiviteterAP } from './typer/interface/BeregningAktivitetAP';
import BeregningInfoPanel from './components/BeregningInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type Akasjonspunkter = AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP | BeregningFaktaAP | BeregningOverstyringAP;

const BeregningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps<Akasjonspunkter>> = ({
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  readOnly,
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
        submittable={submittable}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BeregningFaktaIndex;
