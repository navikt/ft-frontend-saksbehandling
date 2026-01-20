import type { ReactNode } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Box, Detail, Heading, HStack } from '@navikt/ds-react';

type Aksjonspunkt = {
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
};

interface Props {
  tittel: ReactNode;
  beskrivelse?: ReactNode;
  aksjonspunkt: Aksjonspunkt | Aksjonspunkt[] | undefined;
  children: ReactNode;
}

export const AksjonspunktBoks = ({ tittel, beskrivelse, aksjonspunkt, children }: Props) => {
  const aksjonspunkter = !aksjonspunkt || Array.isArray(aksjonspunkt) ? aksjonspunkt : [aksjonspunkt];
  const { headerBackground, bodyBackground, icon } = getStateProps(aksjonspunkter);
  const aksjonspunktIder = aksjonspunkter?.map(ap => `AksjonspunktBoks-${ap.definisjon}`).join(',');
  return (
    <Box borderRadius="4" background={bodyBackground} data-testid={aksjonspunktIder ?? 'AksjonspunktBoks'}>
      <Box
        paddingInline={icon ? 'space-4' : 'space-12'}
        paddingBlock="space-16"
        borderRadius="4 4 0 0"
        background={headerBackground}
      >
        <HStack gap="space-8" wrap={false}>
          {icon && <span>{icon}</span>}
          <div>
            <Heading as="span" size="small" level="3">
              {tittel}
            </Heading>
            {beskrivelse && <Detail>{beskrivelse}</Detail>}
          </div>
        </HStack>
      </Box>
      <Box paddingInline="space-48" paddingBlock="space-24">
        {children}
      </Box>
    </Box>
  );
};

const getStateProps = (aksjonspunkter: Aksjonspunkt[] | undefined) => {
  const erOpprettetAksjonspunkt = aksjonspunkter?.some(ap => ap.status === 'OPPR');

  if (erOpprettetAksjonspunkt) {
    return {
      bodyBackground: 'warning-soft',
      headerBackground: 'warning-moderateA',
      icon: <ExclamationmarkTriangleFillIcon aria-hidden color="var(--ax-text-warning-subtle)" fontSize="1.5rem" />,
    } as const;
  } else {
    return {
      bodyBackground: 'neutral-soft',
      headerBackground: 'neutral-moderateA',
      icon: null,
    } as const;
  }
};
