import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Heading, Modal } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';

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
  <Modal open={showModal} onClose={submit} width="small" aria-label={headerText || 'Advarsel'}>
    <Modal.Body>
      <HStack gap="4">
        <ExclamationmarkTriangleFillIcon height={25} width={25} className={styles.image} color="var(--a-orange-600)" />
        <div className={styles.text}>
          {headerText && <Heading size="small">{headerText}</Heading>}
          <BodyShort size="small">{bodyText}</BodyShort>
        </div>
      </HStack>
    </Modal.Body>
    <Modal.Footer>
      <Button size="small" variant="primary" className={styles.knapp} onClick={submit} autoFocus type="button">
        OK
      </Button>
    </Modal.Footer>
  </Modal>
);

export default WarningModal;
