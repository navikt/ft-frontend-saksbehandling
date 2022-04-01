import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringSokersOpplysingspliktAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_OVST>;

export default OverstyringSokersOpplysingspliktAp;
