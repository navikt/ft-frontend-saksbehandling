import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarVergeAp = {
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom: string;
  vergeType: string;
  organisasjonsnummer: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>;

export default AvklarVergeAp;
