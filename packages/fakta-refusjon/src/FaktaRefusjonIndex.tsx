import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const FaktaRefusjonIndex = () => (
  <RawIntlProvider value={intl}>
    <Heading size="small" level="2">
      <FormattedMessage id="FaktaRefusjonIndex.Tittel" />
    </Heading>
  </RawIntlProvider>
);
