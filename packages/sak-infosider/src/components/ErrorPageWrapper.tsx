import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Innholdstittel } from 'nav-frontend-typografi';

import { createIntl } from '@navikt/ft-utils';

import styles from './errorPageWrapper.less';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  children: ReactNode | ReactNode[];
  titleCode?: string;
}

/**
 * FeilsideContainer
 *
 * Presentasjonskomponent. Denne komponenten vises når den NAV-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar NAV-ansatt tilbake til hovedsiden.
 */
const ErrorPageWrapper: FunctionComponent<OwnProps> = ({ children, titleCode }) => (
  <RawIntlProvider value={intl}>
    <div className={styles.pageContainer}>
      <Innholdstittel>
        <FormattedMessage id={titleCode} values={{ br: <br /> }} />
      </Innholdstittel>
      <br />
      {children}
    </div>
  </RawIntlProvider>
);

ErrorPageWrapper.defaultProps = {
  titleCode: 'GenericErrorPage.Header',
};

export default ErrorPageWrapper;
