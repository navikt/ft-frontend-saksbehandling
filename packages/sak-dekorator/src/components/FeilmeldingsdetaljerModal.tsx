import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, BodyShort, Detail, Heading } from '@navikt/ds-react';
import { VerticalSpacer, FlexContainer, FlexRow, FlexColumn, FloatRight } from '@navikt/ft-ui-komponenter';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import Feilmelding from '../typer/feilmeldingTsType';

import styles from './feilmeldingsdetaljerModal.module.css';

const capitalizeFirstLetters = (key: string): string => key.charAt(0).toUpperCase() + key.substr(1);

interface OwnProps {
  skalViseModal: boolean;
  lukkModal: () => void;
  feilmeldingsdetaljer?: Feilmelding['tilleggsInfo'];
}

/**
 * FeilmeldingsdetaljerModal
 *
 * Modal som viser en feildetaljer.
 */
const FeilmeldingsdetaljerModal: FunctionComponent<OwnProps> = ({ skalViseModal, lukkModal, feilmeldingsdetaljer }) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={skalViseModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'FeilmeldingsdetaljerModal.ErrorDetails' })}
      onClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.firstCol}>
              <ExclamationmarkTriangleFillIcon className={styles.image} />
            </FlexColumn>
            <FlexColumn className={styles.text}>
              <Heading size="small">
                <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
              </Heading>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn className={styles.firstCol} />
            <FlexColumn>
              {feilmeldingsdetaljer &&
                Object.keys(feilmeldingsdetaljer).map(edKey => (
                  <React.Fragment key={edKey}>
                    <Detail size="small">{`${capitalizeFirstLetters(edKey)}:`}</Detail>
                    <div className={styles.detail}>
                      {/* @ts-ignore Fiks */}
                      <BodyShort size="small">{feilmeldingsdetaljer[edKey]}</BodyShort>
                    </div>
                    <VerticalSpacer eightPx />
                  </React.Fragment>
                ))}
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <FloatRight>
          <Button size="small" variant="secondary" className={styles.cancelButton} onClick={lukkModal} type="button">
            <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
          </Button>
          <VerticalSpacer sixteenPx />
        </FloatRight>
      </Modal.Content>
    </Modal>
  );
};

export default FeilmeldingsdetaljerModal;
