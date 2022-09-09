import React, { Component } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Label, Loader } from '@navikt/ds-react';
import Modal from 'nav-frontend-modal';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

import styles from './dataFetchPendingModal.less';

const intl = createIntl(messages);

// Skal ikke være mulig å lukke modal
const doNothing = () => undefined;

// Vent to sekund med å vise melding
const MESSAGE_DELAY_MILLIS = 2000;

interface OwnProps {
  pendingMessage: string;
}

interface OwnState {
  displayMessage: boolean;
}

/**
 * DataFetchPendingModal
 *
 * Presentasjonskomponent. Denne modalen vises når det går mer enn to sekund å polle etter serverdata.
 */
export class DataFetchPendingModal extends Component<OwnProps, OwnState> {
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
      <Modal
        className={styles.modal}
        isOpen
        closeButton={false}
        contentLabel={pendingMessage}
        onRequestClose={doNothing}
        shouldCloseOnOverlayClick={false}
      >
        <Row>
          <Column xs="2">
            <Loader size="large" />
            <div className={styles.divider} />
          </Column>
          <Column xs="10">
            <Label size="small" className={styles.modalText}>
              {intl.formatMessage({ id: 'DataFetchPendingModal.LosningenJobberMedBehandlingen' })}
            </Label>
          </Column>
        </Row>
      </Modal>
    );
  }
}

export default DataFetchPendingModal;
