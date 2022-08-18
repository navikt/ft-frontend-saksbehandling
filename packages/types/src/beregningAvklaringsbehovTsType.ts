type BeregningAvklaringsbehov = Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  kanLoses: boolean;
  erTrukket: boolean;
}>;

export default BeregningAvklaringsbehov;
