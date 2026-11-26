import type { FaktaOmBeregningAksjonspunktValues } from './FaktaBeregningTypes';

export const formNameVurderFaktaBeregning = 'vurderFaktaBeregningForm';

export type VurderFaktaBeregningFormValues = {
  [formNameVurderFaktaBeregning]: FaktaOmBeregningAksjonspunktValues[];
};
