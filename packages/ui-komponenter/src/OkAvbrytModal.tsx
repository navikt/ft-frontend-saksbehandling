import { Button, Heading, Modal } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
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
export const OkAvbrytModal = ({ text, okButtonText, showModal, cancel, submit }: Props) => (
  <Modal width="small" open={showModal} aria-label={text} onClose={cancel}>
    <Modal.Body>
      <Heading size="small" level="2">
        {text}
      </Heading>
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
