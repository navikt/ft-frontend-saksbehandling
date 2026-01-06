import { LovParagraf } from '../components/fellesPaneler/lovparagrafUtils';
import type { BeregningsgrunnlagValues } from './BeregningsgrunnlagAksjonspunkt';

export type BeregningFormValues = {
  [key: string]: BeregningsgrunnlagValues[];
};

const defaultFormName = 'BeregningForm';
export type FormNameType = ReturnType<typeof finnFormName>;
export const finnFormName = (lovparagraf: LovParagraf) => `${defaultFormName}_${lovparagraf}` as const;
