import type { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import {
  type BeregningAktiviteterTransformedValues,
  type BeregningAktivitetTransformedValues,
} from './BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from './FaktaBeregningAvklaringsbehovCode';

export type OverstyrBeregningsaktiviteterAP = BeregningAktivitetTransformedValues &
  AksjonspunktTilBekreftelse<FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>;

export type AvklarBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues &
  AksjonspunktTilBekreftelse<FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER>;

export type BeregningAktivitetAP = AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP;
