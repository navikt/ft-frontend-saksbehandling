type BeregningsaktivitetLagreType = {
  arbeidsforholdRef?: string;
  arbeidsgiverIdentifikator?: string;
  fom: string;
  oppdragsgiverOrg?: string;
  opptjeningAktivitetType: string;
  skalBrukes?: boolean;
  tom?: string;
};

type AvklarAktiviteterSubmitValuesTsType = {
  periode: { fom: string; tom: string };
  begrunnelse: string;
  beregningsaktivitetLagreDtoList: BeregningsaktivitetLagreType[];
};

export default AvklarAktiviteterSubmitValuesTsType;
