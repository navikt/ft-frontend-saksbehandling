import { FordelBeregningsgrunnlagPeriode, ForlengelsePeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';

function inneholderPeriode(periode2: { fom: string; tom?: string }, periode1: { fom: string; tom?: string }) {
  return (
    periode1.tom != null &&
    !dayjs(periode1.tom).isBefore(dayjs(periode2.fom)) &&
    (periode2.tom == null || !dayjs(periode1.tom).isAfter(dayjs(periode2.tom)))
  );
}

function overlapper(periode1: { fom: string; tom?: string }, periode2: { fom: string; tom?: string }): boolean {
  return inneholderPeriode(periode1, periode2) || inneholderPeriode(periode2, periode1);
}

function erPeriodeTilVurdering(
  periode: FordelBeregningsgrunnlagPeriode,
  forlengelseperioder?: ForlengelsePeriodeProp[],
): boolean {
  return (
    !forlengelseperioder || forlengelseperioder.length === 0 || forlengelseperioder.some(fp => overlapper(fp, periode))
  );
}

export default erPeriodeTilVurdering;
