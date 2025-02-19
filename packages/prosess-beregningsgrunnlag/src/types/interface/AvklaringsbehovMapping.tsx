import { GamleProsessBeregningsgrunnlagAvklaringsbehovCode } from './GamleProsessBeregningsgrunnlagAvklaringsbehovCode';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from './ProsessBeregningsgrunnlagAvklaringsbehovCode';

export const mapAvklaringsbehovKode = (kode: string): string => {
  if (GamleProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;
  }
  if (
    GamleProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD === kode
  ) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;
  }
  if (GamleProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;
  }
  if (
    GamleProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE ===
    kode
  ) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE;
  }
  if (GamleProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG;
  }
  if (GamleProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON === kode) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON;
  }
  if (
    GamleProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ===
    kode
  ) {
    return ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;
  }
  return kode;
};
