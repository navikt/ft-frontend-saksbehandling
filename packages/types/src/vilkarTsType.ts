import Vilkarperiode from './vilkarperiodeTsType';

type Vilkar = Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkarperiode[];
}>;

export default Vilkar;
