import { type ReactNode, useId } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { ExpansionCard, HStack } from '@navikt/ds-react';

import styles from './aksjonpunktBoks.module.css';

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
  const { color, icon } = getStateProps(aksjonspunkter);
  const tittelId = useId();
  return (
    <ExpansionCard
      defaultOpen
      size="small"
      aria-labelledby={tittelId}
      className={styles.aksjonspunktBoks}
      data-color={color}
    >
      <ExpansionCard.Header>
        <HStack wrap={false} gap="space-16" align="center">
          {icon && <div>{icon}</div>}
          <div>
            <ExpansionCard.Title id={tittelId} size="small">
              {tittel}
            </ExpansionCard.Title>
            {beskrivelse && <ExpansionCard.Description>{beskrivelse}</ExpansionCard.Description>}
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>{children}</ExpansionCard.Content>
    </ExpansionCard>
  );
};

const getStateProps = (aksjonspunkter: Aksjonspunkt[] | undefined) => {
  const erOpprettetAksjonspunkt = aksjonspunkter?.some(ap => ap.status === 'OPPR');

  if (erOpprettetAksjonspunkt) {
    return {
      color: 'warning',
      icon: <ExclamationmarkTriangleFillIcon aria-hidden color="var(--ax-text-warning-subtle)" fontSize="2rem" />,
    } as const;
  } else {
    return {
      color: 'neutral',
      icon: null,
    } as const;
  }
};
