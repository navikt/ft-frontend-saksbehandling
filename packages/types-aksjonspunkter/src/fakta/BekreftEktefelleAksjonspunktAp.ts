import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftEktefelleAksjonspunktAp = {
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>;

export default BekreftEktefelleAksjonspunktAp;
