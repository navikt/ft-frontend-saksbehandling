import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { createIntl } from '@navikt/ft-utils';
import DataFetchPendingModal from './DataFetchPendingModal';

const intl = createIntl({
  'DataFetchPendingModal.LosningenJobberMedBehandlingen': 'Løsningen jobber med behandlingen...',
});

export default {
  title: 'ui-komponenter/DataFetchPendingModal',
  component: DataFetchPendingModal,
};

const Template: Story = () => (
  <div style={{ width: '200px' }}>
    <RawIntlProvider value={intl}>
      <DataFetchPendingModal pendingMessage="Henting av data pågår" />
    </RawIntlProvider>
  </div>
);

export const Default = Template.bind({});
