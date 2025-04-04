import { ReactNode } from 'react';
import { createIntl as createReactIntl, createIntlCache, IntlShape } from 'react-intl';

const cache = createIntlCache();

export const createIntl = (messages: Record<string, string>): IntlShape =>
  createReactIntl(
    {
      locale: 'nb-NO',
      messages,
    },
    cache,
  );

export const BTag = (chunks: ReactNode[]) => <b key="bold">{chunks}</b>;
