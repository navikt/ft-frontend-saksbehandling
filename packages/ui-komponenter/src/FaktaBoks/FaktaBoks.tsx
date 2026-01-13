import { type ReactNode } from 'react';

import { ExpansionCard, HStack } from '@navikt/ds-react';

import styles from './faktaBoks.module.css';

interface Props {
  ikon?: ReactNode;
  tittel: ReactNode;
  beskrivelse?: ReactNode;
  children: ReactNode;
}

export const FaktaBoks = ({ ikon, tittel, beskrivelse, children }: Props) => {
  return (
    <ExpansionCard
      defaultOpen
      size="small"
      aria-labelledby="kort-tittel"
      data-color="neutral"
      className={styles.faktaBox}
    >
      <ExpansionCard.Header>
        <HStack wrap={false} gap="space-12" align="center">
          {ikon}
          <div>
            <ExpansionCard.Title size="small" id="kort-tittel" aria-label={'Arbeidsinntekt'}>
              {tittel}
            </ExpansionCard.Title>
            {beskrivelse && <ExpansionCard.Description>{beskrivelse} </ExpansionCard.Description>}
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>{children}</ExpansionCard.Content>
    </ExpansionCard>
  );
};

/*
export const FaktaBox = ({ icon, title, description, children, expandable = false }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => setExpanded(s => !s);
  return (
    <Box.New background="neutral-soft" padding="5" flexBasis="0%" flexGrow="1">
      <HStack gap="space-12" align="center" onClick={handleToggle}>
        {icon}
        <div>
          <Heading size="small" level="4">
            {title}
          </Heading>
          <BodyShort size="small">{description}</BodyShort>
        </div>
        <Spacer />
        {expandable && expanded && <ChevronDownIcon onClick={handleToggle} fontSize="3rem" />}
        {expandable && !expanded && <ChevronUpIcon onClick={handleToggle} fontSize="3rem" />}
      </HStack>
      {expanded && children}
    </Box.New>
  );
};
 */
