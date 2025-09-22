import type { FordelBeregningsgrunnlagAP } from './interface/FordelBeregningsgrunnlagAP';
import type { VurderNyttInntektsforholdAP } from './interface/VurderNyttInntektsforholdAP';
import type { VurderRefusjonBeregningsgrunnlagAP } from './interface/VurderRefusjonBeregningsgrunnlagAP';

export type AksjonspunktSubmitType =
  | FordelBeregningsgrunnlagAP
  | VurderRefusjonBeregningsgrunnlagAP
  | VurderNyttInntektsforholdAP;
