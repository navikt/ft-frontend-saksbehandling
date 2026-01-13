import { type ReactNode } from 'react';

import { ExpansionCard } from '@navikt/ds-react';

import styles from './faktaBoks.module.css';

interface Props {
  tittel: string;
  beskrivelse?: ReactNode;
  children: ReactNode;
}

export const FaktaBoks = ({ tittel, beskrivelse, children }: Props) => {
  return (
    <ExpansionCard defaultOpen size="small" aria-label={tittel} data-color="neutral" className={styles.faktaBox}>
      <ExpansionCard.Header>
        <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
        {beskrivelse && <ExpansionCard.Description>{beskrivelse}</ExpansionCard.Description>}
      </ExpansionCard.Header>
      <ExpansionCard.Content>{children}</ExpansionCard.Content>
    </ExpansionCard>
  );
};
