import type { AktivitetStatus } from '@navikt/ft-types';

// Visningsrekkefølge på statuser i tabellen. Lavere tall = høyere opp i tabellen
export const statusKonfigMap: Partial<Record<AktivitetStatus, number>> = {
  AT: 1,
  FL: 2,
  DP: 3,
  SP_AV_DP: 4,
  PSB_AV_DP: 5,
  AAP: 6,
  KUN_YTELSE: 7,
  MS: 8,
  BA: 9,
  SN: 10,
};
