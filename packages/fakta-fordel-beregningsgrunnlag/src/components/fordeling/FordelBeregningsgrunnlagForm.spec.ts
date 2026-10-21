import { beregningsgrunnlag as bgListeMedForlengelse } from '../../../testdata/FlerePerioderMedForlengelse';
import type { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FordelBeregningsgrunnlagForm } from './FordelBeregningsgrunnlagForm';
import { fordelBGFieldArrayNamePrefix, slåSammenPerioder } from './fordelPerioderUtils';

describe('FordelBeregningsgrunnlagForm.transformValues', () => {
  it('skal ikke sende inn perioder utenfor forlengelsen', () => {
    const bg = bgListeMedForlengelse[0]!;
    const fordelPerioder = bg.faktaOmFordeling?.fordelBeregningsgrunnlag?.fordelBeregningsgrunnlagPerioder ?? [];
    const bgPerioder = bg.beregningsgrunnlagPeriode;
    const values = Object.fromEntries(
      slåSammenPerioder(fordelPerioder, bgPerioder, bg.forlengelseperioder).map((_, index) => [
        fordelBGFieldArrayNamePrefix + index,
        [],
      ]),
    ) as FordelBeregningsgrunnlagValues;

    const { endretBeregningsgrunnlagPerioder } = FordelBeregningsgrunnlagForm.transformValues(
      values,
      fordelPerioder,
      bgPerioder,
      bg.forlengelseperioder,
    );

    expect(endretBeregningsgrunnlagPerioder.map(p => p.fom)).toEqual([
      '2021-07-26',
      '2021-07-31',
      '2021-08-02',
      '2021-08-07',
      '2021-08-09',
    ]);
  });
});
