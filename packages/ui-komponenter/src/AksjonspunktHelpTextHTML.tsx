import React, { ReactNode, FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

import { isObject, createIntl } from '@navikt/ft-utils';
import Image from './Image';
import FlexColumn from './flexGrid/FlexColumn';
import FlexContainer from './flexGrid/FlexContainer';
import FlexRow from './flexGrid/FlexRow';

import messages from '../i18n/nb_NO.json';
import advarselIkonUrl from './images/advarsel2.svg';
import styles from './aksjonspunktHelpTextHTML.less';

const intl = createIntl(messages);

interface OwnProps {
  children: string[] | ReactNode | ReactNode[];
}

/**
 * AksjonspunktHelpTextHTML
 *
 * Presentasjonskomponent. Viser hjelpetekster som forteller NAV-ansatt hva som må gjøres for
 * å avklare en eller flere aksjonspunkter.
 */
const AksjonspunktHelpTextHTML: FunctionComponent<OwnProps> = ({ children }) => {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  const elementStyle = Array.isArray(children) && children.length > 1 ? styles.severalElements : styles.oneElement;
  return (
    <div className={styles.container}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })}
              src={advarselIkonUrl}
            />
          </FlexColumn>

          <FlexColumn className={styles.aksjonspunktText}>
            {React.Children.map(children, child => (
              // @ts-ignore Fiks
              <div key={isObject(child) ? child.key : child} className={elementStyle}>
                <Normaltekst className={styles.wordwrap}>{child}</Normaltekst>
              </div>
            ))}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default AksjonspunktHelpTextHTML;
