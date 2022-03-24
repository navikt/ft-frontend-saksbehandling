import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftTerminbekreftelseAp = {
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.TERMINBEKREFTELSE>

export default BekreftTerminbekreftelseAp;
