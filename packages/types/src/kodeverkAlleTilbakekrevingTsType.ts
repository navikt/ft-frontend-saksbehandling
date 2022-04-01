import { tilbakekrevingKodeverkTyper as TilbakekrevingKodeverkType } from '@navikt/ft-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>

export default AlleKodeverkTilbakekreving;
