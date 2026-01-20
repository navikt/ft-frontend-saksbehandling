import type { ReactElement, ReactNode } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Box, type BoxNewProps, Detail, Heading, HStack } from '@navikt/ds-react';

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
    <Box
      borderRadius="medium"
      background={bodyBackground}
      data-testid={aksjonspunktIder ?? 'AksjonspunktBoks'}
      data-color={bodyBackground}
    >
      <Box
        paddingInline={icon ? '4' : '12'}
        paddingBlock="space-16"
        borderRadius="medium medium 0 0"
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

const getStateProps = (
  aksjonspunkter: Aksjonspunkt[] | undefined,
): {
  headerBackground: BoxNewProps['background'];
  bodyBackground: BoxNewProps['background'];
  icon: ReactElement | null;
} => {
  const erOpprettetAksjonspunkt = aksjonspunkter?.some(ap => ap.status === 'OPPR');

  if (erOpprettetAksjonspunkt) {
    return {
      bodyBackground: 'warning-soft',
      headerBackground: 'warning-moderateA',
      icon: <ExclamationmarkTriangleFillIcon aria-hidden color="var(--ax-text-warning-subtle)" fontSize="1.5rem" />,
    };
  } else {
    return {
      bodyBackground: 'neutral-soft',
      headerBackground: 'neutral-moderateA',
      icon: null,
    };
  }
};
