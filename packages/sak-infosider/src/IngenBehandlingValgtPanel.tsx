import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Alert, BodyShort } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

import styles from './ingenBehandlingValgtPanel.module.css';

const intl = createIntl(messages);

const getMessage = (numBehandlinger: number): string =>
  numBehandlinger === 0
    ? 'IngenBehandlingValgtPanel.ZeroBehandlinger'
    : 'IngenBehandlingValgtPanel.PleaseSelectBehandling';

export interface OwnProps {
  numBehandlinger: number;
}

/**
 * NoSelectedBehandling
 *
 * Presentasjonskomponent. Vises når ingen behandling er valgt på en fagsak
 */
const IngenBehandlingValgtPanel: FunctionComponent<OwnProps> = ({ numBehandlinger }) => (
  <RawIntlProvider value={intl}>
    <div className={styles.noSelectedBehandlingPanel}>
      <Alert variant="info">
        <BodyShort size="small">
          <FormattedMessage id={getMessage(numBehandlinger)} />
        </BodyShort>
      </Alert>
    </div>
  </RawIntlProvider>
);

export default IngenBehandlingValgtPanel;
