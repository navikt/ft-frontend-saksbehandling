import type { Aktsomhet } from './Aktsomhet';
import type { VedtakResultatType } from './VedtakResultatType';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkTilbakeForPanel = {
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

type KodeverkMedNavnTilbakekreving<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
