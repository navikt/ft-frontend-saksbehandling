import React, { FunctionComponent } from 'react';
import Modal from 'nav-frontend-modal';
import { BodyShort, Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';
import FlexColumn from './flexGrid/FlexColumn';
import FlexContainer from './flexGrid/FlexContainer';
import FlexRow from './flexGrid/FlexRow';

import VerticalSpacer from './VerticalSpacer';

import messages from '../i18n/nb_NO.json';
import styles from './okAvbrytModal.less';

const intl = createIntl(messages);

interface OwnProps {
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
    isOpen={showModal}
    closeButton
    contentLabel={text}
    onRequestClose={cancel}
    shouldCloseOnOverlayClick={false}
  >
    <BodyShort size="small">{text}</BodyShort>
    <VerticalSpacer fourtyPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Button variant="primary" size="small" onClick={submit} autoFocus>
            {okButtonText || intl.formatMessage({ id: 'OkAvbrytModal.Ok' })}
          </Button>
        </FlexColumn>
        <FlexColumn>
          <Button variant="secondary" size="small" onClick={cancel}>
            {intl.formatMessage({ id: 'OkAvbrytModal.Avbryt' })}
          </Button>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </Modal>
);

export default OkAvbrytModal;
