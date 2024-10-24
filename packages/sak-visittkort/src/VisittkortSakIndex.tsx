import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { Fagsak, FagsakPersoner } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import VisittkortPanel from './components/VisittkortPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface Props {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge?: boolean;
  erTilbakekreving?: boolean;
}

const VisittkortSakIndex = ({
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
  harVerge = false,
  erTilbakekreving = false,
}: Props) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersoner}
      harVerge={harVerge}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);

export default VisittkortSakIndex;
