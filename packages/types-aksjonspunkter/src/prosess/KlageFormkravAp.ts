import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageFormkravBasic = {
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving?: boolean;
  tilbakekrevingInfo: {
    tilbakekrevingUuid?: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  vedtakBehandlingUuid?: string;
};

type KlageFormkravAp = KlageFormkravBasic & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP>;

export type KlageFormkravKaAp = KlageFormkravBasic & {
  sendTilKabal?: boolean;
  klageHjemmel?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_KA>;

export default KlageFormkravAp;
