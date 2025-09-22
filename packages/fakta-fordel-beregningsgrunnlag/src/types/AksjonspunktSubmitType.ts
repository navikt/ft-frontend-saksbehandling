import type { FordelBeregningsgrunnlagAP } from './interface/FordelBeregningsgrunnlagAP.ts';
import type { VurderNyttInntektsforholdAP } from './interface/VurderNyttInntektsforholdAP.ts';
import type { VurderRefusjonBeregningsgrunnlagAP } from './interface/VurderRefusjonBeregningsgrunnlagAP.ts';

export type AksjonspunktSubmitType =
  | FordelBeregningsgrunnlagAP
  | VurderRefusjonBeregningsgrunnlagAP
  | VurderNyttInntektsforholdAP;
