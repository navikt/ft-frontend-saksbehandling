import type { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import { VedtakAksjonspunktCode } from '../VedtakAksjonspunktCode';

export type ForeslaVedtakTilbakekrevingAp = HentForhåndvisningVedtaksbrevPdf &
  AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>;

export type HentForhåndvisningVedtaksbrevPdf = {
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
};
