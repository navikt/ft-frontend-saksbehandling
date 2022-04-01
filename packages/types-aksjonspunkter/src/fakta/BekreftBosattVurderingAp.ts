import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import MedlemskapBekreftetPeriode from './MedlemskapBekreftetPeriode';

type BekreftBosattVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT>;

export default BekreftBosattVurderingAp;
