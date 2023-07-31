import { DetaljertFeilutbetalingPeriode } from '@navikt/ft-types';

export type DataForPeriode = {
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode;

export default DataForPeriode;
