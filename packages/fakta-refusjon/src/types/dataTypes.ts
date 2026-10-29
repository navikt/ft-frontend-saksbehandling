export type RefusjonsAndel = {
  arbeidsgiverIdent: string;
  kilde: 'IM' | 'SAKSBEHANDLER';
  refusjonsperioder: Refusjonsperiode[];
};

export type Refusjonsperiode = {
  fom: string;
  tom: string;
  refusjonsbeløpPrMnd: number;
  fristForInnsendingAvRefusjonskrav: string;
  tidligsteMuligeDatoMedRefusjonEtterFrist: string;
  datoForInnsendtEllerEndretIM: string;
  utfall?: 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';
  utfallÅrsak?: UtfallÅrsak;
  utfallBegrunnelse?: string;
};

export type UtfallÅrsak = 'AVTALT_MED_ARBEIDSGIVER' | 'KONKURS' | 'UTMELDT';
