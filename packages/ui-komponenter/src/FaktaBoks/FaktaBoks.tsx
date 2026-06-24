import { type ReactNode } from 'react';

import { ExpansionCard, HStack } from '@navikt/ds-react';

import styles from './faktaBoks.module.css';

interface Props {
  tittel: string;
  beskrivelse?: ReactNode;
  ikon?: ReactNode;
  children: ReactNode;
}

export const FaktaBoks = ({ tittel, beskrivelse, ikon, children }: Props) => {
  return (
    <ExpansionCard defaultOpen size="small" aria-label={tittel} className={styles.faktaBox}>
      <ExpansionCard.Header>
        <HStack wrap={false} gap="space-16" align="center">
          {ikon && <div>{ikon}</div>}
          <div>
            <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
            {beskrivelse && <ExpansionCard.Description>{beskrivelse}</ExpansionCard.Description>}
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>{children}</ExpansionCard.Content>
    </ExpansionCard>
  );
};
