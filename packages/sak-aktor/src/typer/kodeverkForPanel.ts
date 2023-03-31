import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  FAGSAK_STATUS = 'FagsakStatus',
  FAGSAK_YTELSE = 'FagsakYtelseType',
}

type KodeverkForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkForPanel;
