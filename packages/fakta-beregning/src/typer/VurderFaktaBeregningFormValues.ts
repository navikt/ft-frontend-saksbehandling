import { formNameVurderFaktaBeregning } from '../components/BeregningFormUtils';
import { FaktaOmBeregningAksjonspunktValues } from './FaktaBeregningTypes';

export type VurderFaktaBeregningFormValues = {
  [formNameVurderFaktaBeregning]: FaktaOmBeregningAksjonspunktValues[];
};
