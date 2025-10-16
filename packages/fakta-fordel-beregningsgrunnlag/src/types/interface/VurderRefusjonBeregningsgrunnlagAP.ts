import type { BeregningAvklaringsbehovTilBekreftelse } from '@navikt/ft-types';

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

export type VurderRefusjonBeregningsgrunnlagAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN,
  VurderRefusjonTransformedValues
>;
