import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  BEHANDLING_AARSAK = 'BehandlingÅrsakType',
  HENDELSE_TYPE = 'HendelseType',
  KONSEKVENS_FOR_YTELSEN = 'KonsekvensForYtelsen',
}

type KodeverkFpSakForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkFpSakForPanel;
