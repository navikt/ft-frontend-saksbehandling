import { useEffect, useState } from 'react';

import { HStack, Label, Loader, Modal } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import styles from './dataFetchPendingModal.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

// Vent to sekund med å vise melding
const MESSAGE_DELAY_MILLIS = 2000;

export interface Props {
  pendingMessage: string;
}

/**
 * DataFetchPendingModal
 *
 * Denne modalen vises når det går mer enn to sekund å polle etter serverdata.
 */
export const DataFetchPendingModal = ({ pendingMessage }: Props) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), MESSAGE_DELAY_MILLIS);
    return () => clearTimeout(timer);
  }, []);

  if (!showMessage) {
    return null;
  }

  return (
    <Modal width="small" open aria-label={pendingMessage} onClose={() => undefined}>
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
};
