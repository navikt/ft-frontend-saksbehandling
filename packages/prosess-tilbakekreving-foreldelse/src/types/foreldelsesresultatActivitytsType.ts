import { FeilutbetalingPeriode } from '@navikt/ft-types';

type ForeldelsesresultatActivity = Readonly<{
  feilutbetaling: number;
  foreldet: string;
  erSplittet?: boolean;
}> & FeilutbetalingPeriode;

export default ForeldelsesresultatActivity;
