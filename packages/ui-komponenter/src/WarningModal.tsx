import React, { FunctionComponent } from 'react';
import { BodyShort, Heading, Button } from '@navikt/ds-react';
import Modal from 'nav-frontend-modal';

import advarselImageUrl from './images/advarsel.svg';
import Image from './Image';
import FlexRow from './flexGrid/FlexRow';
import FlexColumn from './flexGrid/FlexColumn';

import styles from './warningModal.less';

interface OwnProps {
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
    isOpen={showModal}
    closeButton={false}
    contentLabel={bodyText}
    onRequestClose={submit}
    shouldCloseOnOverlayClick={false}
  >
    <FlexRow>
      <FlexColumn>
        <Image className={styles.image} alt={bodyText} src={advarselImageUrl} />
        <div className={styles.divider} />
      </FlexColumn>
      <FlexColumn className={styles.text}>
        {headerText && <Heading size="small">{headerText}</Heading>}
        <BodyShort size="small">{bodyText}</BodyShort>
      </FlexColumn>
      <FlexColumn className={styles.knapp}>
        <Button size="small" variant="primary" className={styles.submitButton} onClick={submit} autoFocus>
          OK
        </Button>
      </FlexColumn>
    </FlexRow>
  </Modal>
);

export default WarningModal;
