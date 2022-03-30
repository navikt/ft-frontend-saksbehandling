import { AksjonspunktCodeTilbakekreving, AksjonspunktCode } from '@navikt/ft-kodeverk';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode | AksjonspunktCodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
