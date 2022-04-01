import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeVurderingResultatAp = {
  ankeVurdering: string;
  erSubsidiartRealitetsbehandles?: boolean;
  fritekstTilBrev: string;
  ankeOmgjoerArsak: string;
  ankeVurderingOmgjoer: string;
  erGodkjentAvMedunderskriver?: boolean;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart?: boolean;
  erFristIkkeOverholdt?: boolean;
  erIkkeKonkret?: boolean;
  erIkkeSignert?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.MANUELL_VURDERING_AV_ANKE>;

export default AnkeVurderingResultatAp;
