import React, { FunctionComponent } from 'react';
import { BodyShort, Heading, Button, Modal } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import FlexRow from './flexGrid/FlexRow';
import FlexColumn from './flexGrid/FlexColumn';

import styles from './warningModal.module.css';

export interface OwnProps {
  headerText?: string;
  bodyText: string;
  showModal: boolean;
  submit: () => void;
}

/**
 * WarningModal
 *
 * Modal med advarselikon og som viser en valgfri tekst i tillegg til knappen OK.
 */
const WarningModal: FunctionComponent<OwnProps> = ({ bodyText, headerText, showModal, submit }) => (
  <Modal
    className={styles.modal}
    open={showModal}
    closeButton={false}
    onClose={submit}
    shouldCloseOnOverlayClick={false}
  >
    <Modal.Content>
      <FlexRow>
        <FlexColumn>
          <ExclamationmarkTriangleFillIcon
            height={25}
            width={25}
            className={styles.image}
            color="var(--a-orange-600)"
          />
        </FlexColumn>
        <FlexColumn className={styles.text}>
          {headerText && <Heading size="small">{headerText}</Heading>}
          <BodyShort size="small">{bodyText}</BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.knapp}>
          <Button
            size="small"
            variant="primary"
            className={styles.submitButton}
            onClick={submit}
            autoFocus
            type="button"
          >
            OK
          </Button>
        </FlexColumn>
      </FlexRow>
    </Modal.Content>
  </Modal>
);

export default WarningModal;
