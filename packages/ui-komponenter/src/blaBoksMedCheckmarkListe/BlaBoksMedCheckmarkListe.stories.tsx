import React from 'react';
import { StoryFn } from '@storybook/react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import BlaBoksMedCheckmarkListe from './BlaBoksMedCheckmarkListe';

const intl = createIntl({});

export default {
  title: 'BlaBoksMedCheckmarkListe',
  component: BlaBoksMedCheckmarkListe,
};

export const Default: StoryFn = () => (
  <RawIntlProvider value={intl}>
    <BlaBoksMedCheckmarkListe
      saksopplysninger={[
        { textId: '1', readMoreContent: <div>test</div> },
        { textId: '2', readMoreContent: <div>test2</div> },
      ]}
    />
  </RawIntlProvider>
);
