import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  vilkarType: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.OMSORGSOVERTAKELSE>;

export default AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
