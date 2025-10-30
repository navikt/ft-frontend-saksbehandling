export type FordelBeregningsgrunnlagGenerellAndelValues = {
  andel?: string;
  aktivitetStatus?: string;
  andelsnr?: number;
  andelsnrRef?: number;
  nyAndel: boolean;
  kilde?: string;
  lagtTilAvSaksbehandler: boolean;
  inntektskategori?: string;
  forrigeInntektskategori?: string;
};

export type FordelBeregningsgrunnlagArbeidAndelValues = {
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  eksternArbeidsforholdId?: string;
  arbeidsforholdType?: string;
};

export type BGFordelArbeidsforhold = {
  andelsnr: number;
  nyttArbeidsforhold: boolean;
  beregningsperiodeTom: string;
  beregningsperiodeFom: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverIdent?: string;
  arbeidsgiverIdVisning?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType?: string;
};

export type FordelBeregningsgrunnlagAndelValues = FordelBeregningsgrunnlagGenerellAndelValues &
  FordelBeregningsgrunnlagArbeidAndelValues & {
    andelIArbeid?: string;
    fastsattBelop: string;
    readOnlyBelop?: string;
    refusjonskrav?: string;
    skalKunneEndreRefusjon?: boolean;
    belopFraInntektsmelding?: number;
    skalRedigereInntekt: boolean;
    refusjonskravFraInntektsmelding?: number;
    nyttArbeidsforhold?: boolean;
    beregningsgrunnlagPrAar?: string;
    forrigeRefusjonPrAar?: number;
    forrigeArbeidsinntektPrAar?: number;
    beregningsperiodeFom?: string;
    beregningsperiodeTom?: string;
    id?: string;
  };

type AksjonspunktValues = {
  begrunnelse?: string;
  periode: {
    fom: string;
    tom: string;
  };
};

export type FordelBeregningsgrunnlagValues = {
  [key: string]: FordelBeregningsgrunnlagAndelValues[];
};

export type FordelBeregningsgrunnlagMedAksjonspunktValues = AksjonspunktValues &
  FordelBeregningsgrunnlagValues & {
    beregningsgrunnlagStp: string;
  };

export type FordelBeregningsgrunnlagFormValues = {
  FORDEL_BEREGNING_FORM: FordelBeregningsgrunnlagMedAksjonspunktValues[];
};

export type VurderRefusjonValues = {
  [key: string]: string;
};

export type VurderRefusjonskravValues = {
  [key: string]: boolean | undefined;
};

export type VurderRefusjonFieldValues = {
  beregningsgrunnlagStp: string;
  begrunnelse: string;
  periode: {
    fom: string;
    tom: string;
  };
  refusjon: VurderRefusjonValues;
  refusjonskrav: VurderRefusjonskravValues;
};

export type VurderRefusjonFormValues = {
  VURDER_REFUSJON_BERGRUNN_FORM: VurderRefusjonFieldValues[];
};

export type TilkommetInntektsforholdFieldValues = {
  aktivitetStatus: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdId?: string;
  skalRedusereUtbetaling?: boolean;
  bruttoInntektPrÅr?: string;
};

export type TilkommetAktivitetValues = {
  fom: string;
  tom: string;
  inntektsforhold: TilkommetInntektsforholdFieldValues[];
};

type TilkommetAktivitetPeriodeValuesMedPerioder = {
  perioder: TilkommetAktivitetValues[];
};

export type TilkommetAktivitetFieldValues = AksjonspunktValues &
  TilkommetAktivitetPeriodeValuesMedPerioder & {
    beregningsgrunnlagStp: string;
  };

export type TilkommetAktivitetFormValues = {
  [key: string]: TilkommetAktivitetFieldValues[];
};
