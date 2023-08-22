import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, BodyShort, Detail, Heading } from '@navikt/ds-react';
import { VerticalSpacer, FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import Feilmelding from '../typer/feilmeldingTsType';

import styles from './feilmeldingsdetaljerModal.module.css';

const capitalizeFirstLetters = (key: string): string => key.charAt(0).toUpperCase() + key.substr(1);

export interface OwnProps {
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
      width="medium"
      open={skalViseModal}
      aria-label={intl.formatMessage({ id: 'FeilmeldingsdetaljerModal.ErrorDetails' })}
      onClose={lukkModal}
    >
      <Modal.Header>
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.firstCol}>
              <ExclamationmarkTriangleFillIcon className={styles.image} />
            </FlexColumn>
            <FlexColumn>
              <Heading size="small">
                <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
              </Heading>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Header>
      <Modal.Body>
        <FlexContainer>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn className={styles.firstCol} />
            <FlexColumn>
              {feilmeldingsdetaljer &&
                Object.keys(feilmeldingsdetaljer).map(edKey => (
                  <React.Fragment key={edKey}>
                    <Detail size="small">{`${capitalizeFirstLetters(edKey)}:`}</Detail>
                    <div>
                      {/* @ts-ignore Fiks */}
                      <BodyShort size="small">{feilmeldingsdetaljer[edKey]}</BodyShort>
                    </div>
                    <VerticalSpacer eightPx />
                  </React.Fragment>
                ))}
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="secondary" onClick={lukkModal} type="button">
          <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FeilmeldingsdetaljerModal;
