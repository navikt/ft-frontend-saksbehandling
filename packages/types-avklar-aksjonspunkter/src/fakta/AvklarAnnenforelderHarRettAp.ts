import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarAnnenforelderHarRettAp = {
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT>

export default AvklarAnnenforelderHarRettAp;
