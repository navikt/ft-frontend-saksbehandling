import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftTerminbekreftelseAp = {
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.TERMINBEKREFTELSE>

export default BekreftTerminbekreftelseAp;
