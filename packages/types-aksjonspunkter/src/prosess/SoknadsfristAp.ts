import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type SoknadsfristAp = {
  erVilkarOk: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SOKNADSFRISTVILKARET>;

export default SoknadsfristAp;
