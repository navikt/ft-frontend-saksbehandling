import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../ProsessBeregningsgrunnlagAksjonspunktCode';

export type DekningsgradResultatAp = {
  dekningsgrad: number,
} & AksjonspunktTilBekreftelse<ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD>;

export type ArbeidsinntektResultat = {
  andelsnr: number;
  inntekt: number;
}

export type FastsettAvvikATFLResultatAP = {
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number;
} & AksjonspunktTilBekreftelse<ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS>;

export type TidsbegrensetArbeidsforholdInntektResultat = {
  andelsnr: number;
  bruttoFastsattInntekt: number;
}

export type TidsbegrensetArbeidsforholdPeriodeResultat = {
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}

export type FastsettAvvikATFLTidsbegrensetResultatAP = {
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number;
} & AksjonspunktTilBekreftelse<ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD>;

export type VurderVarigEndretNyoppstartetResultatAP = {
  erVarigEndretNaering: boolean;
  bruttoBeregningsgrunnlag?: number;
} & AksjonspunktTilBekreftelse<ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE>;

export type NyIArbeidslivetruttoNæringResultatAP = {
  bruttoBeregningsgrunnlag: number;
} & AksjonspunktTilBekreftelse<ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET>;

type BeregningsgrunnlagResultatAP = NyIArbeidslivetruttoNæringResultatAP | VurderVarigEndretNyoppstartetResultatAP
  | FastsettAvvikATFLTidsbegrensetResultatAP | FastsettAvvikATFLResultatAP | DekningsgradResultatAp;

export default BeregningsgrunnlagResultatAP;
