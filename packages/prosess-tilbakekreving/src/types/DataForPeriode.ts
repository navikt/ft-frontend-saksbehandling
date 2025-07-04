import type { DetaljertFeilutbetalingPeriode } from './DetaljerteFeilutbetalingsperioder';

export type DataForPeriode = {
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode;
