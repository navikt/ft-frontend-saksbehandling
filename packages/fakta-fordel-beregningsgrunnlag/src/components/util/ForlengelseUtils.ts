import { FordelBeregningsgrunnlagPeriode, ForlengelsePeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';

function inneholderPeriode(p1: { fom: string; tom?: string }, p2: { fom: string; tom?: string }) {
  return (
    p2.tom != null &&
    !dayjs(p2.tom).isBefore(dayjs(p1.fom)) &&
    (p1.tom == null || !dayjs(p2.tom).isAfter(dayjs(p1.tom)))
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
