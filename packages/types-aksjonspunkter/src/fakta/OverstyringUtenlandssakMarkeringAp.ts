import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringUtenlandssakMarkeringAp = {
  gammelVerdi: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE>;

export default OverstyringUtenlandssakMarkeringAp;
