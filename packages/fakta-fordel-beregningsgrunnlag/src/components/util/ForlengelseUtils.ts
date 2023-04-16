import { FordelBeregningsgrunnlagPeriode, ForlengelsePeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';

function overlapper(fp: ForlengelsePeriodeProp, periode: FordelBeregningsgrunnlagPeriode): boolean {
  return (
    (dayjs(fp.fom).isSame(dayjs(periode.fom)) || dayjs(fp.fom).isBefore(dayjs(periode.fom))) &&
    (dayjs(fp.tom).isSame(dayjs(periode.tom)) || dayjs(fp.tom).isAfter(dayjs(periode.tom)))
  );
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
