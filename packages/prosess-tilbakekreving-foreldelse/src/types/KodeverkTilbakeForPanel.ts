import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  ForeldelseVurderingType: ForeldelseVurderingType;
};

export type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkTilbakeForPanel = {
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavnTilbakekreving<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
