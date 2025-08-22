import { Children, isValidElement, type ReactNode } from 'react';

import { Alert, BodyShort, VStack } from '@navikt/ds-react';

interface Props {
  children: ReactNode | ReactNode[];
}

/**
 * AksjonspunktHelpTextHTML
 *
 * Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
 * å avklare en eller flere aksjonspunkter.
 */
export const AksjonspunktHelpTextHTML = ({ children }: Props) => {
  const normalizedChildren = Children.toArray(children);

  if (normalizedChildren.length === 0) {
    return null;
  }

  return (
    <Alert variant="warning" size="small">
      <VStack gap="space-8" data-testid="aksjonspunkt-text-container">
        {normalizedChildren.map(child => {
          return (
            <BodyShort key={getKey(child)} size="small">
              {child}
            </BodyShort>
          );
        })}
      </VStack>
    </Alert>
  );
};

const getKey = (child: ReactNode) => {
  if (isValidElement(child) && child.key) {
    return child.key;
  }
  if (typeof child === 'string' || typeof child === 'number') {
    return `text-${child}`;
  }
  return Math.random().toString(36).substring(2, 9);
};
