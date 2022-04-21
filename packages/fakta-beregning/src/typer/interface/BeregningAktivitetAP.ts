import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import { BeregningAktivitetTransformedValues, BeregningAktiviteterTransformedValues } from './BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from './FaktaBeregningAksjonspunktCode';

export type OverstyrBeregningsaktiviteterAP = BeregningAktivitetTransformedValues &
  AksjonspunktTilBekreftelse<FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>;

export type AvklarBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues
  & AksjonspunktTilBekreftelse<FaktaBeregningAksjonspunktCode.AVKLAR_AKTIVITETER>;

type BeregningAktivitetAP = AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP;

export default BeregningAktivitetAP;
