import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderArbeidsforholdPermisjonAp = {
  arbeidsforhold: {
    internArbeidsforholdId: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON>

export default VurderArbeidsforholdPermisjonAp;
