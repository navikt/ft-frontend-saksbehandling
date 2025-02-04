import { FaktaBeregningAvklaringsbehovCode } from './FaktaBeregningAvklaringsbehovCode';
import { GamleKoder } from './GamleKoder';

export const mapAvklaringsbehovKode = (kode: string): string => {
  if (GamleKoder.AVKLAR_AKTIVITETER === kode) {
    return FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER;
  }
  if (GamleKoder.VURDER_FAKTA_FOR_ATFL_SN === kode) {
    return FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN;
  }
  if (GamleKoder.OVERSTYRING_AV_BEREGNINGSAKTIVITETER === kode) {
    return FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;
  }
  if (GamleKoder.OVERSTYRING_AV_BEREGNINGSGRUNNLAG === kode) {
    return FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;
  }
  return kode;
};
