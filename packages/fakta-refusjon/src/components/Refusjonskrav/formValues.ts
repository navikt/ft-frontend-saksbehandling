export type AvklarRefusjonsKravFormValues = {
  begrunnelse: string;
  refusjonskrav: RefusjonskravFormRad[];
};

export type RefusjonskravFormRad = {
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  kilde: string;
  fom: string;
  tom: string;
  refusjonsbeløpPrMnd: number;
  datoForInnsendtEllerEndretIM: string;
  fristForInnsendingAvRefusjonskrav: string;
  tidligsteMuligeDatoMedRefusjonEtterFrist: string;
  utfall?: 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';
  utfallÅrsak?: string;
};

export type RefusjonskravVurdering = Pick<RefusjonskravFormRad, 'utfall' | 'utfallÅrsak'>;
