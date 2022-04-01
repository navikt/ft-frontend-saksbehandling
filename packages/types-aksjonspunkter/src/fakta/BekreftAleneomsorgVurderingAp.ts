import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftAleneomsorgVurderingAp = {
  aleneomsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>;

export default BekreftAleneomsorgVurderingAp;
