import React, { ReactNode, FunctionComponent } from 'react';

import { BodyShort, HStack } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { isObject, createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

import styles from './aksjonspunktHelpTextHTML.module.css';

const intl = createIntl(messages);

export interface OwnProps {
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
      <HStack gap="4">
        <ExclamationmarkTriangleFillIcon
          title={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })}
          height={25}
          width={25}
          className={styles.image}
          color="var(--a-orange-600)"
        />
        <div className={styles.aksjonspunktText}>
          {React.Children.map(children, child => (
            // @ts-ignore Fiks
            <div key={isObject(child) ? child.key : child} className={elementStyle}>
              <BodyShort size="small" className={styles.wordwrap}>
                {child}
              </BodyShort>
            </div>
          ))}
        </div>
      </HStack>
    </div>
  );
};

export default AksjonspunktHelpTextHTML;
