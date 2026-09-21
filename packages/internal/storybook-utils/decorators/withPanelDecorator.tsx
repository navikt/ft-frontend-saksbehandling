/* eslint-disable react-refresh/only-export-components -- dekoratør + skjelett bor med vilje i samme fil */
import type { ReactNode } from 'react';

import { Box, HGrid, HStack, Skeleton, VStack } from '@navikt/ds-react';
import type { ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';

/**
 * Storybook-dekoratør som plasserer et prosess- eller faktapanel i en simulert ramme lik den
 * panelet har inne i fp-frontend. Hvilken ramme som brukes avgjøres av story-tittelen
 * (pakkenavnet): `-prosess-` gir prosessramme, `-fakta-` gir faktaramme, og `SideMenu`- og
 * `ProcessMenu`-storyene vises som henholdsvis fakta- og prosessmenyen inne i rammen.
 *
 * Rammen består av grå skjelett-komponenter (Aksel) og er kun ment for å vise hvordan panelet
 * ser ut i kontekst. Kan skrus av via toolbar-globalen `panelramme` (verdi `av`).
 */
export const withPanelDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const rammeAv = context.globals['panelramme'] === 'av';
  const title = context.title ?? '';
  const erProsess = title.includes('-prosess-');
  const erFakta = title.includes('-fakta-');
  const erSideMeny = title.endsWith('/SideMenu');
  const erProsessMeny = title.endsWith('/ProcessMenu');

  if (rammeAv || (!erProsess && !erFakta && !erSideMeny && !erProsessMeny)) {
    return (
      <div style={{ margin: '40px' }}>
        <Story />
      </div>
    );
  }

  return (
    <Sideramme>
      <ProsessMenyOmråde meny={erProsessMeny ? <Story /> : undefined} innhold={erProsess ? <Story /> : undefined} />
      <FaktaOmradeSkjelett meny={erSideMeny ? <Story /> : undefined} innhold={erFakta ? <Story /> : undefined} />
    </Sideramme>
  );
};

const BORDER_FARGE = 'neutral-subtle' as const;
const ANTALL_PROSESS_STEG = 8;
const ANTALL_FAKTA_PANELER = 6;

/**
 * Simulerer applikasjonens hovedgrid (FagsakGrid): en venstre kolonne med panelinnhold
 * og en høyre kolonne med support-panel. Support-panelet legger seg under innholdet når
 * skjermen blir for smal, akkurat som i fp-frontend.
 */
const Sideramme = ({ children }: { children: ReactNode }) => (
  <Box background="default">
    <HGrid columns={{ xs: 1, xl: 'minmax(0, 1fr) 35rem' }} gap="space-0">
      <div style={{ minWidth: 0 }}>
        <VisittkortSkjelett />
        {children}
      </div>
      <SupportSkjelett />
    </HGrid>
  </Box>
);

const VisittkortSkjelett = () => (
  <Box borderColor={BORDER_FARGE} borderWidth="0 0 1 0" style={{ padding: '16px 24px' }}>
    <HStack gap="space-16" align="center">
      <Skeleton variant="circle" width={48} height={48} />
      <VStack gap="space-4">
        <Skeleton variant="text" width={220} height={20} />
        <Skeleton variant="text" width={160} height={16} />
      </VStack>
    </HStack>
  </Box>
);

const SupportSkjelett = () => (
  <Box borderColor={BORDER_FARGE} borderWidth="0 0 0 1" padding="space-24">
    <VStack gap="space-16">
      <Skeleton variant="rounded" width="100%" height={64} />
      <HStack gap="space-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} variant="rounded" width={80} height={32} />
        ))}
      </HStack>
      <Skeleton variant="rounded" width="100%" height={360} />
    </VStack>
  </Box>
);

/**
 * Simulerer prosessmenyen (stegvelgeren) som vises på toppen av prosesspanelet.
 */
const ProsessMenySkjelett = ({ innhold }: { innhold?: ReactNode }) => (
  <Box borderColor={BORDER_FARGE} borderWidth="0 0 1 0">
    <div style={{ margin: '15px 25px 23px' }}>
      {innhold ?? (
        <HStack gap="space-16" justify="center" wrap={false}>
          {Array.from({ length: ANTALL_PROSESS_STEG }).map((_, i) => (
            <Skeleton key={i} variant="rounded" width={'100%'} height={44} />
          ))}
        </HStack>
      )}
    </div>
  </Box>
);

/**
 * Simulerer hele prosessområdet (stegvelger + panelinnhold) slik det vises på toppen av siden.
 * `meny` lar deg sette inn en reell prosessmeny og `innhold` et reelt panel; utelates de vises
 * grå skjelett.
 */
const ProsessMenyOmråde = ({ meny, innhold }: { meny?: ReactNode; innhold?: ReactNode }) => (
  <>
    <ProsessMenySkjelett innhold={meny} />
    <Box borderColor={BORDER_FARGE} borderWidth="0 0 1 0" padding="space-40">
      {innhold ?? (
        <VStack gap="space-16">
          <Skeleton variant="text" width={260} height={28} />
          <Skeleton variant="rounded" width="100%" height={240} />
        </VStack>
      )}
    </Box>
  </>
);

/**
 * Simulerer faktamenyen (sidemenyen «Fakta om») som vises til venstre for faktapanelet.
 */
const FaktaMenySkjelett = () => (
  <div style={{ flex: '0 0 auto', width: '12rem', padding: '24px 16px' }}>
    <VStack gap="space-16">
      <Skeleton variant="text" width={90} height={20} />
      <VStack gap="space-8">
        {Array.from({ length: ANTALL_FAKTA_PANELER }).map((_, i) => (
          <Skeleton key={i} variant="rounded" width="100%" height={28} />
        ))}
      </VStack>
    </VStack>
  </div>
);

/**
 * Simulerer hele faktaområdet (sidemeny «Fakta om» + panelinnhold) slik det vises under
 * prosesspanelet. `innhold` lar deg sette inn et reelt panel; utelates det vises et grått skjelett.
 */
const FaktaOmradeSkjelett = ({ meny, innhold }: { meny?: ReactNode; innhold?: ReactNode }) => (
  <Box background="default">
    <HStack wrap={false}>
      {meny ?? <FaktaMenySkjelett />}
      <Box
        borderColor={BORDER_FARGE}
        borderWidth="0 0 0 1"
        style={{ flex: '1 1 auto', minWidth: 0, padding: '40px 40px 40px 24px' }}
      >
        {innhold ?? (
          <VStack gap="space-16">
            <Skeleton variant="text" width={260} height={28} />
            <Skeleton variant="rounded" width="100%" height={240} />
          </VStack>
        )}
      </Box>
    </HStack>
  </Box>
);
