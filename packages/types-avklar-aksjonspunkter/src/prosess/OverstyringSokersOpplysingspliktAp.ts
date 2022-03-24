import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringSokersOpplysingspliktAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST>;

export default OverstyringSokersOpplysingspliktAp;
