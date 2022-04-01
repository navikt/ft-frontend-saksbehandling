import { AksjonspunktCode } from '@navikt/ft-kodeverk';
import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

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

type VurderRefusjonBeregningsgrunnlagAP = VurderRefusjonTransformedValues & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_REFUSJON_BERGRUNN>;

export default VurderRefusjonBeregningsgrunnlagAP;
