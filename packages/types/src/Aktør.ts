import { Fagsak } from './Fagsak';
import { FagsakPerson } from './FagsakPersoner';

export type Aktør = Readonly<{
  fagsaker: Fagsak[];
  person: FagsakPerson;
}>;
