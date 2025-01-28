import { FeilutbetalingPeriode } from './FeilutbetalingPerioder';

export type ForeldelsesresultatActivity = Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode;
