import { HendelseType } from '@navikt/ft-kodeverk';

import { Aktsomhet } from '../kodeverk/aktsomhet';
import { SærligGrunn } from '../kodeverk/særligGrunn';
import { VilkarResultatInfo } from './VilkårsvurdertePerioder';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
};

type KodeverkType = keyof KodeverkEnumMap;

export type KodeverkFpTilbakeForPanel = {
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavnTilbakekreving<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
