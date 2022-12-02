import GamleKoder from './GamleKoder';
import ProsessBeregningsgrunnlagAvklaringsbehovCode from './ProsessBeregningsgrunnlagAvklaringsbehovCode';

const mapAvklaringsbehovKode = (kode: string): string => {
  if (GamleKoder.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;
  }
  if (GamleKoder.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;
  }
  if (GamleKoder.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;
  }
  if (GamleKoder.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE;
  }
  if (GamleKoder.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG;
  }
  if (GamleKoder.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON;
  }
  if (GamleKoder.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;
  }
  return kode;
};

export default mapAvklaringsbehovKode;
