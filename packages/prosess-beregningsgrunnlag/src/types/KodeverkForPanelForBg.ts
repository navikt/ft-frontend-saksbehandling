import { AktivitetStatus, OpptjeningAktivitetType, OverføringÅrsak } from '@navikt/ft-kodeverk';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverføringÅrsak;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkFpSakForPanel = {
  [K in KodeverkType]: KodeverkMedNavn<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
