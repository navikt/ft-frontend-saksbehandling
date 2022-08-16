// eslint-disable-next-line @typescript-eslint/ban-types
import { BeregningFaktaTransformedValues } from './interface/BeregningFaktaAP';

type FaktaBeregningSubmitValuesTsType = {
  periode: { fom: string; tom: string };
  begrunnelse: string;
} & BeregningFaktaTransformedValues;

export default FaktaBeregningSubmitValuesTsType;
