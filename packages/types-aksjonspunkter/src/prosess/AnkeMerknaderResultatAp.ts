import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeMerknaderResultatAp = {
  erMerknaderMottatt?: boolean;
  avsluttBehandling?: boolean;
  merknadKommentar?: string;
  trygderettVurdering?: string;
  trygderettOmgjoerArsak?: string;
  trygderettVurderingOmgjoer?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_VURDERING_AV_ANKE_MERKNADER>;

export default AnkeMerknaderResultatAp;
