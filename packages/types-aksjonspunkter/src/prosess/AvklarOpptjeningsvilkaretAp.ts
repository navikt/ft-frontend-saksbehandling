import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarOpptjeningsvilkaretAp = {
  erVilkarOk: boolean;
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_OPPTJENINGSVILKARET>;

export default AvklarOpptjeningsvilkaretAp;
