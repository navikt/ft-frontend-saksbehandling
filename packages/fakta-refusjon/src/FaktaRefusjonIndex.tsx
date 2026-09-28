import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import { Refusjonskrav } from './components/Refusjonskrav';
import { Utbetaling } from './components/Utbetaling';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const FaktaRefusjonIndex = () => (
  <RawIntlProvider value={intl}>
    <VStack gap="space-20">
      <Heading size="small" level="2">
        <FormattedMessage id="FaktaRefusjonIndex.Tittel" />
      </Heading>

      <Utbetaling />

      <Refusjonskrav />
    </VStack>
  </RawIntlProvider>
);
