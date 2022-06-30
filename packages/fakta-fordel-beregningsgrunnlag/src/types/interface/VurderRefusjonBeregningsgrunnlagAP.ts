import AvklaringsbehovTilBekreftelse from '@navikt/ft-types/src/BeregningAvklaringsbehovTilBekreftelse';
import FaktaFordelBeregningAksjonspunktCode from './FaktaFordelBeregningAksjonspunktCode';

export type VurderRefusjonAndelTransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
};

export type VurderRefusjonTransformedValues = {
  fastsatteAndeler: VurderRefusjonAndelTransformedValues[];
};

export type VurderRefusjonBeregningsgrunnlagAP = VurderRefusjonTransformedValues & {
  begrunnelse: string;
  periode: {
    fom: string;
    tom: string;
  };
};

export type VurderRefusjonAksjonspunktSubmitType = AvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN,
  VurderRefusjonTransformedValues
>;

export default VurderRefusjonAksjonspunktSubmitType;
