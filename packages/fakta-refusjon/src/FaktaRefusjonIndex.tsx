import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktTekst } from './components/AksjonspunktTekst/AksjonspunktTekst';
import type { AvklarRefusjonsKravFormValues } from './components/Refusjonskrav/formValues';
import { RefusjonskravForm } from './components/Refusjonskrav/RefusjonskravForm';
import type { AksjonspunktRefusjon, AksjonspunktSubmitType } from './types/aksjonspunkt';
import type { RefusjonsAndel } from './types/dataTypes';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface FaktaRefusjonIndexProps {
  aksjonspunkt: AksjonspunktRefusjon[];
  refusjonsandeler: RefusjonsAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  readOnly: boolean;
  submitCallback: (aksjonspunktData: AksjonspunktSubmitType) => Promise<void>;
  formData?: AvklarRefusjonsKravFormValues;
  setFormData: (data: AvklarRefusjonsKravFormValues) => void;
}

export const FaktaRefusjonIndex = ({
  aksjonspunkt,
  refusjonsandeler,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  submitCallback,
  formData,
  setFormData,
}: FaktaRefusjonIndexProps) => (
  <RawIntlProvider value={intl}>
    <VStack gap="space-20">
      <Heading size="small" level="2">
        <FormattedMessage id="FaktaRefusjonIndex.Tittel" />
      </Heading>

      <AksjonspunktTekst
        aksjonspunkt={aksjonspunkt}
        refusjonsandeler={refusjonsandeler}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <RefusjonskravForm
        refusjonsandeler={refusjonsandeler}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        readOnly={readOnly}
        submitCallback={submitCallback}
        formData={formData}
        setFormData={setFormData}
        aksjonspunkt={aksjonspunkt}
      />
    </VStack>
  </RawIntlProvider>
);
