import type { DetaljertFeilutbetalingPeriode } from './detaljerteFeilutbetalingsperioder';

export type DataForPeriode = {
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode;
