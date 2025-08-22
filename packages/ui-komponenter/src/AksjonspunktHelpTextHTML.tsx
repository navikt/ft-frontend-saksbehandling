import { Children, type ReactNode } from 'react';

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
        {normalizedChildren.map((child, index) => {
          return (
            <BodyShort key={index} size="small">
              {child}
            </BodyShort>
          );
        })}
      </VStack>
    </Alert>
  );
};
