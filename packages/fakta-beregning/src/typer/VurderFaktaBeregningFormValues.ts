import { formNameVurderFaktaBeregning } from '../utils/BeregningFormUtils';
import { FaktaOmBeregningAksjonspunktValues } from './FaktaBeregningTypes';

export type VurderFaktaBeregningFormValues = {
  [formNameVurderFaktaBeregning]: FaktaOmBeregningAksjonspunktValues[];
};
