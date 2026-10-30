import type { AktivitetStatus, OpptjeningAktivitetType, VirksomhetType } from '@navikt/ft-types';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  VirksomhetType: VirksomhetType;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkForPanel = {
  [K in KodeverkType]: KodeverkMedNavn<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>;
