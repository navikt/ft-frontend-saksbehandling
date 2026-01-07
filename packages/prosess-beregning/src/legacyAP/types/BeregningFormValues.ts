import type { AksjonspunktKode } from '../../utils/aksjonspunkt';
import type { BeregningsgrunnlagValues } from './BeregningsgrunnlagAksjonspunkt';

export type BeregningFormValues = {
  [key: string]: BeregningsgrunnlagValues[];
};

const defaultFormName = 'BeregningForm';
export type FormNameType = ReturnType<typeof finnFormName>;
export const finnFormName = (aksjonspunktKode: AksjonspunktKode) => `${defaultFormName}_${aksjonspunktKode}` as const;
