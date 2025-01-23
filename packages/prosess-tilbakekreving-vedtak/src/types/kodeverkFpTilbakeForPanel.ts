import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  AKTSOMHET = 'Aktsomhet',
  VEDTAK_RESULTAT_TYPE = 'VedtakResultatType',
}

export type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
