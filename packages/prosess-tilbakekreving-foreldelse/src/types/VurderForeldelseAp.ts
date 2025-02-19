import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import { ForeldelseAksjonspunktCodes } from '../ForeldelseAksjonspunktCodes';

export type VurderForeldelseAp = {
  foreldelsePerioder: {
    fraDato: string;
    tilDato: string;
    foreldelseVurderingType?: string;
    begrunnelse?: string;
  }[];
} & AksjonspunktTilBekreftelse<ForeldelseAksjonspunktCodes.VURDER_FORELDELSE>;
