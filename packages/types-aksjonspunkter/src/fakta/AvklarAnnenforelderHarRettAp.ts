import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarAnnenforelderHarRettAp = {
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT>

export default AvklarAnnenforelderHarRettAp;
