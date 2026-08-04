export type AksjonspunktTilBekreftelse<T> = {
  '@type': T;
  kode: T;
  begrunnelse?: string;
};
