
type BeregningsaktivitetLagreType = {
  arbeidsforholdRef?: string;
  arbeidsgiverIdentifikator?: string;
  fom: string;
  oppdragsgiverOrg?: string;
  opptjeningAktivitetType: string;
  skalBrukes?: boolean;
  tom?: string;
}

type AvklarAktiviteterSubmitValuesTsType = {
  beregningsaktivitetLagreDtoList: BeregningsaktivitetLagreType[]
}

export default AvklarAktiviteterSubmitValuesTsType;
