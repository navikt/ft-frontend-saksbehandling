import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import ErrorPageWrapper from './components/ErrorPageWrapper';

export interface OwnProps {
  renderSomLenke: (tekst: ReactElement) => ReactElement;
}

/**
 * NotFoundPage
 *
 * Denne komponenten vises når den Nav-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar Nav-ansatt tilbake til hovedsiden.
 */
const NotFoundPage: FunctionComponent<OwnProps> = ({ renderSomLenke }) => (
  <ErrorPageWrapper titleCode="NotFoundPage.Header">
    {renderSomLenke(<FormattedMessage id="NotFoundPage.LinkText" />)}
  </ErrorPageWrapper>
);

export default NotFoundPage;
