import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSokersOpplysningspliktManuAp = {
  erVilkarOk: boolean;
  inntektsmeldingerSomIkkeKommer: {
    organisasjonsnummer?: string;
    aktørId?: string;
    brukerHarSagtAtIkkeKommer: boolean;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_MANU>;

export default BekreftSokersOpplysningspliktManuAp;
