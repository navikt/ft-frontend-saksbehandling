import React, { ReactNode, FunctionComponent } from 'react';

import { Alert, BodyShort, VStack } from '@navikt/ds-react';
import { isObject } from '@navikt/ft-utils';

export interface OwnProps {
  children: string[] | ReactNode | ReactNode[];
}

/**
 * AksjonspunktHelpTextHTML
 *
 * Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
 * å avklare en eller flere aksjonspunkter.
 */
const AksjonspunktHelpTextHTML: FunctionComponent<OwnProps> = ({ children }) => {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  return (
    <Alert variant="warning" size="small">
      <VStack gap="2">
        {React.Children.map(children, child => (
          // @ts-ignore Fiks
          <BodyShort key={isObject(child) ? child.key : child} size="small">
            {child}
          </BodyShort>
        ))}
      </VStack>
    </Alert>
  );
};

export default AksjonspunktHelpTextHTML;
