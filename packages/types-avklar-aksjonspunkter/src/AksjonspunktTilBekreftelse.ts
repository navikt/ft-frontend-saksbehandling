import AksjonspunktCode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import AksjonspunktKodeTilbakekreving from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodesTilbakekreving';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
