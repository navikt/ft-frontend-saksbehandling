import React, { FunctionComponent } from 'react';
import { Modal, Heading, Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OwnProps {
  text: string;
  okButtonText?: string;
  showModal: boolean;
  submit: () => void;
  cancel: () => void;
}

/**
 * OkAvbrytModal
 *
 * Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.
 */
const OkAvbrytModal: FunctionComponent<OwnProps> = ({ text, okButtonText, showModal, cancel, submit }) => (
  <Modal width="small" open={showModal} aria-label={text} onClose={cancel}>
    <Modal.Body>
      <Heading size="small">{text}</Heading>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" size="small" onClick={submit} autoFocus type="button">
        {okButtonText || intl.formatMessage({ id: 'OkAvbrytModal.Ok' })}
      </Button>
      <Button variant="secondary" size="small" onClick={cancel} type="button">
        {intl.formatMessage({ id: 'OkAvbrytModal.Avbryt' })}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default OkAvbrytModal;
