import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import Modal from 'nav-frontend-modal';

import MenySakIndex from './MenySakIndex';
import MenyData from './MenyData';

import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

export default {
  title: 'sak/sak-meny',
  component: MenySakIndex,
};

const Template: Story = () => {
  const [isOpen, setOpen] = useState(true);

  const behandlingPåVentModal = () => (
    <Modal
      isOpen={isOpen}
      closeButton
      contentLabel="Sett behandling på vent"
      onRequestClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      Sett behandling på vent
    </Modal>
  );
  const lagNyBehandling = () => (
    <Modal
      isOpen={isOpen}
      closeButton
      contentLabel="Sett behandling på vent"
      onRequestClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      Lag ny behandling
    </Modal>
  );

  return (
    <MenySakIndex
      data={[
        new MenyData(true, 'Sett behandling på vent').medModal(behandlingPåVentModal),
        new MenyData(true, 'Lag ny behandling').medModal(lagNyBehandling),
      ]}
    />
  );
};

export const MenyMedToHandlinger = Template.bind({});
