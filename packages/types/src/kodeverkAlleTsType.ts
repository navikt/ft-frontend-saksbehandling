import { KodeverkType, vilkarType as VilkarType } from '@navikt/ft-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type Avslagsårsak = Record<VilkarType, KodeverkMedNavn[]>;
type AlleKodeverkMedSammeVerditype = Record<KodeverkType, KodeverkMedNavn[]>

type Modify<T, R> = Omit<T, keyof R> & R;
type AlleKodeverk = Modify<AlleKodeverkMedSammeVerditype, {
  Avslagsårsak: Avslagsårsak;
}>

export default AlleKodeverk;
