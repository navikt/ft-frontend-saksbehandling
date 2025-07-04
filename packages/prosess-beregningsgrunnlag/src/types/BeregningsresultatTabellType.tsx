import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';

export type TabellRadData = {
  status: string;
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

export type TabellMap = {
  [key: string]: BeregningsgrunnlagAndel[];
};
