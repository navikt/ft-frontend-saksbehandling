type Begrunnelse = {
  begrunnelse: string;
};

export type DekningsgradResultatAp = {
  dekningsgrad: number;
} & Begrunnelse;

export type ArbeidsinntektResultat = {
  andelsnr: number;
  inntekt: number;
};

export type FastsettAvvikATFLResultatAP = {
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
} & Begrunnelse;

export type TidsbegrensetArbeidsforholdInntektResultat = {
  andelsnr: number;
  bruttoFastsattInntekt: number;
};

export type TidsbegrensetArbeidsforholdPeriodeResultat = {
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
};

export type FastsettAvvikATFLTidsbegrensetResultatAP = {
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
} & Begrunnelse;

export type VurderVarigEndretNyoppstartetResultatAP = {
  erVarigEndretNaering: boolean;
  bruttoBeregningsgrunnlag?: number;
} & Begrunnelse;

export type NyIArbeidslivetruttoNæringResultatAP = {
  bruttoBeregningsgrunnlag: number;
} & Begrunnelse;

type BeregningsgrunnlagResultatAP =
  | NyIArbeidslivetruttoNæringResultatAP
  | VurderVarigEndretNyoppstartetResultatAP
  | FastsettAvvikATFLTidsbegrensetResultatAP
  | FastsettAvvikATFLResultatAP
  | DekningsgradResultatAp;

type BeregningsgrunnlagValuesSubmitType = {
  periode: {
    fom: string;
    tom: string;
  };
  begrunnelse: string;
};

export type BeregningAksjonspunktSubmitType = {
  kode: string;
  begrunnelse: string;
  grunnlag: BeregningsgrunnlagValuesSubmitType[];
};

export type GruppertAksjonspunktData = {
  kode: string;
  aksjonspunktData: BeregningsgrunnlagResultatAP;
};

export default BeregningsgrunnlagResultatAP;
