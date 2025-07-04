import type { BeregningsgrunnlagTilBekreftelse } from './BeregningsgrunnlagTilBekreftelse';

export type BeregningAvklaringsbehovTilBekreftelse<T, V> = {
  kode: T;
  begrunnelse?: string;
  grunnlag: BeregningsgrunnlagTilBekreftelse<V>[];
};
