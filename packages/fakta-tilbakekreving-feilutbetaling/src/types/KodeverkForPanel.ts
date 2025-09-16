import { BehandlingArsakType, BehandlingResultatType } from '@navikt/ft-kodeverk';

import type { KonsekvensForYtelsen } from './KonsekvensForYtelsen';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  BehandlingÅrsakType: BehandlingArsakType;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  BehandlingResultatType: BehandlingResultatType;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkForPanel = {
  [K in KodeverkType]: KodeverkMedNavn<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
