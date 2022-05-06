import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import FaktaFordelBeregningAksjonspunktCode from './FaktaFordelBeregningAksjonspunktCode';

export type VurderRefusjonAndelTransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
};

type VurderRefusjonTransformedValues = {
  fastsatteAndeler: VurderRefusjonAndelTransformedValues[];
};

type VurderRefusjonBeregningsgrunnlagAP = VurderRefusjonTransformedValues &
  AksjonspunktTilBekreftelse<FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN>;

export default VurderRefusjonBeregningsgrunnlagAP;
