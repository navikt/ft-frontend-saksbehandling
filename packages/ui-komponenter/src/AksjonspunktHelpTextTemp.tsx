import React, { ReactNode, FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { isObject, createIntl } from '@navikt/ft-utils';

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

import messages from '../i18n/nb_NO.json';
import styles from './AksjonspunktHelpTextTemp.module.css';

const intl = createIntl(messages);

export interface OwnProps {
  children: string[] | ReactNode[];
  isAksjonspunktOpen: boolean;
}

/**
 * TODO (TOR) Dette er ein midlertidig komponent som byttar mellom to komponentar. Er ikkje bestemt korleis dette faktisk skal sjå ut enno.
 */
/**
 * @deprecated Bruk heller AksjonspunktHelpTextHTML!
 */
const AksjonspunktHelpTextTemp: FunctionComponent<OwnProps> = ({ isAksjonspunktOpen, children }) => (
  <>
    {isAksjonspunktOpen && <AksjonspunktHelpTextHTML>{children}</AksjonspunktHelpTextHTML>}
    {!isAksjonspunktOpen && (
      <>
        {React.Children.map(children, child => (
          // @ts-ignore (Dette skal fjernast)
          <BodyShort size="small" key={isObject(child) ? child.key : child} className={styles.wordwrap}>
            <strong>{intl.formatMessage({ id: 'HelpText.Aksjonspunkt.BehandletAksjonspunkt' })}</strong>
            {child}
          </BodyShort>
        ))}
      </>
    )}
  </>
);

export default AksjonspunktHelpTextTemp;
