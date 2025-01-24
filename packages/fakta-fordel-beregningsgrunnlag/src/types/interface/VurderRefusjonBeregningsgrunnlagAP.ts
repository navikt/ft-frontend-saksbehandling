import { BeregningAvklaringsbehovTilBekreftelse } from '@navikt/ft-types';
import { FaktaFordelBeregningAvklaringsbehovCode } from './FaktaFordelBeregningAvklaringsbehovCode';

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

export type VurderRefusjonAksjonspunktSubmitType = BeregningAvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN,
  VurderRefusjonTransformedValues
>;
