import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import ErrorPageWrapper from './components/ErrorPageWrapper';

interface OwnProps {
  renderSomLenke: (tekst: ReactElement) => ReactElement;
}

/**
 * UnauthorizedPage
 *
 * Denne komponenten vises når den NAV-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar NAV-ansatt tilbake til hovedsiden.
 */
const UnauthorizedPage: FunctionComponent<OwnProps> = ({ renderSomLenke }) => (
  <ErrorPageWrapper titleCode="UnauthorizedPage.Header">
    {renderSomLenke(<FormattedMessage id="UnauthorizedPage.LinkText" />)}
    <br />
  </ErrorPageWrapper>
);

export default UnauthorizedPage;
