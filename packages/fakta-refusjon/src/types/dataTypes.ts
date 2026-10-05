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
};

type UtfallÅrsak = string; /* dette skal være en string union på sikt */
