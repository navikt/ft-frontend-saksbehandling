import React, { Component } from 'react';
import { HStack, Label, Loader, Modal } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

import styles from './dataFetchPendingModal.module.css';

const intl = createIntl(messages);

// Skal ikke være mulig å lukke modal
const doNothing = () => undefined;

// Vent to sekund med å vise melding
const MESSAGE_DELAY_MILLIS = 2000;

export interface OwnProps {
  pendingMessage: string;
}

interface OwnState {
  displayMessage: boolean;
}

/**
 * DataFetchPendingModal
 *
 * Denne modalen vises når det går mer enn to sekund å polle etter serverdata.
 */
class DataFetchPendingModal extends Component<OwnProps, OwnState> {
  timer: ReturnType<typeof setTimeout>;

  constructor(props: OwnProps) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
      displayMessage: false,
    };

    this.timer = setTimeout(this.enableMessage, MESSAGE_DELAY_MILLIS);
  }

  componentWillUnmount(): void {
    clearTimeout(this.timer);
  }

  enableMessage(): void {
    this.setState({ displayMessage: true });
  }

  render() {
    const { displayMessage } = this.state;
    if (!displayMessage) {
      return null;
    }

    const { pendingMessage } = this.props;

    return (
      <Modal width="small" open aria-label={pendingMessage} onClose={doNothing}>
        <Modal.Body>
          <HStack>
            <Loader size="large" />
            <div className={styles.modalText}>
              <Label size="small">
                {intl.formatMessage({ id: 'DataFetchPendingModal.LosningenJobberMedBehandlingen' })}
              </Label>
            </div>
          </HStack>
        </Modal.Body>
      </Modal>
    );
  }
}

export default DataFetchPendingModal;
