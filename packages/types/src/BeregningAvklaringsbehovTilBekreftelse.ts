export type GrunnlagTilBekreftelse<T> = T & {
  periode: {
    fom: string;
    tom: string;
  };
  begrunnelse?: string;
};

export type AvklaringsbehovTilBekreftelse<T, V> = {
  kode: T;
  begrunnelse?: string;
  grunnlag: GrunnlagTilBekreftelse<V>[];
};

export default AvklaringsbehovTilBekreftelse;
