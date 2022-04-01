import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO>;

export default OverstyringAvklarStartdatoForPeriodenAp;
