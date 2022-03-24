import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OMSORGSOVERTAKELSE>;

export default AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
