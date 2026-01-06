import type { AktivitetStatus, Inntektskategori, OpptjeningAktivitetType } from '@navikt/ft-types';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  AktivitetStatus: AktivitetStatus;
  Inntektskategori: Inntektskategori;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkForPanel = {
  [K in KodeverkType]: KodeverkMedNavn<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>;
