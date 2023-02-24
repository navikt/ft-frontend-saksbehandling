import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Modal } from '@navikt/ds-react/esm';

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
      open={isOpen}
      closeButton
      aria-label="Sett behandling på vent"
      onClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>Sett behandling på vent</Modal.Content>
    </Modal>
  );
  const lagNyBehandling = () => (
    <Modal
      open={isOpen}
      closeButton
      aria-label="Sett behandling på vent"
      onClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>Lag ny behandling</Modal.Content>
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
