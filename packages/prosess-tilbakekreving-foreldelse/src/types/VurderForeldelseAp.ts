import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import ForeldelseAksjonspunktCodes from '../ForeldelseAksjonspunktCodes';

type VurderForeldelseAp = {
  foreldelsePerioder: {
    fraDato: string;
    tilDato: string;
    foreldelseVurderingType: string;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<ForeldelseAksjonspunktCodes.VURDER_FORELDELSE>;

export default VurderForeldelseAp;
