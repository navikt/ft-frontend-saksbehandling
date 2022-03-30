import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringBeregningAp = {
  beregnetTilkjentYtelse: number;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_BEREGNING>;

export default OverstyringBeregningAp;
