import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  AKTIVITET_STATUS = 'AktivitetStatus',
  OPPTJENING_AKTIVITET_TYPE = 'OpptjeningAktivitetType',
  OVERFOERING_AARSAK_TYPE = 'OverføringÅrsak',
}

type KodeverkForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkForPanel;
