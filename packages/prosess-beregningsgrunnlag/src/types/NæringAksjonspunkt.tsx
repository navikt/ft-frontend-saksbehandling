export type NyIArbeidslivetValues = {
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrnunnlagSNBegrunnelse?: string;
};

export type VurderOgFastsettValues = {
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
};

export type VurderVarigEndretTransformed = {
  erVarigEndretNaering: boolean;
  begrunnelse: string;
  bruttoBeregningsgrunnlag?: number;
};

export type NyIArbeidslivetruttoNæringTransformed = {
  begrunnelse: string;
  bruttoBeregningsgrunnlag: number;
};
