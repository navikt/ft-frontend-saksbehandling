import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurdereYtelseSammeBarnSokerAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN>;

export default VurdereYtelseSammeBarnSokerAp;
