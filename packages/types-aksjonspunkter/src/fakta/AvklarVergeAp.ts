import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarVergeAp = {
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom: string;
  vergeType: string;
  organisasjonsnummer: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_VERGE>;

export default AvklarVergeAp;
