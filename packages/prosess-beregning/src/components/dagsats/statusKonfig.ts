import type { AktivitetStatus } from '@navikt/ft-types';

type StatusKonfigEntry = {
  vekt: number;
  beskrivelseId: string;
};

type StatusKonfig = Partial<Record<AktivitetStatus, StatusKonfigEntry>>;

// TODO: Sjekk om alle disse skal med eller ikke i nye løsningen
// Visningsrekkefølge på statuser i tabellen. Lavere tall = høyere opp i tabellen
export const statusKonfigMap: StatusKonfig = {
  AT: {
    vekt: 1,
    beskrivelseId: 'Dagsats.Arbeid',
  },
  FL: {
    vekt: 2,
    beskrivelseId: 'Dagsats.Frilans',
  },
  DP: {
    vekt: 3,
    beskrivelseId: 'Dagsats.Dagpenger',
  },
  SP_AV_DP: {
    vekt: 3,
    beskrivelseId: 'Dagsats.SykepengerAvDagpenger',
  },
  PSB_AV_DP: {
    vekt: 3,
    beskrivelseId: 'Dagsats.PleiepengerAvDagpenger',
  },
  AAP: {
    vekt: 4,
    beskrivelseId: 'Dagsats.Arbeidsavklaringspenger',
  },
  KUN_YTELSE: {
    vekt: 5,
    beskrivelseId: 'Dagsats.Ytelse',
  },
  MS: {
    vekt: 6,
    beskrivelseId: 'Dagsats.Militær',
  },
  BA: {
    vekt: 7,
    beskrivelseId: 'Dagsats.BrukersAndel',
  },
  SN: {
    vekt: 8,
    beskrivelseId: 'Dagsats.Næring',
  },
};
