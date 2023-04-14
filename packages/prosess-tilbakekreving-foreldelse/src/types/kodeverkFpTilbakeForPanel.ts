import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  FORELDELSE_VURDERING = 'ForeldelseVurderingType',
}

type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkFpTilbakeForPanel;
