import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderTilbaketrekkAp = {
  hindreTilbaketrekk?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_TILBAKETREKK>;

export default VurderTilbaketrekkAp;
