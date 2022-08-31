import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Knapp } from 'nav-frontend-knapper';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';
import { VerticalSpacer, Image } from '@navikt/ft-ui-komponenter';

import infoImageUrl from '../images/behandle.svg';
import Feilmelding from '../typer/feilmeldingTsType';

import styles from './feilmeldingsdetaljerModal.less';

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
      isOpen={skalViseModal}
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'FeilmeldingsdetaljerModal.ErrorDetails' })}
      onRequestClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Row>
        <Column xs="1">
          <Image className={styles.image} src={infoImageUrl} />
          <div className={styles.divider} />
        </Column>
        <Column xs="10" className={styles.text}>
          <Undertittel>
            <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
          </Undertittel>
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="1" />
        <Column xs="11">
          {feilmeldingsdetaljer &&
            Object.keys(feilmeldingsdetaljer).map(edKey => (
              <React.Fragment key={edKey}>
                <Undertekst>{`${capitalizeFirstLetters(edKey)}:`}</Undertekst>
                <div className={styles.detail}>
                  {/* @ts-ignore Fiks */}
                  <Normaltekst>{feilmeldingsdetaljer[edKey]}</Normaltekst>
                </div>
                <VerticalSpacer eightPx />
              </React.Fragment>
            ))}
        </Column>
      </Row>
      <Row>
        <Column xs="12">
          <Knapp className={styles.cancelButton} mini htmlType="reset" onClick={lukkModal}>
            <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
          </Knapp>
        </Column>
      </Row>
    </Modal>
  );
};

export default FeilmeldingsdetaljerModal;
