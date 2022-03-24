import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringMedlemskapsvilkaretLopendeAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  avslagDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretLopendeAp;
