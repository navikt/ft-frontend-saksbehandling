import { AksjonspunktCode } from '@navikt/ft-kodeverk';
import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import { BeregningAktivitetTransformedValues, BeregningAktiviteterTransformedValues } from './BeregningFaktaAP';

export type OverstyrBeregningsaktiviteterAP = BeregningAktivitetTransformedValues &
  AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>;

export type AvklarBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_AKTIVITETER>;

type BeregningAktivitetAP = AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP;

export default BeregningAktivitetAP;
