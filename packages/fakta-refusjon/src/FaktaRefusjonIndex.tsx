import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktTekst } from './components/AksjonspunktTekst/AksjonspunktTekst';
import { Refusjonskrav } from './components/Refusjonskrav';
import { Utbetaling } from './components/Utbetaling';
import type { AksjonspunktRefusjon } from './types/aksjonspunkt';
import type { RefusjonsAndel } from './types/dataTypes';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface FaktaRefusjonIndexProps {
  aksjonspunkt: AksjonspunktRefusjon[];
  refusjonsandeler: RefusjonsAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FaktaRefusjonIndex = ({
  aksjonspunkt,
  refusjonsandeler,
  arbeidsgiverOpplysningerPerId,
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
      <Utbetaling />

      <Refusjonskrav />
    </VStack>
  </RawIntlProvider>
);
