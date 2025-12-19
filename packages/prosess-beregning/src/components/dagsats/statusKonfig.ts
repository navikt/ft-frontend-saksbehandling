import type { AktivitetStatus } from '@navikt/ft-types';

type StatusKonfigEntry = {
  rekkefølgePri: number;
  beskrivelseId: string;
};

type StatusKonfig = Partial<Record<AktivitetStatus, StatusKonfigEntry>>;

// TODO: Sjekk om alle disse skal med eller ikke i nye løsningen
// Visningsrekkefølge på statuser i tabellen. Lavere tall = høyere opp i tabellen
export const statusKonfigMap: StatusKonfig = {
  AT: {
    rekkefølgePri: 1,
    beskrivelseId: 'Dagsats.Arbeid',
  },
  FL: {
    rekkefølgePri: 2,
    beskrivelseId: 'Dagsats.Frilans',
  },
  DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'Dagsats.Dagpenger',
  },
  SP_AV_DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'Dagsats.SykepengerAvDagpenger',
  },
  PSB_AV_DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'Dagsats.PleiepengerAvDagpenger',
  },
  AAP: {
    rekkefølgePri: 4,
    beskrivelseId: 'Dagsats.Arbeidsavklaringspenger',
  },
  KUN_YTELSE: {
    rekkefølgePri: 5,
    beskrivelseId: 'Dagsats.Ytelse',
  },
  MS: {
    rekkefølgePri: 6,
    beskrivelseId: 'Dagsats.Militær',
  },
  BA: {
    rekkefølgePri: 7,
    beskrivelseId: 'Dagsats.BrukersAndel',
  },
  SN: {
    rekkefølgePri: 8,
    beskrivelseId: 'Dagsats.Næring',
  },
};
