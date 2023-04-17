import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  BEHANDLING_AARSAK = 'BehandlingÅrsakType',
  KONSEKVENS_FOR_YTELSEN = 'KonsekvensForYtelsen',
}

type KodeverkFpSakForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkFpSakForPanel;
