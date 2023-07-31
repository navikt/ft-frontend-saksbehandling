import React, { FunctionComponent } from 'react';
import { Modal, Heading, Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';
import FlexColumn from './flexGrid/FlexColumn';
import FlexContainer from './flexGrid/FlexContainer';
import FlexRow from './flexGrid/FlexRow';

import VerticalSpacer from './VerticalSpacer';

import messages from '../i18n/nb_NO.json';
import styles from './okAvbrytModal.module.css';

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
  <Modal
    className={styles.modal}
    open={showModal}
    closeButton
    aria-label={text}
    onClose={cancel}
    shouldCloseOnOverlayClick={false}
  >
    <Modal.Content>
      <Heading size="small">{text}</Heading>
      <VerticalSpacer thirtyTwoPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Button variant="primary" size="small" onClick={submit} autoFocus type="button">
              {okButtonText || intl.formatMessage({ id: 'OkAvbrytModal.Ok' })}
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button variant="secondary" size="small" onClick={cancel} type="button">
              {intl.formatMessage({ id: 'OkAvbrytModal.Avbryt' })}
            </Button>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
      </FlexContainer>
    </Modal.Content>
  </Modal>
);

export default OkAvbrytModal;
