import type { ReactElement, ReactNode } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Box, type BoxNewProps, Heading, HStack } from '@navikt/ds-react';

type Aksjonspunkt = {
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
};

interface Props {
  tittel: ReactNode;
  aksjonspunkt: Aksjonspunkt | Aksjonspunkt[] | undefined;
  children: ReactNode;
}

export const AksjonspunktBoks = ({ tittel, aksjonspunkt, children }: Props) => {
  const aksjonspunkter = !aksjonspunkt || Array.isArray(aksjonspunkt) ? aksjonspunkt : [aksjonspunkt];
  const { headerBackground, bodyBackground, icon } = getStateProps(aksjonspunkter);
  const aksjonspunktIder = aksjonspunkter?.map(ap => `AksjonspunktBoks-${ap.definisjon}`).join(',');
  return (
    <Box.New
      borderRadius="medium"
      background={bodyBackground}
      data-testid={aksjonspunktIder ?? 'AksjonspunktBoks'}
      data-color={bodyBackground}
    >
      <Box.New
        paddingInline={icon ? '4' : '12'}
        paddingBlock="4"
        borderRadius="medium medium 0 0"
        background={headerBackground}
      >
        <HStack gap="2" wrap={false}>
          {icon && <span>{icon}</span>}
          <Heading as="span" size="small" level="3">
            {tittel}
          </Heading>
        </HStack>
      </Box.New>
      <Box.New paddingInline="12" paddingBlock="6">
        {children}
      </Box.New>
    </Box.New>
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
