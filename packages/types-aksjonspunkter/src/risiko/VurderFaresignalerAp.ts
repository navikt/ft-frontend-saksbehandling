import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderFaresignalerAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_FARESIGNALER>

export default VurderFaresignalerAp;
