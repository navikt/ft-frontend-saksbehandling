import { BeregningsgrunnlagValues } from './BeregningsgrunnlagAksjonspunktTsType';

const formName = 'BeregningForm';

type BeregningFormValues = {
  [formName]: BeregningsgrunnlagValues[];
};

export default BeregningFormValues;
