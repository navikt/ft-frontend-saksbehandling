type BeregningAvklaringsbehov = Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  kanLoses?: boolean;
  erTrukket?: boolean;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>;

export default BeregningAvklaringsbehov;
