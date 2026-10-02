import { Children, isValidElement, type ReactNode } from 'react';

import { Alert, BodyShort, Heading, VStack } from '@navikt/ds-react';

interface Props {
  heading?: ReactNode;
  children: ReactNode | ReactNode[];
}

/**
 * AksjonspunktHelpTextHTML
 *
 * Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
 * å avklare en eller flere aksjonspunkter.
 */
export const AksjonspunktHelpTextHTML = ({ heading, children }: Props) => {
  const normalizedChildren = Children.toArray(children);

  if (normalizedChildren.length === 0 && !heading) {
    return null;
  }

  return (
    <Alert variant="warning" size="small">
      <VStack gap="space-8" data-testid="aksjonspunkt-text-container">
        {heading && (
          <Heading level="3" size="xsmall">
            {heading}
          </Heading>
        )}
        {normalizedChildren.map(child => (
          <BodyShort key={getKey(child)} size="small">
            {child}
          </BodyShort>
        ))}
      </VStack>
    </Alert>
  );
};

const getKey = (child: ReactNode) => {
  if (isValidElement(child)) {
    return child.key;
  }
  if (typeof child === 'string' || typeof child === 'number') {
    return `tekst-${child}`;
  }

  return undefined;
};
