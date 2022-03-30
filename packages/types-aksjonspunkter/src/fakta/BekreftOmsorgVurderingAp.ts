import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftOmsorgVurderingAp = {
  omsorg: boolean;
  ikkeOmsorgPerioder: {
    periodeFom: string;
    periodeTom: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG>;

export default BekreftOmsorgVurderingAp;
