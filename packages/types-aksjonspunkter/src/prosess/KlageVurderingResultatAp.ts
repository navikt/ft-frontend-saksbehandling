import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KlageVurderingResultatAp = {
  klageVurdering: string;
  fritekstTilBrev?: string;
  klageAvvistArsak?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  vedtaksdatoPaklagdBehandling?: string;
  erGodkjentAvMedunderskriver?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.BEHANDLE_KLAGE_NFP | AksjonspunktCode.BEHANDLE_KLAGE_NK>;

export default KlageVurderingResultatAp;
