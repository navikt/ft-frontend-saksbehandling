import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  AKTIVITET_STATUS = 'AktivitetStatus',
  INNTEKTSKATEGORI = 'Inntektskategori',
  OPPTJENING_AKTIVITET_TYPE = 'OpptjeningAktivitetType',
}

export type KodeverkForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
