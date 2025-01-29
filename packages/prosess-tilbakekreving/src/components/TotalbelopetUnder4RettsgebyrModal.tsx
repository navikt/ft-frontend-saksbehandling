import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyLong, Button, HStack, Modal } from '@navikt/ds-react';

export const TotalbelopetUnder4RettsgebyrModal = ({
  showModal,
  submit,
}: {
  showModal: boolean;
  submit: () => void;
}) => {
  return (
    <Modal open={showModal} onClose={submit} width="small" aria-label="Advarsel">
      <Modal.Body>
        <HStack gap="4" wrap={false}>
          <div>
            <ExclamationmarkTriangleFillIcon height={35} width={35} color="var(--a-orange-600)" />
          </div>
          <BodyLong size="small">
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
