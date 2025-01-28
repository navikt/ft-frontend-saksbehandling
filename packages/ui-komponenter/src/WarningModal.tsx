import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Modal } from '@navikt/ds-react';

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
  <Modal
    open={showModal}
    onClose={submit}
    width="small"
    aria-label={headerText || 'Advarsel'}
    header={{
      icon: <ExclamationmarkTriangleFillIcon color="var(--a-orange-600)" />,
      heading: headerText || 'Advarsel',
    }}
  >
    <Modal.Body>
      <BodyShort>{bodyText}</BodyShort>
    </Modal.Body>
    <Modal.Footer>
      <Button size="small" variant="primary" onClick={submit} autoFocus type="button">
        OK
      </Button>
    </Modal.Footer>
  </Modal>
);
