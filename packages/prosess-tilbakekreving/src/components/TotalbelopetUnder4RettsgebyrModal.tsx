import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyLong, Button, HStack, Modal } from '@navikt/ds-react';

export const TotalbelopetUnder4RettsgebyrModal = ({
  showModal = false,
  submit,
}: {
  showModal?: boolean;
  submit: () => void;
}) => {
  return (
    <Modal open={showModal} onClose={submit} aria-label="Advarsel">
      <Modal.Body>
        <HStack gap="space-16" wrap={false}>
          <div>
            <ExclamationmarkTriangleFillIcon height={35} width={35} color="var(--ax-warning-700)" />
          </div>
          <BodyLong>
            <FormattedMessage id="TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr" />
          </BodyLong>
        </HStack>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="primary" onClick={submit} autoFocus type="button">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
