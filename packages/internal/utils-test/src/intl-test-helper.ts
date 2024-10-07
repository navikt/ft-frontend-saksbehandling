import { createIntl, createIntlCache, IntlShape } from 'react-intl';

// Create the IntlProvider to retrieve context for wrapping around.
const cache = createIntlCache();

const getIntlObject = (moduleMessages: Record<string, string>) => {
  const selectedMessages = moduleMessages;

  return createIntl(
    {
      locale: 'nb-NO',
      defaultLocale: 'nb-NO',
      messages: selectedMessages,
    },
    cache,
  );
};

const getIntlMock = (customMessages: Record<string, string>): IntlShape => getIntlObject(customMessages);

export default getIntlMock;
