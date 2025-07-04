import { formNameVurderFaktaBeregning } from '../utils/BeregningFormUtils';
import type { FaktaOmBeregningAksjonspunktValues } from './FaktaBeregningTypes';

export type VurderFaktaBeregningFormValues = {
  [formNameVurderFaktaBeregning]: FaktaOmBeregningAksjonspunktValues[];
};
