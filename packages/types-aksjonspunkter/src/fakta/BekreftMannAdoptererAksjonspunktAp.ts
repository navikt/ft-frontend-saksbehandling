import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftMannAdoptererAksjonspunktAp = {
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE>;

export default BekreftMannAdoptererAksjonspunktAp;
