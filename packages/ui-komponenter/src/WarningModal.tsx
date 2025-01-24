import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, Modal } from '@navikt/ds-react';

import styles from './warningModal.module.css';

export interface Props {
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
export const WarningModal = ({ bodyText, headerText, showModal, submit }: Props) => (
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
