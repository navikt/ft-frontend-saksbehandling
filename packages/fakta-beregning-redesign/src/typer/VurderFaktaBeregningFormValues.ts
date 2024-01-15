import { formNameVurderFaktaBeregning } from '../components/BeregningFormUtils';
import { FaktaOmBeregningAksjonspunktValues } from './FaktaBeregningTypes';

type VurderFaktaBeregningFormValues = {
  [formNameVurderFaktaBeregning]: FaktaOmBeregningAksjonspunktValues[];
};

export default VurderFaktaBeregningFormValues;
