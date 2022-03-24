import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import AksjonspunktCodeTilbakekreving from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodesTilbakekreving';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type FatterVedtakAp = {
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: string[];
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FATTER_VEDTAK | AksjonspunktCodeTilbakekreving.FATTER_VEDTAK>;

export default FatterVedtakAp;
