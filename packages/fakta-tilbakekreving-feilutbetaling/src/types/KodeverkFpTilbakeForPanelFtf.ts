import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  HENDELSE_TYPE = 'HendelseType',
  HENDELSE_UNDERTYPE = 'HendelseUnderType',
  TILBAKEKR_VIDERE_BEH = 'VidereBehandling',
}

export type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
