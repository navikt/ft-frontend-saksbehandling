import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  BEHANDLING_AARSAK = 'BehandlingÅrsakType',
  KONSEKVENS_FOR_YTELSEN = 'KonsekvensForYtelsen',
}

export type KodeverkFpSakForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
