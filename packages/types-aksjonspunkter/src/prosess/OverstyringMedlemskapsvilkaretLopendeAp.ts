import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type OverstyringMedlemskapsvilkaretLopendeAp = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  avslagDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR>;

export default OverstyringMedlemskapsvilkaretLopendeAp;
