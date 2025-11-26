import type { AktivitetStatus } from '@navikt/ft-types';

export type TabellRadData = {
  aktivitetStatus: AktivitetStatus;
  erFerdigBeregnet: boolean;
  inntekt?: number;
  bortfaltNaturalytelse?: number;
  inntektPlussNaturalytelse?: number;
};

export type TabellData = {
  fom: string;
  tom?: string;
  redusertPrÅr?: number;
  avkortetPrÅr?: number;
  dagsats?: number;
  årsak: string[];
  andeler: TabellRadData[];
};
