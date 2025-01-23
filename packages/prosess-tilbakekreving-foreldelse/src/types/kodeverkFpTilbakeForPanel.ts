import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  FORELDELSE_VURDERING = 'ForeldelseVurderingType',
}

export type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
