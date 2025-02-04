import { FaktaFordelBeregningAvklaringsbehovCode } from './FaktaFordelBeregningAvklaringsbehovCode';
import { GamleKoder } from './GamleKoder';

export const mapAvklaringsbehovKode = (kode: string): string => {
  if (GamleKoder.FORDEL_BEREGNINGSGRUNNLAG === kode) {
    return FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG;
  }
  if (GamleKoder.VURDER_REFUSJON_BERGRUNN === kode) {
    return FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN;
  }
  return kode;
};
