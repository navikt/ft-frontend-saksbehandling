import type { Fagsak } from './Fagsak';
import type { FagsakPerson } from './FagsakPersoner';

export type Aktør = Readonly<{
  fagsaker: Fagsak[];
  person: FagsakPerson;
}>;
