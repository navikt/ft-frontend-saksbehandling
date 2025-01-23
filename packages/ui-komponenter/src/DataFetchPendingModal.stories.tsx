import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { StoryFn } from '@storybook/react';

import { createIntl } from '@navikt/ft-utils';
import { DataFetchPendingModal } from './DataFetchPendingModal';

const intl = createIntl({
  'DataFetchPendingModal.LosningenJobberMedBehandlingen': 'Løsningen jobber med behandlingen...',
});

export default {
  title: 'DataFetchPendingModal',
  component: DataFetchPendingModal,
};

const Template: StoryFn = () => (
  <div style={{ width: '200px' }}>
    <RawIntlProvider value={intl}>
      <DataFetchPendingModal pendingMessage="Henting av data pågår" />
    </RawIntlProvider>
  </div>
);

export const Default = Template.bind({});
