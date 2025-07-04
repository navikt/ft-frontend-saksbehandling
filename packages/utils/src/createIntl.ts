import { createIntl as createReactIntl, createIntlCache, type IntlShape } from 'react-intl';

const cache = createIntlCache();

export const createIntl = (messages: Record<string, string>): IntlShape =>
  createReactIntl(
    {
      locale: 'nb-NO',
      messages,
    },
    cache,
  );
