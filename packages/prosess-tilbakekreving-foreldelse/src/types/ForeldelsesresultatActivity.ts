import { FeilutbetalingPeriode } from '@navikt/ft-types';

export type ForeldelsesresultatActivity = Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode;
