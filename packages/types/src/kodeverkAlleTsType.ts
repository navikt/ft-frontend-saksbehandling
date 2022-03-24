import VilkarType from '@ft-frontend-saksbehandling/kodeverk/src/vilkarType';
import KodeverkType from '@ft-frontend-saksbehandling/kodeverk/src/kodeverkTyper';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type Avslagsårsak = Record<VilkarType, KodeverkMedNavn[]>;
type AlleKodeverkMedSammeVerditype = Record<KodeverkType, KodeverkMedNavn[]>

type Modify<T, R> = Omit<T, keyof R> & R;
type AlleKodeverk = Modify<AlleKodeverkMedSammeVerditype, {
  Avslagsårsak: Avslagsårsak;
}>

export default AlleKodeverk;
