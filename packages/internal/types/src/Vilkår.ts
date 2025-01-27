import { Vilkårperiode } from './Vilkårperiode';

export type Vilkår = Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>;
