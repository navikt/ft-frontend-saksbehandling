import type { BeregningAvklaringsbehovTilBekreftelse } from '@navikt/ft-types';

import { FaktaFordelBeregningAvklaringsbehovCode } from './FaktaFordelBeregningAvklaringsbehovCode';

type VurderNyttInntektsforholdAndelTransformedValues = {
  aktivitetStatus: string;
  skalRedusereUtbetaling: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  bruttoInntektPrÅr?: number;
};

type TilkommetInntektPeriodeTransformedValues = {
  tilkomneInntektsforhold: VurderNyttInntektsforholdAndelTransformedValues[];
  fom: string;
  tom: string;
};

export type VurderNyttInntektsforholTransformedValues = {
  tilkomneInntektsforhold: TilkommetInntektPeriodeTransformedValues[];
};

export type VurderNyttInntektsforholdAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAvklaringsbehovCode.VURDER_NYTT_INNTKTSFRHLD,
  VurderNyttInntektsforholTransformedValues
>;
