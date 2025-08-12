import React, { type ReactNode } from 'react';

import { Alert, BodyShort, VStack } from '@navikt/ds-react';

import { isObject } from '@navikt/ft-utils';

export interface Props {
  children: string[] | ReactNode | ReactNode[];
}

/**
 * AksjonspunktHelpTextHTML
 *
 * Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
 * å avklare en eller flere aksjonspunkter.
 */
export const AksjonspunktHelpTextHTML = ({ children }: Props) => {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  return (
    <Alert variant="warning" size="small">
      <VStack gap="space-8">
        {React.Children.map(children, child => (
          // @ts-expect-error Fiks
          <BodyShort key={isObject(child) ? child.key : child} size="small">
            {child}
          </BodyShort>
        ))}
      </VStack>
    </Alert>
  );
};
