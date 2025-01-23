import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import { VedtakAksjonspunktCode } from '../VedtakAksjonspunktCode';

export type ForeslaVedtakTilbakekrevingAp = {
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>;
