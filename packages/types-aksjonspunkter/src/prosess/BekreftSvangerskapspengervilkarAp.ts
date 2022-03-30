import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSvangerskapspengervilkarAp = {
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SVANGERSKAPSVILKARET>;

export default BekreftSvangerskapspengervilkarAp;
