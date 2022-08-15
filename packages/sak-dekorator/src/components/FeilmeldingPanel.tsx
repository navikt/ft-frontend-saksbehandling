import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import classnames from 'classnames/bind';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';
import Lukknapp from 'nav-frontend-lukknapp';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import FeilmeldingsdetaljerModal from './FeilmeldingsdetaljerModal';
import Feilmelding from '../typer/feilmeldingTsType';

import styles from './feilmeldingPanel.less';

// TODO Dette er gjort fordi testen viste ein warning når ein dytta 'style.link' inn i a-tag'en. Bør ikkje vera naudsynt.
const classNames = classnames.bind(styles);

interface OwnProps {
  feilmeldinger: Feilmelding[];
  fjernFeilmeldinger: () => void;
}

/**
 * FeilmeldingPanel
 *
 * Definerer hvordan feilmeldinger vises under header.
 */
const FeilmeldingPanel: FunctionComponent<OwnProps> = ({ feilmeldinger, fjernFeilmeldinger }) => {
  const intl = useIntl();

  const [erModalÅpen, setModalTilÅpen] = useState(false);
  const [valgtFeilmeldingIndex, setValgtFeilmeldingIndex] = useState<number | undefined>(undefined);

  const toggleModalOnClick = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent, index: number): void => {
      setModalTilÅpen(!erModalÅpen);
      setValgtFeilmeldingIndex(index);
      if (event) {
        event.preventDefault();
      }
    },
    [erModalÅpen],
  );

  const toggleModalOnKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleModalOnClick(event, index);
      } else {
        event.preventDefault();
      }
    },
    [toggleModalOnClick],
  );

  if (feilmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {feilmeldinger.map((message, index) => (
        <Row key={message.melding}>
          <Column xs="11">
            <Undertekst className={styles.wordWrap}>{`${decodeHtmlEntity(message.melding)} `}</Undertekst>
            {message.tilleggsInfo && (
              <Undertekst>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href=""
                  onClick={event => toggleModalOnClick(event, index)}
                  onKeyDown={event => toggleModalOnKeyDown(event, index)}
                  className={classNames('link')}
                >
                  <FormattedMessage id="FeilmeldingPanel.ErrorDetails" />
                </a>
              </Undertekst>
            )}
          </Column>
        </Row>
      ))}
      <div className={styles.lukkContainer}>
        <Lukknapp hvit onClick={fjernFeilmeldinger}>
          {intl.formatMessage({ id: 'FeilmeldingPanel.Close' })}
        </Lukknapp>
      </div>
      {erModalÅpen && (
        <FeilmeldingsdetaljerModal
          skalViseModal={erModalÅpen}
          lukkModal={toggleModalOnClick as () => void}
          feilmeldingsdetaljer={
            valgtFeilmeldingIndex !== undefined ? feilmeldinger[valgtFeilmeldingIndex].tilleggsInfo : undefined
          }
        />
      )}
    </div>
  );
};

export default FeilmeldingPanel;
