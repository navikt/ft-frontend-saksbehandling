export type Saksdokument = {
  dokumentId: string;
  journalpostId: string;
  tidspunkt?: string;
  tittel?: string;
};

export type FordelingGrunnlagDto = {
  refusjonsandeler: RefusjonsandelDto[];
};

export type RefusjonsandelDto = {
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
  journalpostId?: string;
  kilde: RefusjonKilde;
  refusjonsperioder: RefusjonsperiodeDto[];
};

export type RefusjonsperiodeDto = {
  fom: string;
  tom: string;
  refusjonPrMnd: number;
  utfall?: RefusjonUtfall;
  utfallÅrsak?: RefusjonUtfallÅrsak;
  utfallBegrunnelse?: string;
};

export type RefusjonKilde = 'INNTEKTSMELDING' | 'SAKSBEHANDLER';
export type RefusjonUtfall = 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';
export type RefusjonUtfallÅrsak = 'IKKE_INNENFOR_FRIST' | 'UTMELDT' | 'ALLEREDE_DIREKTE_UTBETALT';
