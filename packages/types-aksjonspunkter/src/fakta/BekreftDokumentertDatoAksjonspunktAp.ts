import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftDokumentertDatoAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.ADOPSJONSDOKUMENTAJON>;

export default BekreftDokumentertDatoAksjonspunktAp;
