import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderFaresignalerAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>

export default VurderFaresignalerAp;
