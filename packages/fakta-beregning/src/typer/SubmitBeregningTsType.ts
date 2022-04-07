import AvklarAktiviteterSubmitValuesTsType from './AvklarAktiviteterSubmitValuesTsType';
import FaktaBeregningSubmitValuesTsType from './FaktaBeregningSubmitValuesTsType';

type SubmitBeregningType = {
  kode: string;
  begrunnelse: string;
  grunnlag: AvklarAktiviteterSubmitValuesTsType[] | FaktaBeregningSubmitValuesTsType[];
}

export default SubmitBeregningType;
