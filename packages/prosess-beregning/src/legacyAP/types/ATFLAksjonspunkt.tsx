export type FrilansInntektValues = {
  inntektFrilanser?: string;
};

export type ArbeidstakerInntektValues = {
  [key: string]: string;
};

export type TidsbegrenseArbeidsforholdValues = {
  [key: string]: string;
};

export type ATFLValues = FrilansInntektValues &
  ArbeidstakerInntektValues & {
    ATFLVurdering: string;
  };

export type ATFLTidsbegrensetValues = FrilansInntektValues &
  TidsbegrenseArbeidsforholdValues & {
    ATFLVurdering: string;
  };

export type TidsbegrenseArbeidsforholdTabellCelle = {
  erTidsbegrenset: boolean;
  isEditable: boolean;
  tabellInnhold: string | undefined;
  inputfieldKey: string;
};

export type TidsbegrenseArbeidsforholdTabellData = {
  [key: string]: TidsbegrenseArbeidsforholdTabellCelle[];
};

export type ATFLBegrunnelseValues = {
  ATFLVurdering: string;
};
