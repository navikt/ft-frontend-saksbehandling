import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Heading } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import styles from './errorPageWrapper.module.css';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OwnProps {
  children: ReactNode | ReactNode[];
  titleCode?: string;
}

/**
 * FeilsideContainer
 *
 * Presentasjonskomponent. Denne komponenten vises når den NAV-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar NAV-ansatt tilbake til hovedsiden.
 */
const ErrorPageWrapper: FunctionComponent<OwnProps> = ({ children, titleCode = 'GenericErrorPage.Header' }) => (
  <RawIntlProvider value={intl}>
    <div className={styles.pageContainer}>
      <Heading size="large">
        <FormattedMessage id={titleCode} values={{ br: <br /> }} />
      </Heading>
      <br />
      {children}
    </div>
  </RawIntlProvider>
);

export default ErrorPageWrapper;
